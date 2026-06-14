# PRD — Underdial (Affordable Watch Discovery App)
**Studio:** Timberline Ventures LLC · **Status:** Draft / workshop · **Last updated:** 2026-06-13
**Pattern:** "Picks" family economics (Pour Picks, Perfume Picks) · **Surface:** iOS first

---

## 0. Name — DECIDED: **Underdial**

**Decision (2026-06-13):** the app is **Underdial** — "under [$1K]" + "dial." It signals the affordable wedge in one word and is brandable. App-Store-list as **"Underdial — Affordable Watch Picks"** (brand + keyword + family tie).

Availability check (2026-06-13): no iOS app, no trademark, and no watch brand on "Underdial" surfaced. Closest adjacent is the unrelated microbrand **Studio Underd0g** (different name/spelling) — minor confusability, not a blocker. Founder to confirm via direct App Store search + USPTO/domain before filing.

**Killed:** ~~Lume~~ — collides head-on with **Watch Tracker - Lume** (live iOS watch collection tracker, App Store id6448666480). Same word, same category → ASO collision + brand confusion. Do not use.

Other shortlist names considered (rejected in favor of Underdial): Watch Picks, Tick Picks, Wrist Picks, Dial Picks (Picks-family/ASO direction); Sweep, Caliber, Crown (single evocative word); Wristwise (value angle).

---

## 1. Summary

A curated discovery-to-purchase app for the **everyday watch shopper buying under $1,000** — Seiko, Citizen, Orient, Hamilton, microbrands, and affordable pre-owned. Users browse curated picks and filtered discovery, compare across retailers, and tap to buy via affiliate links. Monetized on affiliate commission, not marketplace fees.

**Positioning:** *"WatchCrunch is where you hang out. Chrono24 is where you flip Rolexes. [App] is where you decide what to actually buy next — under $1,000, no snobbery, tap to own it."*

---

## 2. Problem & opportunity

The sub-$1K watch buyer has tools to **catalog** what they own (WatchBox Collector, Watchee) and a place to **hang out** (WatchCrunch), but **no dedicated discovery→purchase app**. Web buying-guides ("best watches under $500") are wall-to-wall affiliate listicles — proving the intent and the money — but nobody has packaged that into an app with tap-to-buy.

**Vacant App Store quadrant:** affordable × shopping/discovery × affiliate-out.

---

## 3. Market viability (the case this is real)

- **Market size:** global watch market ~$69–72B (Grand View) to ~$125B (Mordor) in 2026.
- **The volume is affordable:** quartz alone ≈71% of units; analysts note "low-range leads the market by price range." ~70% of watch buyers purchase **sub-$1K**; the unmonetizable ultra-luxury tip is ~1.4% of units. Affiliate models monetize volume → this tier is the prize.
- **Demand is commercial, not hypothetical:** "best watches under $500" SERPs are saturated with affiliate content (CreationWatches, Teddy Baldassarre, WatchBrands.org, etc.).
- **Competition leaves the lane open:**
  - **Chrono24** — ~9M monthly visitors, 560K watches, luxury marketplace. Different buyer/economics.
  - **WatchCrunch** — only affordable-friendly app, but **~31K total downloads, ~430/30 days**, monetizes via community + 0-fee marketplace (NOT affiliate). Small, unproven, and not a buying guide.
  - **Collection trackers** assume you already own the watch.
  - **Luxury price platforms** (WatchCharts, Winder, WatchFind.io) target $3K+ investment buyers.

**Verdict:** viable. Proven web demand + sub-scale, differently-monetized lone competitor = open wedge.

---

## 4. Target users

- **Researcher Ryan (primary)** — wants the best automatic under $500, reads 6 listicles, can't decide. Needs curated picks + tap-to-buy.
- **Upgrader Uma** — owns one Seiko, wants the next piece. Needs discovery by style/budget + price alerts.
- **Gifter Greg** — buying a $200–400 gift, knows nothing. Needs "best for X" guided lists.

All sub-$1K, purchase-intent, underserved today.

---

## 5. Monetization & affiliate strategy

**Model:** commission on units sold via working buy-links. Volume share > transaction margin → why sub-$1K beats luxury.

### Phase 1 — CJ new-goods feeds (launch; turn-on-able once approved)
Live status, CJ publisher 7966973 (all manual review):

| Advertiser | CJ ID | Commission | 3-mo EPC | Status |
|---|---|---|---|---|
| Creation Watches (Seiko/Citizen/Orient specialist — ideal) | 6213251 | 2–12% | $8.51 | ✅ Pending |
| Ashford (discount retailer, strong EPC) | 2173013 | 4% | $22.88 | ✅ Pending |
| Jomashop.com (broad affordable+mid) | 2746548 | 1–6% +$ | $15.07 | ✅ Pending |
| First Class Watches (UK affordable) | 5606555 | 1% | $5.67 | Backup, not applied |
| Fossil / Watch Station | 1337750 | — | — | Backup, not applied |

**Action:** complete the CJ Network Profile (lifts manual-approval odds). ≥1 approval = launch unlock; Creation Watches is the ideal first.

### Phase 2 — pre-owned / deals via eBay Partner Network (if feed approval lands)
- **Why eBay:** the only large source matching the sub-$1K *used* buyer, with a product API.
- **Difficulty (set expectations):** affiliate account = easy (days); mobile-app promotion approval = medium (needs working app to test); **bulk Feed API = HARD** (Limited Release, business-unit approval, no guarantee). Realistic path = **Browse API** (search), not the Feed API.
- **2026 terms:** mandatory AI-use + influencer disclosure — comply if using AI-generated copy.
- **Founder action:** EPN account creation/signup must be done by founder (Claude cannot create accounts). Claude preps application answers + integration summary.

### Pre-owned on CJ (weak — luxury-skewed, noted for completeness)
The Luxury Closet (5312449), Rebag (5749848) = luxury resale. Watchmaxx (4996706) = discount new. **No affordable pre-owned specialist on CJ** (Bob's Watches, Crown & Caliber, WatchBox, Watchfinder all absent).

### Other lines (later)
- Pro tier (price-drop alerts, unlimited collection, advanced filters) — mirror existing Picks paywall.
- Sponsored brand placements once traffic exists.

**Amazon PA-API:** LOCKED (10 sales/trailing-30-day gate). Revisit later.

---

## 6. Scope

### P0 — MVP (launch)
1. **Curated Picks rails** — "Best Automatics Under $500," "Dive Watches Under $300," "Dress Under $200," "Best Seiko 5s." Card = image, specs, price, **Buy** (affiliate-out).
2. **Discover / filter** — budget band (hero filter), movement (automatic/quartz/solar), style (dive/dress/field/chrono), brand, case size.
3. **Watch detail page** — hero image, specs, price across retailers, **tap-to-buy**.
4. **Brand pages** — Seiko, Citizen, Orient, Hamilton, microbrands (free ASO demand).
5. **Onboarding taste quiz** — reuse Perfume Picks quiz pattern → seed recs.

### P1 — fast-follow
6. **Lightweight collection** ("have / want / tried") — reuse Picks wardrobe model.
7. **Price-drop alerts** (Pro) — watch a model, notify on retailer price change.
8. Second + third CJ feed; Pro paywall.

### P2 — later
9. **Pre-owned / deals rail** via eBay Browse API.
10. Sponsored placements; Amazon PA-API if unlocked; light wear-log.

### Out of scope (don't build)
Social feed, marketplace, AR try-on, investment/asset tracking. Don't fight WatchCrunch on community or Chrono24 on marketplace.

---

## 7. Data / feed architecture

- **Catalog source:** approved CJ product feeds → ETL into Supabase (reuse the Perfumania/FragranceShop Shopify ETL pattern in PerfumePicks `scripts/`).
- **Normalize/dedup:** brand + model + ref-number (reuse the perfume dupe/suffix-cleanup approach).
- **Affiliate links:** per-retailer deep-link templates with publisher/PID (same wiring as existing CJ Perfumania links).
- **Enrichment:** prefer feed images/specs; fall back to brand pages. Start with curated subset, not full catalog.

---

## 8. ASO / GTM (directional — size with AppTweak 1 wk before locking)

- **Name:** **Underdial** (§0). App name (30) = `Underdial`; subtitle carries the keywords.
- **Subtitle (30):** `Best watches under $500`
- **Keyword field (100, no spaces):** `affordable,seiko,citizen,orient,microbrand,automatic,dive,deals,under500,review,collection,strap`
- **Target:** high-intent/low-app-competition ("watches under 500," "affordable watches," "watch deals") + brand-as-keyword free demand ("Seiko," "Seiko 5," "Citizen," "Orient," "microbrand"). Avoid head terms (owned by Chrono24/WatchCharts).
- **Hero models for screenshots/content:** Seiko 5 Sports (~$250), Seiko "Turtle" Prospex, Orient Bambino (~$200), Hamilton Khaki Field (~$495).
- **Launch gate:** ≥1 CJ approval landing.

---

## 9. Success metrics (proposed — confirm in workshop)
- Install → first-Buy-tap conversion
- Buy-tap → confirmed-commission rate (per feed)
- D7 / D30 retention
- Revenue per active user (affiliate)
- Pro conversion (P1+)

---

## 10. Risks & mitigations
- **CJ approval risk** (all manual) → complete Network Profile; queue backups; Creation Watches alone enough to launch.
- **eBay feed gate** (Limited Release, may never approve) → treat as P2; use Browse API not Feed API; don't make launch depend on it.
- **Feed quality** (thin affordable-retailer images/specs) → enrichment layer; curated subset first.
- **WatchCrunch community moat** → don't compete on social; own purchase-decision.
- **Low commission rates** (1–6%) → volume + swap to better feeds later.

---

## 11. Open decisions for workshop
1. ~~App name~~ — DECIDED: **Underdial** (§0). Founder to confirm App Store + USPTO/domain before filing.
2. Confirm success metrics (§9).
3. New repo (`Underdial/`) vs. existing structure?
4. Add backup CJ programs (First Class Watches, Fossil) to the application queue now?
5. Greenlight AppTweak keyword sizing?
6. Founder: start EPN signup now (Phase 2 prep) or defer until MVP exists?
