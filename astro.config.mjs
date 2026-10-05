import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tanntekniker.no',
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
