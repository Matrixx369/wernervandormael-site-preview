# Technical Preview Status

Status date: 8 June 2026

This branch remains a technical SEO/GEO review state. The premium service-page
visual direction is approved as the current model and has been applied to all
seven service pages. The homepage, contact page and over page are not yet fully
harmonized with that premium service-page style.

## Preview

- Branch: `preview/wernervandormael-site`
- Review URL: `https://matrixx369.github.io/wernervandormael-site-preview/`
- Approved visual reference for the later design round:
  `https://matrixx369.github.io/wernermockup/`
- The GitHub Pages artifact is marked `noindex,nofollow` and its preview
  `robots.txt` blocks crawling.
- Nothing in this branch deploys to `https://wernervandormael.be`.
- Production deployment is not approved.
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

The site currently generates 12 public pages and `sitemap.xml` contains 12
URLs. The Projecten page remains removed and the homepage project section is
postponed. Existing images remain preserved for possible later project or
gallery use.

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

- The premium service-page visual direction is approved as the current model
  across all seven service pages.
- The homepage, contact page and over page are not yet fully harmonized with
  the premium service-page style.
- Practical-section image selection across the service pages is still pending
  review.
- The Projecten page and homepage project section are postponed.
- The contact forms use a `mailto:` fallback rather than a verified form
  delivery backend.
- Production hosting redirects for non-`/limburg/` legacy service URLs still
  need to be configured when a real deployment is approved.
- Production launch checks, Search Console submission and real-domain
  verification are intentionally deferred.

## Later Design Round

Use the approved premium service-page pattern as the current model when
harmonizing the homepage, contact page and over page. Review practical-section
image choices and compare desktop and mobile screenshots before approving any
production deployment. Preserve the current URLs, service-page content,
metadata, schema, internal links, images and legal pages.

## Premium Service-Page Pattern

The approved premium pattern is used across all seven service pages: a compact
image hero with visible CTAs, overlapping three-item trust
strip, balanced text/checklist and image section, three compact attention
cards, clear related-service links, refined FAQ rows, and a three-action bottom
CTA. Reuse existing optimized images with honest alt text and do not repeat the
same exact crop twice on one page. On mobile, keep the H1 controlled, stack
trust and attention cards, use tap-friendly related links and FAQ rows, and
make CTA buttons full width.

Final pattern details: keep the hero crop focused on real work while preserving
clear text space, use restrained same-size trust icons, keep hero and practical
CTAs at a consistent tap-friendly height, and retain three equal-width actions
in the bottom CTA. Mobile must avoid horizontal overflow, surface hero actions
early, stack the trust strip cleanly, and keep content images compact.
