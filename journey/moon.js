// Procedural, self-contained moon renderer (no external textures).
// Renders a lit lunar sphere into an offscreen canvas once; the transition
// then just draws that sprite each frame, so animation cost stays tiny.

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash3(x, y, z) {
  let h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

function noise3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const l = (a, b, t) => a + (b - a) * t;
  return l(
    l(l(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), u), l(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), u), v),
    l(l(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), u), l(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), u), v),
    w
  );
}

function fbm(x, y, z, octaves) {
  let sum = 0, amp = 0.5, freq = 1, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3(x * freq, y * freq, z * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2.03;
  }
  return sum / norm;
}

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Computes RGBA pixels (size×size) of the lit moon disk. Worker-safe. */
export function moonPixels(size) {
  const data = new Uint8ClampedArray(size * size * 4);
  const rand = mulberry32(20261115);

  // Craters: random centres on the visible hemisphere, power-law radii.
  const craters = [];
  for (let i = 0; i < 210; i++) {
    let x, y, z, d;
    do {
      x = rand() * 2 - 1; y = rand() * 2 - 1; z = rand() * 2 - 1;
      d = Math.hypot(x, y, z);
    } while (d > 1 || d < 0.1);
    x /= d; y /= d; z /= d;
    if (z < -0.15) z = -z;
    const r = 0.012 + 0.13 * Math.pow(rand(), 5.5);
    craters.push({ x, y, z, r, reach: 1 - Math.pow(r * (r < 0.045 ? 2.6 : 1.3), 2) / 2, young: r < 0.04 && rand() < 0.18, depth: 0.25 + rand() * 0.25 });
  }

  // Light from upper-left, slightly in front: a bright gibbous moon.
  let Lx = -0.55, Ly = -0.32, Lz = 0.77;
  const Ll = Math.hypot(Lx, Ly, Lz); Lx /= Ll; Ly /= Ll; Lz /= Ll;

  const half = size / 2;
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const nx = (px + 0.5 - half) / half;
      const ny = (py + 0.5 - half) / half;
      const rr = nx * nx + ny * ny;
      const idx = (py * size + px) * 4;
      if (rr > 1) { data[idx + 3] = 0; continue; }
      const nz = Math.sqrt(1 - rr);

      // Albedo: highlands with dark maria and fine regolith detail.
      const m = fbm(nx * 1.25 + 3.1, ny * 1.25 - 1.7, nz * 1.25 + 0.4, 5);
      const mare = smooth(0.47, 0.64, m + 0.08 * (-nx - 0.6 * ny));
      const detail = fbm(nx * 7 + 11, ny * 7 + 5, nz * 7 - 2, 3);
      const grain = noise3(nx * 60, ny * 60, nz * 60);
      let albedo = 0.7 - 0.24 * mare + (detail - 0.5) * 0.12 + (grain - 0.5) * 0.05;

      // Crater shading: tilt surface normal inside bowls / on rims.
      let tx = 0, ty = 0, tz = 0;
      for (const c of craters) {
        const dot = nx * c.x + ny * c.y + nz * c.z;
        if (dot < c.reach) continue;
        const dist = Math.sqrt(Math.max(0, 2 - 2 * dot));
        const t = dist / c.r;
        let gx = c.x - nx * dot, gy = c.y - ny * dot, gz = c.z - nz * dot;
        const gl = Math.hypot(gx, gy, gz) || 1;
        gx /= gl; gy /= gl; gz /= gl;
        let s = 0;
        const fade = c.r > 0.06 ? 0.55 : 1; // large old basins are eroded and soft
        if (t < 1) {
          s = c.depth * fade * Math.sin(Math.PI * 0.5 * t) * (t < 0.55 && c.r > 0.05 ? t / 0.55 : 1);
          if (t < 0.6 && c.r < 0.03) albedo *= 0.97;
        } else if (t < 1.3) {
          s = -c.depth * 0.6 * fade * Math.cos(((t - 1) / 0.3) * Math.PI * 0.5);
          if (c.r < 0.03) albedo *= 1.025;
        }
        if (c.young && t < 3) albedo += 0.09 * Math.pow(1 - t / 3, 1.5);
        tx += gx * s; ty += gy * s; tz += gz * s;
      }
      let sx = nx + tx, sy = ny + ty, sz = nz + tz;
      const sl = Math.hypot(sx, sy, sz); sx /= sl; sy /= sl; sz /= sl;

      // Lommel–Seeliger + Lambert blend gives the flat, bright lunar look.
      const mu0 = Math.max(0, sx * Lx + sy * Ly + sz * Lz);
      const mu = Math.max(0.05, sz);
      const ls = (2 * mu0) / (mu0 + mu + 1e-4);
      const terminator = smooth(-0.04, 0.12, nx * Lx + ny * Ly + nz * Lz);
      let I = albedo * (0.62 * ls + 0.38 * mu0) * terminator + 0.028;
      I = Math.pow(Math.min(1.15, I), 0.88);

      const warm = 1 - mare * 0.05;
      data[idx] = Math.min(255, I * 252 * warm);
      data[idx + 1] = Math.min(255, I * 247);
      data[idx + 2] = Math.min(255, I * (236 + mare * 14));
      data[idx + 3] = Math.round(255 * Math.min(1, (1 - Math.sqrt(rr)) * half * 0.9));
    }
  }
  return data;
}

/** Wraps pixels into a canvas usable with drawImage. */
export function pixelsToCanvas(data, size) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  canvas.getContext('2d').putImageData(new ImageData(data, size, size), 0, 0);
  return canvas;
}

/** Synchronous fallback (main thread). */
export function renderMoon(size) {
  return pixelsToCanvas(moonPixels(size), size);
}
