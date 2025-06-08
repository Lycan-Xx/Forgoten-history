import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Forgoten-history/',  // Add this line - must match your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
