import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel / custom domain: base '/'.  GitHub Pages: build with  VITE_BASE=/repo-name/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
