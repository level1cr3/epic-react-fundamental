import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    https: {
      key: fs.readFileSync("/certs/localhost+3-key.pem"),
      cert: fs.readFileSync("/certs/localhost+3.pem"),
    },
  },
});
