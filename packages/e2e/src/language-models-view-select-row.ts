import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-select-row'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  await Main.openUri('language-models:///1')

  // Test that a row can be selected using the command
  await Command.execute('LanguageModels.selectTableRow', 0)

  // Test that the row is now selected (has aria-selected attribute)
  const firstTableRow = Locator('tbody tr').nth(0)
  await expect(firstTableRow).toHaveClass('Selected')
}
