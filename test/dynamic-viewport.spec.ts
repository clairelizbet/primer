import { test, expect } from "@playwright/test"
import { DVH_TEST_URL, initPage } from "./common"

test("Box model", async ({ page }) => {
  await initPage(page, DVH_TEST_URL)

  expect(
    await page.locator("main > :last-child").evaluate((element) => {
      const boundingBox = element.getBoundingClientRect()
      const lowerBound = boundingBox.y + boundingBox.height

      return Math.floor(lowerBound * 10) / 10 === innerHeight
    }),
  ).toBe(true)
})
