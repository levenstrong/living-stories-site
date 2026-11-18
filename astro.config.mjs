import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Same page addresses as the old Squarespace site: /overview, /materials, etc.
// (no trailing slash). Cloudflare serves overview.html at /overview.
export default defineConfig({
  site: 'https://www.livingstoriessermons.org',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
