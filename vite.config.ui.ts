import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  root: "./src/ui",
  plugins: [reactRefresh(), viteSingleFile()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: "../../dist",
    rollupOptions: {
      input: "./src/ui/index.html",
      output: {
        entryFileNames: "[name].js",
      },
    },
    emptyOutDir: false,
  },
});
