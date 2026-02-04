import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-basic'

export const test: Test = async ({ expect, Locator, Main }) => {
  await Main.openUri('language-models:///1')
  // Test that the Language Models view is visible
  const languageModelsView = Locator('.LanguageModels')
  await expect(languageModelsView).toBeVisible()

  // Test that the Language Models Header is visible
  const header = Locator('.LanguageModelsHeader')
  await expect(header).toBeVisible()

  // Test that the Filter Input is visible
  const filterInput = Locator('.LanguageModelsFilter')
  await expect(filterInput).toBeVisible()
  await expect(filterInput).toHaveAttribute('type', 'search')

  // Test that the Table is visible
  const table = Locator('table')
  await expect(table).toBeVisible()

  // Test that Table Header is visible
  const tableHeader = Locator('thead')
  await expect(tableHeader).toBeVisible()

  // Test that Table Body is visible
  const tableBody = Locator('tbody')
  await expect(tableBody).toBeVisible()
}
