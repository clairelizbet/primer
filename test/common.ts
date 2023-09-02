import { expect, Locator, Page } from "@playwright/test"
import { resolve } from "node:path"

export const TEST_SUBJECT_DIR = resolve(__dirname, "pkg/dist")

export const DEFAULT_TEST_FILE = resolve(TEST_SUBJECT_DIR, "index.html")
export const DEFAULT_TEST_URL = `file:///${DEFAULT_TEST_FILE}`

export const DVH_TEST_FILE = resolve(TEST_SUBJECT_DIR, "dvh.html")
export const DVH_TEST_URL = `file:///${DVH_TEST_FILE}`

export async function initPage(page: Page, url: string = DEFAULT_TEST_URL) {
  await page.goto(url)

  const metaDescription = page.locator('meta[name="viewport"]')
  await expect(metaDescription).toHaveAttribute(
    "content",
    /(?=.*width=device-width)(?=.*initial-scale=1\.0)/,
  )
}

export function getStyleValue(locator: Locator, propertyName: string) {
  return locator.evaluate(
    (element, propertyName) =>
      getComputedStyle(element).getPropertyValue(propertyName),
    propertyName,
  )
}

type PropertyValueValidator = (val: string) => Promise<boolean> | boolean

export async function expectStyleValue(
  locator: Locator,
  propertyName: string,
  propertyValue: string | RegExp | PropertyValueValidator,
) {
  if (typeof propertyValue === "string" || propertyValue instanceof RegExp)
    return expect(await getStyleValue(locator, propertyName)).toMatch(
      propertyValue,
    )

  return expect(
    await propertyValue(await getStyleValue(locator, propertyName)),
  ).toBe(true)
}
