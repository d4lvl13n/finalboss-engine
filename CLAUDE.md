# FinalBoss Engine — Landing Page

## What is this?

The marketing landing page for **FinalBoss Engine**, an autonomous content engine that researches, writes, and publishes articles without human intervention. Previously known as GPBot.

This is a **standalone Next.js site** deployed on Vercel, separate from the main application (which lives in the `gpbot` repo and runs on a subdomain like `app.finalboss.io`).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v3 + arbitrary values
- **Animations:** Framer Motion
- **Icons:** Ant Design Icons (`@ant-design/icons`)
- **Fonts:** Inter (body), DM Serif Display (headlines), JetBrains Mono (code/technical)
- **Analytics:** Vercel Analytics + Speed Insights
- **Deployment:** Vercel → `finalboss-engine.com`

## Design System

Inspired by **Resend's** design language. See `/DESIGN.md` in the `gpbot` repo for the full reference.

Key tokens:
- **Background:** Pure black `#000000`
- **Primary text:** `#f0f0f0` (near-white)
- **Secondary text:** `#a1a4a5` (silver)
- **Muted text:** `#464a4d`, `#5c5c5c`
- **Frost borders:** `rgba(214,235,253,0.19)` — icy blue-tinted, the signature element
- **Ring shadow:** `rgba(176, 199, 217, 0.145) 0px 0px 0px 1px`
- **Accents:** Blue `#3b9eff`, Orange `#ff801f`, Green `#11ff99`, Yellow `#ffc53d`
- **Buttons:** Pill-shaped (`rounded-full`), either white solid or transparent + frost border
- **Hover:** `rgba(255,255,255,0.28)` white glass effect

## Architecture

```
src/
  app/
    layout.tsx        — Root layout with fonts + analytics
    page.tsx          — Landing page (assembles all sections)
    globals.css       — Tailwind directives + base styles
  components/
    landing/
      Header.tsx      — Sticky nav with frost border on scroll
      Hero.tsx        — DM Serif Display headline + CTAs
      Features.tsx    — Bento grid with animated visuals
      Pipeline.tsx    — 4-step animated workflow loop
      SocialProof.tsx — Stats bar + testimonial cards
      Pricing.tsx     — Two-tier pricing ($199/$499)
      Footer.tsx      — Links + status indicator
```

## Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_APP_URL` | Where login/signup buttons point | `https://app.finalboss.io` |

## Key Decisions

- **No `useNavigate`** — All auth links use `<a href>` pointing to `NEXT_PUBLIC_APP_URL` since the app lives on a separate subdomain.
- **No `Math.random()` in components** — Causes SSR hydration mismatches. `BrainVisual` uses a static `nodePositions` array instead.
- **`"use client"` on all interactive components** — Required for Framer Motion and hooks in Next.js App Router.
- **Tailwind v3 (not v4)** — v4 had compatibility issues with arbitrary `rgba()` values in class names. Downgraded for reliability.
- **Fonts via `next/font/google`** — Self-hosted, no FOUT, proper SSR hydration via CSS variables (`--font-dm-serif`, `--font-jetbrains`, `--font-inter`).

## Copywriting Approach

Headlines and CTAs sell **outcomes** (more content, less work, verified articles). Technical labels in status bars and visual animations stay techy to build credibility. See the comparison with outrank.so that informed this balance.
