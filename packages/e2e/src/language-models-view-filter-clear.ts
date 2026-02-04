import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-filter-clear'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  await Main.openUri('language-models:///1')
  const filterInput = Locator('.LanguageModelsFilter')
  await Command.execute('LanguageModels.handleFilterInput', 'gpt')

  // Apply a filter
  await Command.execute('LanguageModels.handleClearClick')
  await expect(filterInput).toHaveValue('')
}
