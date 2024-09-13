import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@trainingsapp/assets": path.resolve("./src/assets"),
      "@trainingsapp/di": path.resolve("./src/di"),
      "@trainingsapp/models": path.resolve("./src/models"),
      "@trainingsapp/components": path.resolve("./src/components"),
      "@trainingsapp/pages": path.resolve("./src/pages"),
      "@trainingsapp/utils": path.resolve("./src/utils"),
    },
  },
});
