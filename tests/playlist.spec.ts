import { test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();
const tracksList = process.env.TRACKS_LIST!.split(",");

function getRandomTracks(tracks: string[], count: number) {
  const shuffled = tracks.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

test.describe("Testing playlist app", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(`https://vite-react-alpha-lemon.vercel.app/`);
  });

  test("Test 1: Search Functionality", async ({ page }) => {
    for (const track of tracksList) {
      await test.step(`Checking track "${track}"`, async () => {
        await page.getByLabel("Search").fill("");
        await page.getByLabel("Search").fill(track);

        await expect(page.getByText(track)).toBeVisible();

        for (const otherTrack of tracksList) {
          if (otherTrack !== track) {
            await expect(page.getByText(otherTrack)).not.toBeVisible();
          }
        }
      });
    }
  });

  test("Test 2: Add Track Using Button", async ({ page }) => {
    //! Works only with first track. problems with finding other tracks.
    const buttonLocator = page
      .locator("div")
      .filter({ hasText: new RegExp(tracksList[0]) })
      .locator("button");

    if ((await buttonLocator.count()) > 0) {
      await buttonLocator.first().click();
    }

    await expect(
      page.locator("#playlist").getByText(tracksList[0])
    ).toBeVisible();
  });

  test("Test 3: Add Multiple Tracks", async ({ page }) => {
    const randomTracks = getRandomTracks(tracksList, 3);

    for (const track of randomTracks) {
      await page
        .locator("div")
        .filter({ hasText: new RegExp(`^${track}\\d{2}:\\d{2}\\+?$`) })
        .getByLabel("controlled")
        .check();
    }

    await page.getByRole("button", { name: /Add .* tracks/ }).click();

    for (const track of randomTracks) {
      await expect(page.locator("#playlist").getByText(track)).toBeVisible();
    }
  });
});
