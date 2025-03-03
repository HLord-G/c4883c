import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    target: "esnext", // Allow top-level await
  },
  build: {
    target: "esnext", // Ensure latest JS features work
    minify: false, // Optional: disable minification for debugging
    outDir: 'dist', // Ensure output folder is 'dist'
    emptyOutDir: true,
  }
});
