import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Ganti dengan URL server backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
