import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  root: "./src/plugin",
  plugins: [viteSingleFile()],
  build: {
    lib: {
      entry: "code.ts",
      fileName: "code",
      formats: ["es"],
    },
    target: "esnext",
    outDir: "../../dist",
    emptyOutDir: false,
  },
});
