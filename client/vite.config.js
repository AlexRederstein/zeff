import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Перенаправлять запросы, начинающиеся с /api, на http://localhost:3000
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // Если нужно убрать /api из пути, используйте rewrite
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
