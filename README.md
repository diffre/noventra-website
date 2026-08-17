# Noventra Technologies — Marketing Website

A fresh, distinct build of the company website (React + Vite + Tailwind), replacing the previous
Netlify build with a custom design system rather than a template reskin.

## Design system

- **Palette**: deep ink-navy (`#14162B`), cool near-white page background (`#F7F8FB`), warm brass
  accent for primary CTAs (`#C98A2B`), electric indigo for secondary tags/data (`#4453C4`)
- **Type**: Fraunces (serif display headlines), Inter (body), IBM Plex Mono (labels/tags/eyebrows)
- **Signature element**: "The Systems Stack" — an exploded three-layer graphic (Interface / Logic /
  Data) that visualizes the site's own pitch ("one partner, every layer of the system"). Appears
  large in the hero (`SystemsStackHero`) and as a small recurring mark between sections
  (`SystemsStackMark`), instead of generic numbered section markers.

## What's fixed vs. the previous build

- The Rent Management System preview panel is explicitly labeled **"Illustrative preview"** /
  "Sample data shown for illustration" rather than presenting specific numbers as real live metrics
- No visible placeholder/TODO text anywhere (the old "Map embed will go here…" line is gone,
  replaced with a simple remote-first note)
- One real, fully-written blog post instead of three empty "coming soon" cards (two teasers remain,
  clearly marked, but the section isn't entirely empty)
- A single consistent contact email throughout (`frediect@gmail.com`) instead of two different
  addresses appearing in different places
- FAQ answers are fully written out (interactive accordion), not just questions with no visible answers

## Running it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (typically `http://localhost:5173`).

## Deploying to Netlify

Since you already have a Netlify site, the easiest path is to replace its contents:

1. Push this project to a GitHub repo (or drag-and-drop the built `dist/` folder directly in Netlify's UI)
2. In Netlify: **Site settings → Build & deploy**, set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy — Netlify will run the build and publish the result

Or, to build locally and drag-and-drop:
```bash
npm run build
```
This creates a `dist/` folder — drag that folder directly onto Netlify's deploy screen for a manual deploy.

## Before this goes live, decide on:

1. **Newsletter and quote form**: currently the quote form opens the visitor's email client
   (`mailto:`) pre-filled with their details, and the demo form opens WhatsApp with a pre-filled
   message — no backend required, but it does mean submissions rely on the visitor's own email/WhatsApp
   app being set up. A real form backend (e.g. Netlify Forms, which needs zero extra infrastructure
   since you're already on Netlify) would be a natural upgrade.
2. **The Rent Management System numbers**: replace the illustrative placeholders with real figures
   once you have them, or keep them clearly marked as illustrative if this is a conceptual product.
3. **Domain**: this is built to deploy at whatever URL you point it to — update the `<title>` and
   meta description in `index.html` once a final domain is confirmed.
