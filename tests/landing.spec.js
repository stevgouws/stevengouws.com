const { test, expect } = require("@playwright/test");

test("Landing page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
