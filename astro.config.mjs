import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hyssia.github.io',
  base: '/Tooth',
  vite: { plugins: [tailwindcss()] },
  // Gamle URL-er fra forrige nettside
  redirects: {
    '/hjem': '/Tooth/',
    '/om-oss': '/Tooth/#om-oss',
    '/digital-produksjon-1': '/Tooth/#digital-produksjon',
    '/ansatte-1': '/Tooth/#ansatte',
    '/kontakt': '/Tooth/#kontakt',
  },
});
