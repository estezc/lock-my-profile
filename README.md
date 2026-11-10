# Lock My Profile — website

Website for the Lock My Profile browser extension, in English and Spanish, served by GitHub Pages.

- Landing pages: `/` and `/es/`
- Guides: `/guides/…` and `/es/guias/…`
- Privacy policy: `/privacy/`

The pages are generated. Edit `_src/content.mjs` (texts) or `_src/build.mjs` (layout and settings), then run:

```
node _src/build.mjs
```

In `_src/build.mjs`:
- `STORE_URL` — the Chrome Web Store link. While empty, buttons say "coming soon".
- `DOMAIN_READY` — set to `true` once lockmyprofile.com points at GitHub Pages; the build then writes `CNAME` and uses the domain in links.
