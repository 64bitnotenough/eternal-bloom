import { defineConfig } from "vite";
export default defineConfig({
  base: "/eternal-bloom/",
  server: { allowedHosts: ["terminal.local"] },
  build: { target: "es2022" },
});
