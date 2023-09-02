import { expect, test } from "@playwright/test"
import { expectStyleValue, initPage } from "./common"

test("User agent reset", async ({ page }) => {
  await initPage(page)

  await expectStyleValue(page.locator("body"), "margin", "0")
  await expectStyleValue(
    page.locator("body"),
    "min-height",
    `${page.viewportSize()?.height}`,
  )
})
