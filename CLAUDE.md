@AGENTS.md

# Portfolio — Samuel Schramm Meurer

## Context
Read `BRIEF.md` for full content, structure, and narrative. That is the source of truth.

## IMPORTANT: old/ folder
There is an `old/` folder with a previous implementation attempt. **Do not use it as a reference or starting point.** It has poor design quality and animation issues. Treat it as if it does not exist.

## Task
Build this portfolio from scratch. Start with `src/app/page.tsx` (currently empty — just a black `<main>`).

## Design direction

**The brief in one sentence:** *"I open markets and build the systems to scale them."* — everything should feel like it was built by someone who thinks in systems.

**Aesthetic:** Technical, precise, confident. Not a designer's portfolio — an operator's portfolio. Black `#0a0a0a` background. Geist Mono throughout. No gradients, no blobs, no stock imagery vibes.

**What "dynamic" means here:**
- Scroll-driven animations that reveal content with purpose (Framer Motion `useScroll` + `useTransform`)
- Each section should have ONE clear animation concept, executed well
- Staggered reveals, horizontal slides, number count-ups, clip-path reveals — vary the animation style section by section
- Hover states on everything interactive
- Nothing should appear all at once

**What to avoid:**
- Generic fade-in on every element (the previous attempt did this everywhere)
- Dead zones — black screens while scrolling through sticky sections
- Content that's invisible because it's dark-gray-on-black
- Narrow containers that leave half the screen empty (use full viewport width with `px-8 md:px-20`)
- Purple gradients, decorative blobs, oversized hero cards

## Stack
- Next.js 16 App Router · TypeScript · Tailwind v4 · Framer Motion v13
- Icons: `@tabler/icons-react` or `lucide-react` (both installed)
- Assets: photos are in `public/photos/` — use them

## Sections (in order)
1. **Hero** — Name (large, full-width), role, tagline, 4 stats, 3 event photos, links
2. **Open Markets / Scale** — scroll-driven two-pillar story (the heart of the site)
3. **Stack** — 8 skill categories as visual tags
4. **Track Record** — 5 career milestones, chronological
5. **Nomad** — horizontal photo strip, grayscale → color on hover
6. **Contact** — portrait, availability, links

## File structure
Create components in `src/components/sections/` and shared UI in `src/components/ui/`.
Create `src/lib/utils.ts` with the `cn` helper (clsx + tailwind-merge).
