import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'src/login.html'),
        home: resolve(__dirname, 'src/home.html'),
      },
    },
  },
  server: {
    open: '/src/home.html', // Abrir home.html al iniciar el servidor
    watch: {
      usePolling: true
    }
  },
});
