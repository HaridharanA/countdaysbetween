// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.countdaysbetween.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pt: 'pt-BR'
        }
      }
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