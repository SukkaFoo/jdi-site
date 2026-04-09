# JDI Intelligence — Project Briefing

This file gives you full context on the JD Intelligence website project. Read it at the start of every session before making any changes.

---

## What this project is

A marketing website for **JD Intelligence (JDI)**, a boutique finance and business intelligence consultancy. The site is a static HTML/CSS/JS build — no frameworks, no build tools, no dependencies. Three files:

- `index.html` — all content and structure
- `styles.css` — all styling
- `main.js` — nav behaviour, scroll animations, contact form mailto handler

Deployed via **GitHub Pages**. To update the live site: edit files → `git add .` → `git commit -m "description"` → `git push`.

---

## The business

JDI provides three core services to growth-stage and mid-market businesses in the **United States and South Africa**:

1. **Outsourced Accounting** — bookkeeping through to audit-ready financials. Primary US market offer.
2. **Fractional CFO & Advisory** — strategic finance leadership, turnaround, M&A. Led by Peter.
3. **Business Intelligence** — Power BI, Microsoft Fabric, data engineering, ETL pipelines. Led by Digby.

The core differentiator: **Carl and Peter are Chartered Accountants; Digby brings deep finance and BI expertise at executive level. All three bring 50+ years combined experience at CFO/FD/GM level in multinationals**. Every client engagement is led by a principal directly — no juniors, no handoffs.

The US market is the primary growth target. Carl Geyer is US-based and leads all US engagements.

---

## The three principals

### Carl Geyer
- **Title on site:** CFO · Accounting & US Operations
- **Location:** United States
- **Specialism:** Outsourced accounting, US GAAP, IFRS, finance transformations, strategic fundraising
- **Key credential:** Led multi-country finance organisations with revenues up to $1.7B. Secured $25M+ in government grant funding.
- **Leads:** Outsourced Accounting service, all US client engagements
- **Contact:** carl@jdintelligence.com

### Peter Venter
- **Title on site:** CFO · Turnaround & Strategic Finance
- **Location:** South Africa
- **Specialism:** Business turnaround (selling, closing, or fixing businesses), GM-level operational finance, restructuring
- **Key credential:** Led businesses with turnovers exceeding $560M across three continents. Chartered Accountant.
- **Leads:** Fractional CFO & Advisory service

### Digby Beyleveld
- **Title on site:** CFO · Business Intelligence & Transformation
- **Location:** South Africa
- **Specialism:** BI strategy, Microsoft Fabric, Power BI, SQL, Azure, AWS, ERP implementations, data engineering, finance transformation
- **Key credential:** Led large-scale ERP implementations and BI projects at organisations exceeding $1B revenue across two continents.
- **Leads:** Business Intelligence service

**Important:** Goodyear and Billabong are former employers of the principals — they are NOT clients and should never appear in the client/trusted-by section.

---

## Brand & design system

### Colours (CSS variables)
```css
--navy: #0D1B2A          /* primary dark — nav, hero, service sections */
--navy-mid: #162840      /* slightly lighter navy — CTA section */
--slate: #2C3E55         /* hero diagonal panel */
--gold: #B8933A          /* primary accent — all highlights, borders, dots */
--gold-light: #D4AA58    /* hover states, US location indicator */
--gold-pale: #F5EDD8     /* very light gold tint */
--cream: #F8F5EF         /* light section backgrounds */
--white: #FFFFFF
--text-body: #3A4455     /* primary body text */
--text-muted: #6B7A8D    /* secondary/muted text */
--border: rgba(0,0,0,0.08)
```

### Typography
- **Display / headings:** `Playfair Display` (Google Fonts) — serif, used for all h1/h2 and large numbers
- **Body:** `DM Sans` (Google Fonts) — clean sans-serif for all body text, nav, labels
- Never use Inter, Roboto, Arial, or system fonts

### Layout
- Max content width: `1200px` (CSS var `--max-width`)
- Section padding: `96px 48px` desktop, scales down at 1024px and 768px
- Three responsive breakpoints: 1024px, 768px, 480px

### Tone & aesthetic
- Navy + gold — authoritative, boutique, professional services (think top-tier law firm, not SaaS startup)
- No gradients on text, no neon, no purple
- Playfair Display italics used sparingly for emphasis in headlines
- Section labels: small caps, gold, with a short gold line before them

---

## Site structure (top to bottom)

1. **Nav** — sticky, navy, logo + links + "Book a Call" CTA
2. **Hero** — two-column, diagonal split, headline + 3 stat cards
3. **Logos bar** — "Trusted by" client logos (actual clients only)
4. **Intro** — "Not a staffing agency. Not a software platform." + three pillars
5. **Services anchor** (`#services`)
6. **Services intro** — "Three CFO lenses. One integrated practice." + nav cards to each service
7. **Service 01** — Outsourced Accounting (Carl)
8. **Service 02** — Fractional CFO & Advisory (Peter)
9. **Service 03** — Business Intelligence (Digby)
10. **Capabilities** (`#capabilities`) — 5-category skills matrix + credentials bar
11. **Team** (`#team`) — three principal cards
12. **Locations** — US and SA office cards
13. **Process** (`#process`) — 4-step how it works
14. **Contact / CTA** (`#contact`) — split layout, form routes all submissions to peter@jdintelligence.com
15. **Footer** — logo, links, columns

---

## Current clients (logos bar)

These are confirmed clients and can appear on the site:
- Imperial
- Sovereign Foods
- Stingray
- Seldenrod
- Treehouse

Do NOT add Billabong, Goodyear, or any unconfirmed names to this list without explicit instruction.

---

## Contact & routing

- **US enquiries** → carl@jdintelligence.com
- **SA enquiries** → info@jdintelligence.com
- **Web form submissions** → all routed to peter@jdintelligence.com regardless of location field

---

## Things to always preserve

- All three principal names spelled correctly: **Carl Geyer**, **Peter Venter**, **Digby Beyleveld** (not "Pete")
- Principal-to-service assignments: Carl → Accounting, Peter → CFO/Turnaround, Digby → BI
- No SEC reporting claims anywhere on the site
- No employer names (Goodyear, Billabong) in client-facing contexts
- The `#capabilities` section contains the skills matrix — do not remove it
- Mobile responsiveness — all three breakpoints must be tested when making layout changes
- The contact form in `main.js` sends all submissions to peter@jdintelligence.com — preserve this when editing that file

---

## Pending / known TODOs

- [ ] Real headshots for all three principals (avatars currently show initials: PV, CG, DB)
- [ ] Additional client logos to be confirmed and added to logos bar
- [ ] Contact form to be replaced with a proper backend handler (currently uses mailto fallback)
- [ ] Cookie consent / privacy policy page
- [ ] Mobile menu animation polish
- [ ] Testimonials / case studies section (future)
- [ ] Custom domain pointed to GitHub Pages (jdintelligence.com)

---

## How to work on this project

Start every session by reading this file. Then ask what needs changing. Make edits directly to the three files. Keep changes focused — one logical change per commit. When in doubt about positioning, copy tone, or which principal leads what, refer back to this document before proceeding.
