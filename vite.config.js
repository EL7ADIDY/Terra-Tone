import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      // Two pages: the journey wrapper (game → moon → site) and the website itself.
      input: {
        journey: resolve(__dirname, 'index.html'),
        site: resolve(__dirname, 'site/index.html')
      },
      output: {
        manualChunks: {
          leaflet: ['leaflet'],
          chartjs: ['chart.js', 'react-chartjs-2'],
          react: ['react', 'react-dom'],
          jszip: ['jszip']
        }
      }
    }
  }
});
