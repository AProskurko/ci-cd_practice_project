import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();
const tracksList = process.env.TRACKS_LIST!.split(",");

test("Test 2: Add Track Using Button", async ({ page }) => {
  await page.goto("/");

  for (const track of tracksList) {
    const buttonLocator = page
      .locator("div")
      .filter({ hasText: new RegExp(track) })
      .locator("button");

    if ((await buttonLocator.count()) > 0) {
      await buttonLocator.first().click();
    } else {
      console.warn(`Button for track "${track}" not found`);
    }

    await expect(page.locator("#playlist").getByText(track)).toBeVisible();
  }
  await page.goto("chrome-error://chromewebdata/");
});
