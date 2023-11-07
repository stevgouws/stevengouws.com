const { test, expect } = require("@playwright/test");

test("CV page", async ({ page }) => {
  await page.goto("/cv");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
