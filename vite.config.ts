import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@styles",
        replacement: fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    ],
  },
  server: {
    open: true,
  },
  plugins: [react(), svgr({ svgrOptions: { svgo: true }, esbuildOptions: { minify: true } })],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
})
