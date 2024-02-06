import { test, expect } from "@playwright/test";

test.describe("Landing page", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("it should have the expected design @visual", async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("when I click on the CV link it should go to the CV page", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Check out my CV" }).click();
    await expect(page).toHaveURL("/cv");
  });
});
