# Performance check (Bundle + Lighthouse)

## 1) Bundle analyzer (quick savings check)

This project supports a one-command bundle report via an env flag.

```bash
ANALYZE=true npm run build
```

Output:
- `dist/stats.html` (interactive treemap)

What to look for:
- Large single dependencies (e.g. icon packs, charting libs)
- Duplicate copies of the same library
- Overly-large images accidentally bundled into JS

## 2) Lighthouse (real user-perceived improvements)

Run in Chrome DevTools → **Lighthouse**:
- Mode: **Navigation**
- Device: **Mobile**
- Throttling: **Simulated Mobile** (default)

Capture these before/after:
- **LCP** (Largest Contentful Paint)
- **CLS** (Cumulative Layout Shift)
- **TBT** (Total Blocking Time)
- **Transfer size** / **Total byte weight**

### Notes specific to this portfolio

- **Hero portrait**
  - Confirm the delivered image is WebP and the chosen resource matches the rendered size.
  - In DevTools → Network → click the image request and verify:
    - `content-type: image/webp`
    - the downloaded size is closer to the displayed size (not the full original)

- **Resume PDF prefetch**
  - Hover the resume link, then check DevTools → Network for a `prefetch` request.
  - Goal: the click should become instant (but only after intent/hover).

## 3) When to tune `sizes` / priority

- If Lighthouse shows **LCP is the hero image**, keep `fetchPriority="high"` and `loading="eager"`.
- If the hero image is *not* LCP and you want to reduce competition with text/fonts, consider downgrading to `loading="lazy"` / normal priority.
- If the Network panel shows the browser downloading the **768w** image but the portrait renders much smaller, shrink the `sizes` string so the browser selects the **512w** (or generate a smaller width).
