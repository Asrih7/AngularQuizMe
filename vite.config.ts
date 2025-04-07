import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",  // This ensures all assets are loaded from the root path
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets", // This helps organize the built assets
    sourcemap: false, // Set to true for debugging production builds
    // Ensuring the paths are correct
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));