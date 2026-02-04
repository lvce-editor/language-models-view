import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-select-row'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  await Command.execute('LanguageModels.selectTableRow', 0)

  // assert
  const firstTableRow = Locator('.TableBody .TableRow').first()
  await expect(firstTableRow).toHaveClass('Selected')
}
