import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Procedural Earth Texture Generator
 * Creates realistic continents, oceans, and atmospheric clouds without relying on external image CDNs.
 */
function createEarthCanvasTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // 1. Deep Ocean Background
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  oceanGrad.addColorStop(0, '#0a1e3f');
  oceanGrad.addColorStop(0.2, '#062d5e');
  oceanGrad.addColorStop(0.5, '#0c386d');
  oceanGrad.addColorStop(0.8, '#062d5e');
  oceanGrad.addColorStop(1, '#0a1e3f');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Draw Procedural Landmasses
  const drawPoly = (points, fillColor = '#1b4332', strokeColor = '#2d6a4f') => {
    ctx.beginPath();
    points.forEach(([x, y], i) => {
      const px = ((x + 180) / 360) * canvas.width;
      const py = ((90 - y) / 180) * canvas.height;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  // Africa & Mediterranean
  drawPoly([
    [-15, 35], [-5, 36], [10, 37], [25, 32], [35, 30], [51, 12], [45, 0], [42, -12],
    [32, -28], [26, -34], [18, -34], [12, -18], [9, 5], [-5, 5], [-17, 15], [-17, 28], [-15, 35]
  ], '#2d6a4f', '#40916c');

  // Sahara Desert gold interior
  drawPoly([
    [-10, 28], [30, 28], [32, 18], [15, 16], [-10, 20]
  ], '#78350f', '#92400e');

  // Europe & Scandinavia
  drawPoly([
    [-9, 36], [-5, 43], [5, 48], [12, 54], [25, 58], [30, 70], [18, 70], [10, 62],
    [3, 52], [-4, 48], [-9, 42]
  ], '#1e4620', '#2d6a4f');

  // Asia / Eurasia
  drawPoly([
    [32, 35], [45, 45], [60, 55], [75, 70], [110, 72], [145, 72], [170, 64],
    [160, 50], [140, 38], [122, 22], [105, 10], [80, 8], [70, 22], [55, 25], [35, 30]
  ], '#1e4620', '#2d6a4f');

  // Indian Subcontinent
  drawPoly([
    [70, 24], [78, 28], [88, 25], [84, 18], [80, 8], [74, 14]
  ], '#2d6a4f', '#40916c');

  // North America
  drawPoly([
    [-168, 65], [-140, 70], [-100, 72], [-75, 62], [-60, 48], [-70, 42], [-76, 34],
    [-80, 25], [-90, 20], [-100, 22], [-115, 30], [-124, 48], [-130, 54], [-165, 60]
  ], '#1e4620', '#2d6a4f');

  // South America
  drawPoly([
    [-75, 12], [-60, 8], [-45, -2], [-35, -6], [-38, -16], [-50, -32], [-65, -55],
    [-75, -48], [-72, -30], [-80, -10], [-78, 5]
  ], '#155e75', '#0e7490');

  // Australia
  drawPoly([
    [114, -22], [125, -15], [140, -12], [150, -22], [152, -36], [140, -38], [118, -35]
  ], '#854d0e', '#a16207');

  // 3. Polar Ice Caps (Correct proportions)
  ctx.fillStyle = '#f8fafc';
  // North Pole
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.5, 40, canvas.width * 0.35, 60, 0, 0, Math.PI * 2);
  ctx.fill();

  // South Pole (Antarctica)
  ctx.beginPath();
  ctx.ellipse(canvas.width * 0.5, canvas.height - 40, canvas.width * 0.42, 80, 0, 0, Math.PI * 2);
  ctx.fill();

  // 4. Atmospheric Swirling Clouds
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  for (let i = 0; i < 60; i++) {
    const cx = ((i * 127) % canvas.width);
    const cy = 160 + ((i * 59) % (canvas.height - 320));
    const rx = 35 + (i % 45);
    const ry = 10 + (i % 15);
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, (i * 0.2), 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export function Earth3D({ isDark = true }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousPointerPosRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0.0006, y: 0.0016 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.7;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Earth Sphere
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthTexture = createEarthCanvasTexture();
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.55,
      metalness: 0.05,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    // Initial tilt (Earth's axial tilt ~23.4 degrees)
    earthMesh.rotation.z = 0.41;
    earthMesh.rotation.y = 1.2;
    scene.add(earthMesh);

    // 4. Atmospheric Halo
    const atmosphereGeometry = new THREE.SphereGeometry(1.025, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: isDark ? 0.25 : 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // 5. Starfield Particles in background
    const starsCount = 220;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 16;
      starPositions[i + 1] = (Math.random() - 0.5) * 16;
      starPositions[i + 2] = -2 - Math.random() * 8;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.035,
      transparent: true,
      opacity: isDark ? 0.75 : 0.35,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // 6. Natural Sun Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(4, 2, 3);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x223355, 0.9);
    scene.add(ambientLight);

    // 7. Interactive Mouse / Touch Drag Handlers
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      previousPointerPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousPointerPosRef.current.x;
      const deltaY = e.clientY - previousPointerPosRef.current.y;
      previousPointerPosRef.current = { x: e.clientX, y: e.clientY };

      earthMesh.rotation.y += deltaX * 0.005;
      earthMesh.rotation.x += deltaY * 0.005;
      rotationVelocityRef.current = { x: deltaY * 0.001, y: deltaX * 0.002 };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 8. Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDraggingRef.current) {
        rotationVelocityRef.current.y = rotationVelocityRef.current.y * 0.95 + 0.0012 * 0.05;
        rotationVelocityRef.current.x = rotationVelocityRef.current.x * 0.95;
        earthMesh.rotation.y += rotationVelocityRef.current.y;
        earthMesh.rotation.x += rotationVelocityRef.current.x;
      }

      starField.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      earthGeometry.dispose();
      earthMaterial.dispose();
      earthTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, [isDark]);

  return (
    <div className="earth-3d-wrapper" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '380px' }}>
      <div
        ref={mountRef}
        className="earth-3d-canvas-container"
        style={{ width: '100%', height: '100%', cursor: 'grab' }}
        title="Interactive 3D Earth — Click and drag to rotate"
      />
      <div className="earth-hint-pill">
        <span className="hint-dot" />
        <span>Drag to rotate Earth</span>
      </div>
    </div>
  );
}
