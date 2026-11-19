# APRA Store Design System: "Doodh Pop"

Status: adopted 2026-11-18. Every page of the APRA store follows these rules.

## 1. Aesthetic family
**Playful dairy pop.** The store should feel like APRA's own milk pouches: cheerful red and milk white, cartoon-cow warmth, chunky rounded type and big, bright pack shots. It is friendly enough for a family shopping for daily milk, and clear enough for a first-time online buyer.

Principles
- **Product first.** Pack shots are the hero. Show them large on soft colour fields.
- **One tap to buy.** Every product card has a visible Add button. The cart is never more than one tap away.
- **Speak like a shopkeeper.** Short, warm copy, using Hindi where it helps (दूध, दही, घी).
- **Colour carries the category.** Milk sits on sky blue, dahi and lassi on leaf green, ghee and oil on ghee yellow.

## 2. Colour tokens (light)
| Role | Token | Hex |
|---|---|---|
| Background | `--bg` | `#FFFFFF` |
| Surface (fields, search, category bands) | `--surface` | `#EAF4FB` |
| Surface, ghee band | `--surface-ghee` | `#FFF4D2` |
| Surface, dahi band | `--surface-leaf` | `#E3F3E9` |
| Border | `--border` | `#D5E3EE` |
| Foreground (text) | `--fg` | `#1D1B2C` |
| Muted text | `--muted` | `#5A6577` |
| **Accent 1: APRA red** (primary buttons, cart, brand moments) | `--red` | `#E31E24` |
| **Accent 2: ghee yellow** (secondary CTA on red, offer chips, ghee category) | `--ghee` | `#FFC72C` |
| **Accent 3: leaf green** (cash on delivery, success, "in stock") | `--leaf` | `#1E8E4E` |

Light only: the store always shows its light palette, even when the visitor's phone or computer is in dark mode. Khyati asked for a light background on 2026-11-18. Do not add a dark theme.

Rules
- Only these three accents. Red is the only colour for a primary action.
- Text on red or green is always white. Text on ghee yellow is always `--fg`.
- No colour is used only to show state. Always pair it with a word or an icon.

## 3. Typography
| Role | Font | Size / line height | Weight |
|---|---|---|---|
| Display (hero) | Baloo 2 | clamp(2.4rem, 6vw, 4.5rem) / 1.0 | 800 |
| H1 (page title) | Baloo 2 | 2.25rem / 1.1 | 800 |
| H2 (section) | Baloo 2 | 1.75rem / 1.15 | 700 |
| H3 (card title) | Baloo 2 | 1.05rem / 1.25 | 600 |
| Body | Nunito Sans | 1rem (16px) / 1.6 | 400, 600 for emphasis |
| Small / labels | Nunito Sans | 0.82rem / 1.4, labels +0.06em tracking | 600 |
| Prices and numbers | Nunito Sans | 1rem to 2rem, tabular figures | 700 to 800 |

- Baloo 2 also covers Devanagari, so Hindi words sit in the same style.
- Fallback stacks: `"Baloo 2", "Nunito Sans", system-ui, sans-serif` and `"Nunito Sans", system-ui, sans-serif` with `font-variant-numeric: tabular-nums` for prices.
- Body text is never smaller than 15px. Prices are never grey.
- Prices never use a font with a slashed or dotted zero: ₹300 must read as three hundred at a glance (changed from DM Mono on 2026-11-19).

## 4. Shape, space and motion
- Radius: 999px on buttons, chips and search; 20px on cards; 28px on hero images.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 72. Use gap, not margins.
- Section dividers: a soft wave or curve between colour bands, never a hard rule line.
- Borders: 1.5px `--border` on cards. No drop shadow at rest; a 2px lift on hover only.
- Motion: 150 to 250 ms ease-out. A small bounce when an item is added to the cart. Nothing moves when `prefers-reduced-motion` is set.

## 5. Components
- **Header:** logo, a wide rounded search bar (always visible, also on phones) and a red cart pill with a count.
- **Category circles:** round product photos on `--surface`, with the English name and Hindi below.
- **Product card:** square photo on a category-tinted field, name in Baloo 2, price in bold Nunito Sans, price per litre or kg in small muted text, then a full-width red Add button that turns into a − 2 + stepper.
- **Hero:** a red band with a white headline, a ghee-yellow button, a big pack shot and a curved bottom edge.
- **Checkout:** one column on phones, a green "Cash on delivery" card, large 48px inputs and a red Place order button that stays visible.
- **Trust strip:** farmers count, families served and pasteurisation facts, written as large bold numbers.

## 6. Imagery
- Use APRA's real pack shots and lifestyle photos only.
- Cut-out packs go on tinted fields. Lifestyle photos go full-bleed inside rounded frames.
- Never stretch, filter or tint product photos.

## 7. This site will NEVER
- Use generic floating blob illustrations, abstract 3D shapes or AI-art farms.
- Use purple or blue-to-purple gradients, or any gradient on text.
- Add drop shadows nobody asked for, or glassmorphism.
- Copy Amul's polka-dot border, mascot style or any other brand's look.
- Show app-download pop-ups, countdown timers or fake "only 2 left" pressure.
- Put prices in grey or under 15px, or hide the Add button behind a hover.
- Use emoji as section icons, or stock photos of people who aren't APRA's.
- Use more than three accent colours, or red for anything other than actions and brand moments.
- Use lorem ipsum or invented claims. Every fact comes from APRA.

## 8. References
- amul.com/milk: bold colour fields and big pack shots. Take the energy, not the look.
- countrydelight.in: search-first header, round category tiles and simple product cards. Take the ease of use.
- APRA packaging: the red oval logo, the cartoon cow, Freshदधि green and the ghee-tin yellow.
