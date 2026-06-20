import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timberlineventuresllc.com',
  trailingSlash: 'never',
  build: { format: 'file' }, // Generates /about.html etc.
  // Apps that have shipped their own marketing site: the in-house /<app>
  // coming-soon pages now redirect out to the live property.
  redirects: {
    '/percolate': 'https://percolateapp.com',
    '/underdial': 'https://underdial.com',
  },
  integrations: [
    sitemap({ changefreq: 'weekly', priority: 0.7, lastmod: new Date() }),
  ],
});
