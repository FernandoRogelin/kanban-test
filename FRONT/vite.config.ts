import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    viteTsconfigPaths(),
    react({
      babel: {
        plugins: ["babel-plugin-macros"],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
