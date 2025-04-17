import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';

export default defineConfig({
  base: '/', // Add this line with your actual repository name
  esbuild: {
    target: "esnext", // Allow top-level await
  },
  build: {
    target: "esnext", // Ensure latest JS features work
    minify: false, // Optional: disable minification for debugging
    outDir: 'dist', // Ensure output folder is 'dist'
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(), // Fix older browser issues
        postcssNested(), // Ensure CSS nesting works
      ],
    },
  },
  define: {
    'process.env': {}, // Fix some Vite environment issues in build
  },
  server: {
    host: true, // Allow access from other devices in LAN
    port: 5173, // Default Vite port (change if needed)
  }
});