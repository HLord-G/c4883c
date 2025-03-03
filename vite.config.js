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
  },
  css: {
    postcss: {
      plugins: [
        require("autoprefixer"), // Fix older browser issues
        require("postcss-nested"), // Ensure CSS nesting works
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
