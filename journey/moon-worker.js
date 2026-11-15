// Renders the moon off the main thread so the game never stutters.
import { moonPixels } from './moon.js';

self.onmessage = (e) => {
  const size = e.data.size;
  const data = moonPixels(size);
  self.postMessage({ size, data }, [data.buffer]);
};
