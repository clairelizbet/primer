import { test } from "@playwright/test"
import { expectStyleValue, initPage } from "./common"

test("Box model", async ({ page }) => {
  await initPage(page)

  await Promise.all(
    (await page.locator("*, :before, :after").all()).map((element) =>
      expectStyleValue(element, "box-sizing", "border-box"),
    ),
  )
})
