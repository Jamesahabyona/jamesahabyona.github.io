# James Ahabyona — Personal Site

Modern academic personal site for James Ahabyona, applied microeconomist.
Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at
<https://jamesahabyona.github.io/>.

## Design

The site uses a warm ivory + scholarly navy palette with subtle gold accents,
inspired by faculty pages at Harvard Economics, Chicago Booth, MIT Sloan,
and other top departments. The typography pairs **Playfair Display** (serif,
for headlines) with **Inter** (sans, for body) and **JetBrains Mono** (for
small monospaced details like dates and labels).

The design is:

- **Clean and academic** — generous whitespace, refined type, minimal decoration
- **Responsive** — mobile-first with breakpoints at 720px, 768px, 880px
- **Accessible** — semantic HTML, ARIA labels, skip link, focus styles
- **Fast** — one CSS file, one JS file, no build step beyond Jekyll

## Structure

```
/
├── _config.yml          # Site config (title, social, plugins)
├── _layouts/
│   ├── default.html     # Base layout (header + footer + main)
│   ├── home.html        # Home page layout
│   └── page.html        # Inner pages (About, Research, Resources, CV)
├── _includes/
│   ├── site-header.html # Sticky top nav with mobile toggle
│   └── site-footer.html # Footer with social, links, copyright
├── css/
│   └── main.css         # All styles (design tokens → components)
├── js/
│   └── app.js           # Mobile nav, scroll-reveal, active-link
├── img/                 # Images, favicons
├── *.md                 # Page content
│   ├── about.md
│   ├── research.md
│   ├── data-visualizations.md
│   ├── resources.md
│   └── cv.md
├── index.html           # Home page
└── *.pdf                # CV, working papers, certificates
```

## Local development

```bash
# Install dependencies
bundle install

# Serve locally at http://127.0.0.1:4000
bundle exec jekyll serve

# Build to ./_site
bundle exec jekyll build
```

## Deploying

The site is configured to deploy automatically via GitHub Pages from the
default branch. Push to `main` and GitHub will build and publish.

## Pages

- **Home** (`/`) — hero, news, about preview, research preview, data viz
  preview, contact
- **Research** (`/research/`) — full list of working papers, work in
  progress, publications, training
- **Data Visualizations** (`/data-visualizations/`) — gallery of maps and
  graphs from research
- **Resources** (`/resources/`) — curated reading list for economists
- **CV** (`/cv/`) — embedded PDF + download link

## Adding a new paper

Edit `research.md` and add a new `<div class="research-item ...">` block
inside the appropriate group (`Working Papers`, `Work in Progress`,
`Publications &amp; Reports`).

## Adding a news item

Edit the `<ul class="news-list">` block in `index.html` and add a new
`<li class="news-item fade-in">` entry. Keep entries in reverse
chronological order.

## Adding a data visualization

1. Drop the image into `/img/`
2. Add a new `<article class="viz-card ...">` block in
   `data-visualizations.md`

## Credits

- Design inspired by faculty pages at Harvard, Chicago Booth, MIT Sloan,
  Berkeley, and LSE.
- Icons by [Font Awesome](https://fontawesome.com/).
- Fonts by [Google Fonts](https://fonts.google.com/).
- Built with [Jekyll](https://jekyllrb.com/).
