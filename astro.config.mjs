// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alessentiel.fr',
  // Garde les URLs identiques à WordPress : /qui-suis-je/, /ma-demarche-qualite/
  trailingSlash: 'always',
  integrations: [sitemap()],
});
