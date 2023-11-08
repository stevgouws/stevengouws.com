const { test, expect } = require("@playwright/test");

test.describe("given that I visit the CV page", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cv");
  });

  test("it should have the expected design @visual", async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test('given I click on "spaced repetition learning" it should open https://ncase.me/remember/ in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page
      .getByRole("link", { name: "spaced repetition learning" })
      .click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL("https://ncase.me/remember/");
    await expect(
      newPage
        .getByText("So, how's Memory and Inspiration doing in schools?")
        .first()
    ).toBeVisible();
    await newPage.close();
  });

  test('given I click on "Web App" it should open https://app.fika.community/welcome in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Web App" }).click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL("https://app.fika.community/welcome");
    await expect(
      newPage
        .getByText(
          "Start training your mental fitness every day with proven techniques from Fika’s psychologists."
        )
        .first()
    ).toBeVisible();
    await newPage.close();
  });

  test('given I click on "iOS" it should open https://apps.apple.com/gb/app/fika/id1465248342 in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "iOS" }).click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(
      "https://apps.apple.com/gb/app/fika/id1465248342"
    );
    await expect(newPage.getByText("Fika Community").first()).toBeVisible();
    await newPage.close();
  });

  test('given I click on "Android" it should open https://play.google.com/store/apps/details?id=community.fika.app.prod&hl=en_GB&gl=US in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Android" }).click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(
      "https://play.google.com/store/apps/details?id=community.fika.app.prod&hl=en_GB&gl=US"
    );
    await expect(
      newPage.getByText("Fika Community Limited").first()
    ).toBeVisible();
    await newPage.close();
  });

  test('given I click on "From The Box Office" it should open https://www.fromtheboxoffice.com/ in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "From The Box Office" }).click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL("https://www.fromtheboxoffice.com/");
    await expect(
      newPage.getByText("Book Official London Theatre Tickets").first()
    ).toBeVisible();
    await newPage.close();
  });

  test('given I click on "Ticketmaster" it should open https://theatre.ticketmaster.co.uk/book/1F1W0-tina-the-tina-turner-musical/ in a new tab', async ({
    page,
  }) => {
    const newPagePromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: "Ticketmaster" }).click();
    const newPage = await newPagePromise;
    await expect(newPage).toHaveURL(
      "https://theatre.ticketmaster.co.uk/book/1F1W0-tina-the-tina-turner-musical/"
    );
    await expect(newPage.getByText("Choose a date").first()).toBeVisible();
    await newPage.close();
  });
});
