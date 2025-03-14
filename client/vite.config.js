// Import dependencies
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from 'vite-jsconfig-paths'

// Export the Vite configuration
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});