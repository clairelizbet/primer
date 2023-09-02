import { test } from "@playwright/test"
import { expectStyleValue, initPage } from "./common"

test("System fonts", async ({ page }) => {
  await initPage(page)

  await Promise.all(
    (await page.locator("body, p").all()).map((element) =>
      expectStyleValue(element, "font-family", /^system-ui/),
    ),
  )

  await Promise.all(
    (await page.locator("code, pre, kbd, samp").all()).map((element) =>
      expectStyleValue(element, "font-family", /^ui-monospace/),
    ),
  )
})
