import { globSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// Every mockup is a directory with its own index.html; each becomes a page in the build.
const pages = ["index.html", ...globSync("*/index.html", { exclude: ["node_modules/**", "dist/**"] })];

export default defineConfig({
  // GitHub Pages serves a project site under /<repo>/; CI passes that path in BASE_PATH.
  base: process.env.BASE_PATH ?? "/",
  build: {
    // Explicit, though it is also Vite's default: matches the browser policy in AGENTS.md.
    target: "baseline-widely-available",
    rollupOptions: {
      input: Object.fromEntries(pages.map((page) => [page.replace(/\.html$/, ""), resolve(import.meta.dirname, page)])),
    },
  },
});
