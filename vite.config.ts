import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  // Nastavte základní cestu pro nasazení na GitHub Pages subdoméně
  // Název repozitáře je "matej-faksa-website"
  base: '/matej-faksa-website/',
  plugins: [react()], // Váš plugin pro React (nebo jiný, např. vue(), svelte())
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Pokud máte další konfiguraci (např. server, build options atd.), ponechte ji zde
  // Příklad:
  // server: {
  //   port: 3000,
  // },
  // build: {
  //   outDir: 'dist',
  // },
})

