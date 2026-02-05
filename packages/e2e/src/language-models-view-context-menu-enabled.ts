import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-context-menu-enabled'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  await Command.execute('LanguageModels.handleContextMenu', 0, 0, 0)

  // assert
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeVisible()

  // Verify that "Disable Model" menu entry is present for enabled model
  const disableModelEntry = Locator('.ContextMenu .MenuItem').filter({ hasText: 'Disable Model' })
  await expect(disableModelEntry).toBeVisible()

  // Execute the disable model command
  await Command.execute('LanguageModels.disableModel', 'model-1')

  // Verify the model is now disabled (could check for disabled class on the row)
  const firstTableRow = Locator('.TableBody .TableRow').first()
  await expect(firstTableRow).toHaveClass(/Disabled/)
}
