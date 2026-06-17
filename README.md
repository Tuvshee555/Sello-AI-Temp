# Sello AI — marketing site

A single-page marketing & pricing site for **Sello AI**, an AI sales chatbot for
Mongolian online shops. Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

Every CTA funnels to **contacting us** — there is no self-serve signup or dashboard.
We onboard each shop manually.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build / deploy

```bash
npm run build
npm start
```

Deploys to **Vercel** with zero config — import the repo and hit deploy.

## ✏️ Edit your contact info (one place)

All editable contact details live in **`lib/siteConfig.ts`**. Replace the placeholders:

- `contact.messenger` — your `m.me/...` link
- `contact.phoneDisplay` / `contact.phoneHref` — phone number
- `contact.email` — email address
- `contact.facebook` — Facebook page URL

The contact form has no backend — on submit it opens the visitor's email app
pre-filled to `contact.email`, so there's nothing server-side to break.

## Edit copy / translations

All visible text (Mongolian + English) lives in **`lib/content.ts`**.
The header МН / EN toggle switches between them (preference saved in `localStorage`).

## Structure

```
app/            layout, page, global styles
components/     Header, Hero, Features, HowItWorks, Pricing, WhySello, Contact, Footer
lib/            siteConfig.ts (contact info), content.ts (MN/EN copy)
public/         favicon
```
