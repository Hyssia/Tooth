import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hyssia.github.io',
  base: '/Tooth',
  vite: { plugins: [tailwindcss()] },
  // Gamle URL-er fra forrige nettside
  redirects: {
    '/hjem': '/',
    '/om-oss': '/#om-oss',
    '/digital-produksjon-1': '/#digital-produksjon',
    '/ansatte-1': '/#ansatte',
    '/kontakt': '/#kontakt',
  },
});
