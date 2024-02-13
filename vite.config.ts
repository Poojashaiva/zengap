import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/test/zem-ts/preview/",
  // base: "/test/react-zem-ts1/dist/",
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 50000,
  },
});
