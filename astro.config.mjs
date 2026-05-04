// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Manrope",
        cssVariable: "--font-sans",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Space Grotesk",
        cssVariable: "--font-heading",
      },
    ],
    svgo: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
