# SynMax Design System

A multi-brand design system for **SynMax Intelligence** — an intelligence company that uses commercial satellite imagery at scale to deliver actionable analytics. Four products live under the SynMax umbrella and share this system:

| Brand | Domain | Primary | Status |
| --- | --- | --- | --- |
| **Theia** | Maritime intelligence — vessel tracking, sanctioned-ship detection, AIS analysis | `#006CD7` (blue) | Most polished — full token set, components, screens |
| **Hyperion** | Oil & gas production analytics, L48 + Canada — daily time series, well-level | `#2483F8` (blue) | Token scale defined; semantic tokens partial |
| **BasinIq** | Energy basin analytics (sibling of Hyperion) | `#FC701A` (orange — proposed) | **Tokens proposed, awaiting brand confirmation** |
| **Agentic** | Newest product — agents that complete tasks against SynMax's data | `#7C84FC` (purple — proposed) | **Tokens proposed, awaiting brand confirmation** |

The four brands share: dark-first navy/steel surfaces, the SynMax wordmark in the upper-left lockup, a 6px brand-color accent strip at the very top of the page, white text on dark, and Inter as the sole UI font. They differ in their primary/accent color and the small product wordmark to the right of the SynMax logo.

## Sources

- **Figma:** "Theia in-progress.fig" (mounted as a virtual filesystem during creation). Pages of interest: `/Design-System` (tokens + components), `/Design-System/Theia`, `/Design-System/Hyperion`, `/Design-System/Vulcan`, `/Design-System/Primitive-Global`, `/Design-Dashboard`, `/Design-Login-Flow`, `/Design-Ship-Detail-Panel`, `/Icons`.
- **Codebase:** Not provided. UI screens were rebuilt against the Figma source of truth.
- **Marketing copy:** Pulled from the Figma login screen (`/Design-Login-Flow/Desktop---6`): *"SynMax is an intelligence company which specializes in the use of commercial satellite images at scale to provide actionable intelligence."*

## Index

```
README.md                ← you are here
SKILL.md                 ← portable skill manifest (Claude / Claude Code)
colors_and_type.css      ← all tokens (4 brands), type styles, spacing, radii, shadows
assets/
  logos/                 ← SynMax + per-brand lockups (SVG)
  icons/                 ← raw SVGs lifted from Figma (mostly unmapped paths — prefer ui_kits/_shared/icons.jsx)
preview/                 ← Design System review cards (registered as assets)
ui_kits/
  _shared/icons.jsx      ← Lucide-style icon library used across all kits
  theia/                 ← Maritime intelligence — full coverage
  hyperion/              ← Energy production analytics
  basiniq/               ← Basin analytics (proposed)
  agentic/               ← Agent product (proposed)
_notes/                  ← scratch — extracted token reference
```

---

## CONTENT FUNDAMENTALS

**Voice — direct, technical, military-grade.** SynMax writes for analysts: people who pay for clarity, not poetry. Sentences are short, declarative, and describe capabilities, not feelings. The tone is closer to a defense brief than a SaaS marketing site. From the Hyperion brief: *"Unlock the power of satellite imagery and AI-driven analytics to gain comprehensive, ground-truth visibility into oil and natural gas production…"* — verb-first, capability-anchored. From Theia: *"Dive into the future of vessel tracking… military-grade analytics… unmatched clarity, efficiency, and precision."*

**Person.** "You" addresses the analyst directly. SynMax refers to itself by product name (Theia, Hyperion) when in-product, by company name in marketing.

**Casing.**
- Product names: Title Case in body copy (Theia, Hyperion, BasinIq, Agentic), ALL-CAPS with letter-spacing in lockups.
- UI labels: Title Case for navigation (`All Stations`, `Shared with me`, `Resources`, `Contact`), sentence case for body and helper text.
- Buttons: Title Case (`+ Create Station`, `Save Changes`, `Cancel`).
- Section headers in the app: Title Case (`All`, `Folders`).
- Empty states are conversational: `"You currently have no station."` (note: not "You don't currently have any stations.")

**Numbers and data.** Use the mono font (`Roboto Mono`) for tabular numbers, coordinates, MMSI/IMO IDs, timestamps, RIC/well IDs. Commas for thousands. Precise units always (`12,847 bbl/d`, `34.0231°N, 17.8112°E`). Dates: `Feb 17, 2026` or `2026-02-17` in tables.

**Emoji & casual punctuation.** Not used. Anywhere. The brand is enterprise/defense; emoji and exclamation points break the register.

**Vibe in one sentence.** Operations-room confidence — dark surfaces, blue and amber alerts, monospace data, no decoration that doesn't earn its place.

**Examples to lift directly:**
- Empty state: `You currently have no station.`
- CTA: `+ Create Station` · `Run Analysis` · `Export to CSV`
- Section: `Sort by: Last viewed`
- Status: `Sanctioned vessel` · `Spoofing detected` · `AIS gap (4h 12m)`
- Tooltip: `Confidence: 0.92`

---

## VISUAL FOUNDATIONS

### Color
**Dark-first.** All four products run on near-black surfaces — primary background `#181926` (Steel-9), card/secondary `#24263C` (Steel-8), border `#393C56` (Steel-7). White is the dominant text color (`#FFFFFF`); secondary text is `#888F9E`. Each brand brings exactly one accent: Theia blue, Hyperion blue (more saturated), BasinIq orange (proposed), Agentic purple (proposed). Color isn't decorative — it's reserved for **interactive elements** (CTAs, links, active nav), **status** (success green `#1CC86B`, warning yellow `#FFCF5C`, error red `#F75349`), and **data encoding** (chart series, vessel state). A view that needs three accent colors is overdesigned.

### Type
Inter for everything. Bold (700) for buttons, headers, MMSI/data emphasis. SemiBold (600) for section titles. Medium (500) for labels and table headers. Regular (400) for body. The Figma file shows ~33,000 instances of Inter Regular vs ~4,000 each of Medium/SemiBold/Bold — prose is light, structure is bold. Sizes cluster at 10/12/13/14/16/18/24px; 12px is the workhorse. Roboto Mono Medium 12/14 for numerics. Manrope appears in marketing/auth (Graphie was the original choice — licensed, **substituted with Manrope** in this system; flag for a font drop). Zen Dots Regular at 220px shows up exactly once — it's a hero/splash treatment, not a UI font.

### Spacing
4-pt grid. The Figma alignment shows 4 / 8 / 12 / 16 / 24 / 32 / 48 as the strong notes. Inputs are 36–40px tall; buttons match input heights for the same row. Card padding is 16 or 24px. Gutters between map widgets are 8px (data-dense panels) or 16–24px (marketing-style cards).

### Backgrounds
No hand-drawn illustrations. No gradients on body backgrounds (the body is a flat near-black). The big visual moves are **maps** (full-bleed satellite/dark vector base, the product itself is the imagery) and **data**. The marketing/login flow uses a dark blurred world-map backdrop. No textures, no noise, no patterned wallpaper.

### Animation
Restrained. Hover states cross-fade in 120ms. Modals fade + scale-in over 180ms. No bouncy spring physics — eased-out cubic-bezier(.2,.8,.2,1) is the house easing. Real-time data updates pulse subtly (opacity 0.6 → 1, 600ms) rather than slide. Avoid distracting motion in dense tables.

### Hover & press
- Hover on dark surfaces: brighten by ~6% (e.g. card border `#393C56` → `#50537D`); secondary text → primary text; ghost buttons add a `rgba(255,255,255,0.04)` fill.
- Active/press: shift one shade darker (`#006CD7` → `#0056AC`) and apply a 1px inset highlight on the top edge.
- Focus: 3px halo `rgba(0,108,215,0.25)` (the `--shadow-glow-blue` token). Never the OS default outline.

### Borders
Hairline `1px solid #393C56` separates surfaces. Tables use `#2D2F4A` row dividers — one shade lighter than the body, one shade darker than secondary surface. Card borders are 1px `#393C56`; on hover they lift to white. No double borders.

### Shadows
Almost none on dark UI — black-on-black shadows just dirty the surface. Where elevation is needed (modals, dropdowns) use `0 10px 20px rgba(0,0,0,0.25)` and rely on a slightly lighter background to do the actual lifting. The login/marketing flow uses softer `0 1px 3px rgba(0,0,0,0.10)` on light surfaces.

### Layout rules
- Top header is always 78–84px tall, with a 6px brand-color strip above it (the most distinctive SynMax move).
- Left navigation is fixed-width 240–260px, dark.
- Tabs/Stations row sits in the header strip below the logo, using a lighter background to indicate the active tab.
- Map and data live at full bleed in the main canvas — no max-width centering inside the product.
- Marketing/auth screens cap content at ~480px column on a centered, world-map background.

### Transparency & blur
Used sparingly. Map overlays use `rgba(24,25,38,0.92)` with `backdrop-filter: blur(8px)` for floating widgets so map context bleeds through. Modals use a `rgba(0,0,0,0.6)` scrim — no blur on the scrim itself.

### Imagery vibe
Cool, technical, blue-shifted. Satellite imagery is shown true-color or in dark vector basemaps; never warmed up or stylized. Photography (rare) is desaturated, blue-shifted, never sun-flared.

### Corner radii
**4px is the default** (per a Figma comment: *"Most of our cards have a border radius of 4px and a border…"*). Buttons 4px. Inputs 4px. Cards 4px. Modals 8px. Pills 9999px (capsules — used for status chips). Avoid 12px and 16px radii — they read as marketing/consumer, not enterprise.

### Card anatomy
1px `#393C56` border, `#24263C` fill, 4px radius, 16–24px padding. No shadow. Title in white SemiBold 14, secondary text in `#888F9E` Regular 12, mono 12 for any numeric values inside.

---

## ICONOGRAPHY

The Figma file ships an internal icon set under `/Icons` with 20 categories — the dominant style is **stroked, 1.5–2px, square caps, 24×24 viewbox, `currentColor`**. This matches the **Untitled UI** / **Hugeicons** family closely, and is open-source compatible with **Lucide**.

**Substitution flag:** the system uses **Lucide** as the active icon source (loaded as inline JSX at `ui_kits/_shared/icons.jsx`). Lucide is the closest free, CDN-available match — same stroke weight, same square-cap line endings, same metaphors. **Replace with the canonical SynMax /Icons set when font/sprite is available.**

**Usage rules:**
- Icons are always set in `currentColor`. They inherit the color of the surrounding text — never hardcode.
- Default size is 16px in body UI, 20px in nav, 24px for empty-state hero illustrations.
- Stroke width `1.5` everywhere — never mix 1px and 2px in the same view.
- Use icons for **navigation labels** (left nav), **affordance** (chevrons, plus, x-close), and **status** (alert triangle, success check). Never decorative.
- **Emoji are not used**, ever. **Unicode dingbats** (e.g. `→ ✓ ×`) are not used as icons in production — use the SVG library.
- The `+` glyph in `+ Create Station` is a real plus character with a thin space, not an icon. (This is a SynMax quirk — keep it.)

**Pulled into `assets/icons/`:** raw SVGs from the Figma navigation frames. Most contain absolute Figma coordinates and aren't directly reusable as `currentColor` icons — they're kept for reference only. Application code should use `Icons.*` from `ui_kits/_shared/icons.jsx`.

**Logos:** real SynMax wordmark + per-brand lockups in `assets/logos/`.

---

## UI Kits

| Kit | Surface | File |
| --- | --- | --- |
| **Theia** | Maritime intelligence — interactive home + map + ship detail panel | `ui_kits/theia/index.html` |
| **Hyperion** | Energy production dashboard — basin detail, operator table, forecast | `ui_kits/hyperion/index.html` |
| **BasinIq** | Basin overview — heatmap, county bars, geological layers | `ui_kits/basiniq/index.html` |
| **Agentic** | Agent chat workspace — conversation list, tool blocks, agent plan | `ui_kits/agentic/index.html` |

Theia is the most complete kit (factored React components: `Layout.jsx`, `MapView.jsx`, `ShipDetailPanel.jsx`, `Primitives.jsx`, `Icons.jsx`). Hyperion / BasinIq / Agentic are single-file static recreations — replace with deeper kits as their Figma surfaces mature.

