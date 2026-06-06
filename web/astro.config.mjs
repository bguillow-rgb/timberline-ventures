import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timberlineventuresllc.com',
  trailingSlash: 'never',
  build: { format: 'file' }, // Generates /about.html etc.
  integrations: [
    sitemap({ changefreq: 'weekly', priority: 0.7, lastmod: new Date() }),
  ],
});
