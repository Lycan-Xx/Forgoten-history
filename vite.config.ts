import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Remove the exclusion of lucide-react
    // exclude: ['lucide-react'],
  },
});
