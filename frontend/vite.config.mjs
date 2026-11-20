import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    fs: { allow: [".", "../backend/data/formations.json"] },
    proxy: {
      "/api": "http://127.0.0.1:8138",
      "/uploads": {
        target: "http://127.0.0.1:8138",
        bypass: (req) => {
          const publicPath = path.resolve("./public", req.url.replace(/^\//, ""));
          if (fs.existsSync(publicPath)) {
            return req.url;
          }
          return null;
        }
      },
      "/media": {
        target: "http://127.0.0.1:8138",
        bypass: (req) => {
          const publicPath = path.resolve("./public", req.url.replace(/^\//, ""));
          if (fs.existsSync(publicPath)) {
            return req.url;
          }
          return null;
        }
      }
    }
  },
  build: { emptyOutDir: false }
});
