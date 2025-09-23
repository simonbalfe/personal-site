// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import react from '@astrojs/react'
import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon({
    iconDir: "src/icons"
  }), react(), partytown(
    {
      config: {
        forward: ['dataLayer.push']
      }
    }
  )]
});