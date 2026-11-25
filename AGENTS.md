# Agents

## Project

UnifIDE is in the research phase. Current work is interactive mockups in `mockups/`, published on GitHub Pages. See `README.md` for the concept.

The mockups are plain HTML and CSS, with JavaScript where needed.

## Build

The mockups are built with Vite in multi-page mode. Each `mockups/<name>/index.html` is picked up as a page automatically; link new mockups from `mockups/index.html`. The build target is `baseline-widely-available`.

Run these from `mockups/` (Node version pinned in `mockups/.tool-versions`):

- `npm install`: install dependencies
- `npx playwright install --with-deps`: install test browsers and their system libraries (once)
- `npm run dev`: dev server with hot reload
- `npm run build`: static build into `mockups/dist/`
- `npm run preview`: serve the built output
- `npm test`: build, preview, and run the Playwright tests in `mockups/tests/`

`.github/workflows/pages.yml` runs the tests on every push and pull request, and deploys `mockups/dist/` to GitHub Pages from `main`. It sets `BASE_PATH` to the Pages site path; locally the base is `/`.

## Testing

Use an inverted testing pyramid: most tests should be E2E, covering all likely flows. Integration tests cover important larger units of code. Unit tests cover certain very important functions.

Use Playwright for E2E tests, run against Chromium, Firefox and WebKit.

## Guidelines

The mockups must work in Baseline Widely available browsers.

Use JavaScript only when the same thing cannot be accomplished cleanly with HTML and CSS.

Once JavaScript is justified, prefer a well-regarded library over in-house code whenever a suitable one is available.

Do not use null, nil or undefined as domain values; use more informative values instead, such as `{ kind: "none" }`. Convert nulls returned by platform APIs at the boundary.

Follow data-oriented programming: Separate behavior from data so systems are easier to understand and change. Use generic data structures and treat data as immutable. Separate data schema from data representation.
