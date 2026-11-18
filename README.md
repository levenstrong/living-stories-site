# livingstoriessermons.org

The Living Stories Sermons website. Moved off Squarespace in November 2026.

- **Framework:** Astro (static), hosted on Cloudflare Workers, deployed from this repo.
- **Pages** keep their Squarespace addresses (`/overview`, `/materials`, ...).
- **Content** lives in `src/data/content.json` (one entry per page: sections, blocks, and each section's grid layout carried over from Squarespace). Menu, footer, contact email and image alt text are in `src/data/site.ts`.
- **Images** are in `public/images/`. Downloads and forms live in Google Docs/Forms and are linked, not hosted here.
- **Design:** Caveat (headings), Caveat Brush (buttons), Lora (body), Nunito Sans; colors in `src/styles/global.css`.

Build: `npm install && npm run build` (output in `dist/`).
