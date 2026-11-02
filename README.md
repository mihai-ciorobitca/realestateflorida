# Real Estate of Florida — Next.js redesign

A complete, responsive redesign built with Next.js 16 App Router, React 19, TypeScript, and locally hosted photography and fonts. The design uses ocean green, warm ivory, editorial typography, and an accessible responsive navigation.

## Run locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Run `npm run build` to generate the production static website in `out/`. `npm run typecheck` validates TypeScript.

## Pages and content

The migration inventory covers 1,075 public source-page reads, including directory pagination. The app has 1,067 generated subpage routes plus the homepage: 152 city routes, 791 neighborhood routes, 73 agent profiles, and 51 resource, directory, legacy, and utility routes. See `migration-report.json` for the inventory.

- `app/page.tsx`: redesigned homepage.
- `app/[...slug]/page.tsx`: community, agent, buyer, seller, contact, directory, partner, and legal page layouts.
- `lib/pages.json`: captured public content and original property-search destinations.
- `lib/directories.json`: searchable city, neighborhood, and agent directory records.
- `lib/site.ts`: navigation, company settings, and the featured-property snapshot.
- `components/`: working search, saved homes, enquiry preparation, mortgage calculations, and navigation.
- `public/images/` and `public/fonts/`: local media assets.

Public marketing pages linked from the source site's navigation, content, agent directory, and all eight neighborhood-directory pages were inventoried. Original path spelling is retained. Legacy broken contact and search pages now have useful replacements. Identical Stuart and legacy utility aliases declare canonical destinations. Independently hosted IDX/MLS portals, partner websites, social pages, and downloadable source documents retain their original external destinations.

## Live inventory and enquiries

The three featured homes and their prices are a **November 2, 2026 snapshot from the original homepage**, not a live IDX feed. Filters apply to those featured records. Full inventory, live availability, and listing details open the original MLS portals. Featured photographs belong to their respective owners and were retained from the original site.

Saved homes use this browser's local storage; there is no account synchronization. The mortgage calculator includes principal and interest, configurable annual taxes and insurance, and monthly HOA fees. It excludes mortgage insurance, closing costs, and other lender charges.

Enquiry, valuation, agent-contact, and alert-request forms validate input and prepare an email for the visitor to review and send through their email client. They **do not send automatically or claim delivery**. No personal data is sent to a backend by this app. Connect an authorized CRM, form service, or email API before replacing that workflow with server-side lead capture. No API credentials are included.

## SEO and production cutover

Each exported route has server-rendered HTML, a title and description, a canonical URL, Open Graph metadata, and breadcrumb structured data. The root includes verified company contact structured data. XML and HTML sitemaps, robots.txt, descriptive image alternatives, and a custom 404 are included.

The default canonical origin is the private redesign preview. Before building for the real company domain, set:

```sh
NEXT_PUBLIC_SITE_URL=https://www.realestateofflorida.com
```

Rebuild after changing it. Preserve incoming legacy paths, configure redirects for slash normalization at your host, verify external MLS/vendor destinations and existing legal copy, and submit the new sitemap after cutover. The preview does not change the existing company website or DNS. Private hosting requires sign-in and cannot serve as the public company's indexed production website until the owner chooses public hosting.

## Photography

Company, property, agent, and neighborhood photos were retained from the original public website. Additional Florida shoreline photography: [Mylo Kaye](https://unsplash.com/photos/f6346rNYHq0), [Ashley Satanosky](https://unsplash.com/photos/mWN686Fsbgs), and [Josiah Weiss](https://unsplash.com/photos/_4xUGo2Y62w) on Unsplash. The stock golf photograph is from [Unsplash](https://unsplash.com). Community tiles use original local neighborhood photographs; the hero is representative Florida coastline photography.

## Validation

The production build renders all routes. Browser checks cover desktop and mobile presentation, mobile navigation, location and price filtering, saving/removing homes, agent-directory search, the zero-interest mortgage calculation, and the review-before-send enquiry workflow. The static export audit checks local links/assets, page titles, descriptions, canonical tags, single main headings, JSON-LD syntax, and sitemap coverage. See `validation-report.json` after the final audit.
