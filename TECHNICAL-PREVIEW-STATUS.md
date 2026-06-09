# Technical Preview Status

Status date: 8 June 2026

This branch is frozen as a technical SEO/GEO review state. The current visual
design is not approved. Visual redesign is postponed to a separate later round.

## Preview

- Branch: `preview/wernervandormael-site`
- Review URL: `https://matrixx369.github.io/wernervandormael-site-preview/`
- Approved visual reference for the later design round:
  `https://matrixx369.github.io/wernermockup/`
- The GitHub Pages artifact is marked `noindex,nofollow` and its preview
  `robots.txt` blocks crawling.
- Nothing in this branch deploys to `https://wernervandormael.be`.
- Do not merge this branch to `main` or `master` yet.

## Generated Pages

- `/`
- `/dakwerken/limburg/`
- `/hellende-daken/limburg/`
- `/platte-daken/limburg/`
- `/dakisolatie/limburg/`
- `/dakherstellingen/limburg/`
- `/zinkwerken-koperwerken-loodwerken/limburg/`
- `/kleinere-dakwerken/limburg/`
- `/over-vandormael-werner/`
- `/contact/`
- `/privacybeleid/`
- `/algemene-voorwaarden/`

The site currently generates 12 public pages. The Projecten page and homepage
project section are postponed. Existing images remain preserved for possible
later project or gallery use.

## Preserved Technical Assets

- `sitemap.xml`
- `robots.txt`
- `site.webmanifest`
- `schema/localbusiness.json`
- `schema/services.json`
- `schema/faq.json`
- `schema/breadcrumbs.json`
- Per-page titles, descriptions, canonical tags, Open Graph tags and JSON-LD
- Page-relative internal links that work under the GitHub Pages project subpath
- Original, optimized JPG and WebP image sets
- Logo asset
- Responsive CSS and JavaScript
- Static site generator and validation scripts
- GitHub Pages review workflow

## Known Issues And Deferred Work

- The visual design is not approved and does not yet match the approved mockup
  closely enough.
- Header, hero, typography, spacing, cards and footer
  require a separate visual regression and design round.
- The Projecten page and homepage project section are postponed.
- The contact forms use a `mailto:` fallback rather than a verified form
  delivery backend.
- Production hosting redirects for non-`/limburg/` legacy service URLs still
  need to be configured when a real deployment is approved.
- Production launch checks, Search Console submission and real-domain
  verification are intentionally deferred.

## Later Design Round

Start from the approved mockup and create a visual regression checklist before
editing. Preserve the current URLs, service-page content, metadata, schema,
internal links, images and legal pages. Review desktop and mobile screenshots
against the mockup before approving any production deployment.

## Premium Service-Page Pattern Test

The isolated `/dakwerken/limburg/` test establishes a possible later rollout
pattern: a compact image hero with visible CTAs, overlapping three-item trust
strip, balanced text/checklist and image section, three compact attention
cards, clear related-service links, refined FAQ rows, and a three-action bottom
CTA. Reuse existing optimized images with honest alt text and do not repeat the
same exact crop twice on one page. On mobile, keep the H1 controlled, stack
trust and attention cards, use tap-friendly related links and FAQ rows, and
make CTA buttons full width.
