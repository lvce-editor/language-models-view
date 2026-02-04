import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-filtering-rows'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  await Main.openUri('language-models:///1')

  await Command.execute('LanguageModels.handleFilterInput', 'gpt-4-turbo')

  const filteredRows = Locator('tr')
  await expect(filteredRows).toHaveCount(2)
}
