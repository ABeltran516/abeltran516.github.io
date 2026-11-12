// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // User site on GitHub Pages: served from the domain root, so no `base` is needed.
  site: 'https://abeltran516.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // English lives at "/", Spanish at "/es/".
      prefixDefaultLocale: false,
    },
  },
});
