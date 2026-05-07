// @ts-check

import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"

import cloudflare from "@astrojs/cloudflare";

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
  adapter: cloudflare()
})