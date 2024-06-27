// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        home: resolve(__dirname, 'src/home.html'),
      },
    },
  },
  server: {
    open: '/src/home.html', // Abrir login.html al iniciar el servidor
    watch: {
      usePolling: true
    }
  },
});
