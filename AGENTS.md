# Agents

## Project

UnifIDE is in the research phase. Current work is interactive mockups in `mockups/`, published on GitHub Pages. See `README.md` for the concept.

The mockups are plain HTML and CSS, with JavaScript where needed. There is no build step yet, but one may be added. If so, use a well-regarded tool, keep the output static files that GitHub Pages can serve, and document the build and preview commands here.

## Testing

Use an inverted testing pyramid: most tests should be E2E, covering all likely flows. Integration tests cover important larger units of code. Unit tests cover certain very important functions.

Use Playwright for E2E tests, run against Chromium, Firefox and WebKit.

## Guidelines

The mockups must work in Baseline Widely available browsers.

Use JavaScript only when the same thing cannot be accomplished cleanly with HTML and CSS.

Once JavaScript is justified, prefer a well-regarded library over in-house code whenever a suitable one is available.

Do not use null, nil or undefined as domain values; use more informative values instead, such as `{ kind: "none" }`. Convert nulls returned by platform APIs at the boundary.

Follow data-oriented programming: Separate behavior from data so systems are easier to understand and change. Use generic data structures and treat data as immutable. Separate data schema from data representation.
