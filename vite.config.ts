import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ackermann-schreinerei/',
  server: {
    port: 3009,
    host: true
  },
  preview: {
    port: 3009,
    host: true
  }
});
