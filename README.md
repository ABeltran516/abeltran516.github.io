# Antonio Beltrán — Portfolio

Personal portfolio built with [Astro](https://astro.build), available in English and Spanish.

🔗 **Live:** https://abeltran516.github.io

## Stack

- Astro (static output), with built-in i18n routing: `/` English, `/es/` Spanish
- Scoped CSS per component, with shared design tokens in `src/styles/global.css`
- Deployed to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`)

## Project structure

```
src/
├─ components/   UI sections (HomePage, LanguageSwitcher, ...)
├─ i18n/ui.ts    All visible texts, per language
├─ layouts/      BaseLayout: <head>, SEO and Open Graph tags
├─ pages/        index.astro (en) and es/index.astro (es)
└─ styles/       Global reset and design tokens
```

## Running locally

Requires Node `>=22.23.4` (pinned in `.node-version`; `fnm` and `nvm` pick it up automatically).

```bash
npm install
npm run dev
```

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Dev server at `http://localhost:4321`   |
| `npm run build`   | Production build into `./dist/`         |
| `npm run preview` | Serve the production build locally      |

The previous HTML/CSS/JS version lives in [Web-Portfolio-V2](https://github.com/ABeltran516/Web-Portfolio-V2).
