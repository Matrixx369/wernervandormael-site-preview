# Technical Preview Status

Status date: 12 June 2026

Final preview QA status: **PASS**. The seven service pages, homepage, Over
Werner page and Contact page are harmonized and approved for the current
preview state. The seven service pages are considered frozen unless a clear
bug, factual issue, image mismatch, mobile issue, SEO issue or validation issue
is identified.

## Preview

- Branch: `preview/wernervandormael-site`
- Review URL:
  `https://matrixx369.github.io/wernervandormael-site-preview/?v=1d3b6d8`
- Latest preview indexing commit:
  `1d3b6d82e63ad71641707cd42ee2902936e8ef6b`
- Approved visual reference for the later design round:
  `https://matrixx369.github.io/wernermockup/`
- All 12 GitHub Pages preview HTML pages use `noindex,nofollow`.
- Preview `robots.txt` blocks crawling with:
  `User-agent: *` and `Disallow: /`.
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
URLs. All 12 preview pages return HTTP 200. The Projecten page remains removed
and must continue to return HTTP 404. A
homepage project or recent-work visual section may remain present, but there is
no separate Projecten page. Existing images remain preserved for possible later
project or gallery use.

## Approved Service-Page State

The seven service pages now use the approved premium service-page pattern and
are considered frozen for the current preview state:

- `/dakwerken/limburg/`
- `/hellende-daken/limburg/`
- `/platte-daken/limburg/`
- `/dakisolatie/limburg/`
- `/dakherstellingen/limburg/`
- `/zinkwerken-koperwerken-loodwerken/limburg/`
- `/kleinere-dakwerken/limburg/`

The approved pattern includes a compact image hero with visible CTAs, an
overlapping three-item trust strip, a practical explanation section with a
service-specific image, three compact attention cards, related-service links,
an FAQ section, and a three-action bottom CTA.

The practical-section image review is complete and images have been updated
where needed. Further service-page changes should be avoided unless a clear
bug, broken layout, incorrect image, factual issue, SEO issue, validation issue,
or mobile issue is identified.

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

- Final QA passed with no critical blockers.
- All seven service pages are approved and frozen for the current preview.
- The homepage, Over Werner page and Contact page are harmonized.
- The practical-section image review is complete.
- Legal pages are present.
- The Projecten page remains removed and must stay unavailable. A homepage
  project or recent-work visual section may remain present without a separate
  Projecten page.
- The contact forms use a `mailto:` fallback rather than a verified form
  delivery backend.
- Production hosting redirects for non-`/limburg/` legacy service URLs still
  need to be configured when a real deployment is approved.
- Final production robots and canonicals must be checked during deployment.
- Search Console submission and real-domain verification are deferred until
  production launch.
- Production deployment remains unapproved.

## Production Separation

The indexing-protection commit made no visual or content changes. The
production generator, production canonicals, sitemap and schema remain
unchanged. Nothing has been deployed to `https://wernervandormael.be`, and this
preview branch remains unmerged to `main` or `master`.

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
