import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-filter-not-found'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  await Main.openUri('language-models:///1')

  // Search for a value that doesn't exist
  await Command.execute('LanguageModels.handleFilterInput', 'nonexistentmodel12345xyz')

  const noResultsRows = Locator('table')
  await expect(noResultsRows).toHaveCount(0)

  // Verify that table body is empty
  const message = Locator('.NoMatchingModels')
  await expect(message).toBeVisible()
  await expect(message).toHaveText('No matching models have been found')
}
