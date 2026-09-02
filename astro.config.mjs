// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.countdaysbetween.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      lastmod: new Date()
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/*.srt', '**/countdaysbetween-audit/**']
      }
    }
  }
});