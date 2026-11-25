import { expect, test } from "@playwright/test";

test("the index lists the mockups", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1, name: "UnifIDE Mockups" })).toBeVisible();
});
