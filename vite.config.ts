import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: env.GITHUB_ACTIONS ? "/zimbabue/" : "/",
    plugins: [react(), tailwindcss()],
    server: { host: "0.0.0.0", port: 3000, strictPort: true },
    preview: { host: "0.0.0.0", port: 3000 },
  };
});
