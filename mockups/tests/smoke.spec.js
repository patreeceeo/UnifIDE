import { expect, test } from "@playwright/test";

test("the index links to every mockup", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: "Define a Function" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Define a Function" })).toBeVisible();
});
