import { test } from "@playwright/test"
import { expectStyleValue, initPage } from "./common"

const MIN_FONT_SIZE = 16
const MIN_LINE_HEIGHT = MIN_FONT_SIZE * 1.5
const MIN_BLOCK_SPACING = MIN_LINE_HEIGHT * 1.5

test("Accessibility", async ({ page }) => {
  await initPage(page)

  await Promise.all(
    (await page.locator("p, code pre").all()).map((element) =>
      expectStyleValue(
        element,
        "line-height",
        (value) => parseFloat(value) >= MIN_LINE_HEIGHT,
      ),
    ),
  )

  await Promise.all(
    (await page.locator("body, p, pre").all()).map((element) =>
      expectStyleValue(
        element,
        "font-size",
        (value) => parseFloat(value) >= MIN_FONT_SIZE,
      ),
    ),
  )

  await Promise.all(
    (await page.locator("p, pre").all()).map((element) =>
      expectStyleValue(
        element,
        "margin-block-end",
        (value) => parseFloat(value) >= MIN_BLOCK_SPACING,
      ),
    ),
  )
})
