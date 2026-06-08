# Vandormael Werner Dakwerken

Production-ready static website for `https://wernervandormael.be`.

## Business details

- Vandormael Werner
- Algemene dakwerken
- Plattestraat 33, 3830 Wellen, België
- 0495 54 84 15
- werner.vandormael1@gmail.com
- Service area: ruime regio Limburg, with Wellen as home base

## Pages

- `/`
- `/dakwerken/limburg/`
- `/hellende-daken/limburg/`
- `/platte-daken/limburg/`
- `/dakisolatie/limburg/`
- `/dakherstellingen/limburg/`
- `/zinkwerken-koperwerken-loodwerken/limburg/`
- `/kleinere-dakwerken/limburg/`
- `/projecten/`
- `/over-vandormael-werner/`
- `/contact/`
- `/privacybeleid/`
- `/algemene-voorwaarden/`

## Build and images

Run `node build-site.js` after editing shared page data. Source images are kept in
`assets/images/original/`; resized JPGs and WebP files are generated in
`assets/images/optimized/` and `assets/images/webp/`.

## Local preview

From the project root, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`. Asset paths are page-relative, so the homepage
also renders when `index.html` is opened directly, but a local server is recommended
because it accurately previews site navigation and production URL behavior.

The contact form uses a `mailto:` fallback and opens the visitor's email program.
For reliable form delivery, connect it to a verified form backend after deployment.

## SEO and schema

Every public page has a unique title, meta description, canonical URL, Open Graph
metadata, one H1, internal links, and appropriate JSON-LD. Shared schema files are
stored in `/schema/`. Submit `/sitemap.xml` in Google Search Console after launch.

## Deployment

Deploy the repository root to standard static hosting. Configure permanent `301`
redirects at the hosting level:

- `/dakwerken/` to `/dakwerken/limburg/`
- `/hellende-daken/` to `/hellende-daken/limburg/`
- `/platte-daken/` to `/platte-daken/limburg/`
- `/dakisolatie/` to `/dakisolatie/limburg/`
- `/dakherstellingen/` to `/dakherstellingen/limburg/`
- `/zinkwerken-koperwerken-loodwerken/` to `/zinkwerken-koperwerken-loodwerken/limburg/`
- `/kleinere-dakwerken/` to `/kleinere-dakwerken/limburg/`

### GitHub Pages review preview

The `preview/wernervandormael-site` branch includes a Pages workflow. It builds a
separate `_site` artifact, changes robots directives to `noindex,nofollow`, blocks
preview crawling in `robots.txt`, and preserves the source's page-relative links so
navigation works from the GitHub project subpath. Production source files remain
unchanged.

In the GitHub repository, open **Settings → Pages → Build and deployment** and set
**Source** to **GitHub Actions**. Push the preview branch or manually run the
`Deploy review preview to GitHub Pages` workflow.

## Content rules

Meaningful copy changes require approval and should first be recorded in
`proposed-content-improvements.md`.

Do not add fake reviews, fake locations, unconfirmed opening hours, ratings,
guarantees, or unsupported claims. Keep the NAP details consistent everywhere.
Connect or verify the Google Business Profile if this has not already been done.
