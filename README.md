# Red Line Properties Development — website

Corporate site for a UAE real estate developer and asset manager. Built with
[Astro](https://astro.build) and Tailwind CSS v4, output as a static site.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

---

## Where the content lives

**Almost everything you will want to change is in one file: [`src/data/site.ts`](src/data/site.ts).**

Company name, contact details, navigation, hero copy, statistics, services,
projects, leadership, the founder's message, accreditations and the closing
call-to-action are all defined there and read by the components. Edit that file
and the whole site updates — no component changes needed.

| What you want to change | Where |
| --- | --- |
| Company name / wordmark | `company.markPrimary`, `company.markSecondary` |
| Phone, email, address, hours, socials | `contact` |
| Menu items | `nav` |
| Hero headline, lede, buttons, background | `hero` |
| The four headline figures | `heroStats` |
| About copy, bullets, images | `about` |
| The six services | `services` |
| The project portfolio | `projects` |
| Why-us commitments | `whyUs` |
| Team members | `leadership` |
| Founder quote | `founderMessage` |
| Accreditation marks | `credentials` |
| Enquiry form subjects & endpoint | `contactForm` |

### The wordmark

The logo is set in type, not an image: a crimson bar plus `markPrimary` over a
tracked-out `markSecondary`. To use a real logo file instead, drop it in
`public/images/` and replace the markup in
[`src/components/Wordmark.astro`](src/components/Wordmark.astro).

### Images

Every image currently points at Unsplash so the design reads properly before
real photography exists. **These are placeholders — replace them before going
live.** Put real files in `public/images/` and change the URLs in `site.ts` to
`/images/your-file.jpg`.

Images sit on a dark `.frame` background, so a missing or slow file degrades to
a dark panel rather than a broken white box.

Page header images are set per page, in `src/pages/*.astro`.

### Making the enquiry form send

The form validates in the browser and, with no endpoint configured, confirms
locally without sending anything. To make it submit for real, set
`contactForm.action` in `site.ts` to your endpoint (Formspree, Netlify Forms,
your own API route, etc.). Once an `action` is present the form posts normally.

---

## Design system

Tokens are defined in the `@theme` block of
[`src/styles/global.css`](src/styles/global.css).

- **Ink** `ink-950 … ink-500` — the near-black base
- **Crimson** `brand-400 … brand-700` — the accent. Used for emphasis, rules,
  numerals and primary actions; it is deliberately never a full-page wash except
  in the single founder's-message band.
- **Bone** `bone-50 … bone-400` — warm off-whites for the light sections
- **Mute** `mute-300 … mute-500` — secondary text

Type is **Archivo** for display and UI, **Inter** for body copy.

The recurring motif is a red line — the wordmark bar, the rule under the
eyebrow labels, the scroll-progress bar under the header, the rule that grows
down a hovered list row, and the sweep across a portrait on hover.

Reusable classes: `.shell` (page gutter), `.eyebrow`, `.display-xl/lg/md`,
`.lede`, `.btn` with `.btn-primary/.btn-ghost/.btn-dark`, `.link-line`,
`.frame` / `.frame--zoom`, `.tnum`.

### Motion

Scroll reveals are opt-in via `data-reveal` (fade and rise) or
`data-reveal-line` (a rule that draws itself), with an optional
`--reveal-delay`. A single IntersectionObserver in
[`src/layouts/Base.astro`](src/layouts/Base.astro) drives all of them.

Motion is an enhancement, never a requirement: `prefers-reduced-motion` and a
`<noscript>` fallback both render everything visible and static, and the stat
figures are written into the HTML so they read correctly even when the count-up
never runs.

---

## Pages

| Route | File |
| --- | --- |
| `/` | [`src/pages/index.astro`](src/pages/index.astro) |
| `/about` | [`src/pages/about.astro`](src/pages/about.astro) |
| `/services` | [`src/pages/services.astro`](src/pages/services.astro) |
| `/projects` | [`src/pages/projects.astro`](src/pages/projects.astro) |
| `/contact` | [`src/pages/contact.astro`](src/pages/contact.astro) |
| 404 | [`src/pages/404.astro`](src/pages/404.astro) |

## Before launch

- [ ] Replace every placeholder image with real photography
- [ ] Fill in the real company name, licence details, address and phone numbers
- [ ] Replace the leadership names, roles, biographies and portraits
- [ ] Replace the accreditation text with real marks or logo files
- [ ] Point `contactForm.action` at a real endpoint
- [ ] Set `company.siteUrl` to the live domain (used for canonical and OG tags)
- [ ] Add real Privacy Policy and Terms pages (footer links are currently `#`)
- [ ] Add an OG share image
