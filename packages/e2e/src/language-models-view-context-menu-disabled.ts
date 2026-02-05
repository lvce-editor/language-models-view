import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-context-menu-disabled'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // First disable a model to test the disabled state
  await Command.execute('LanguageModels.disableModel', 'model-1')

  // act
  await Command.execute('LanguageModels.handleContextMenu', 0, 0, 0)

  // assert
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeVisible()

  // Verify that "Enable Model" menu entry is present for disabled model
  const enableModelEntry = Locator('.ContextMenu .MenuItem', { hasText: 'Enable Model' })
  await expect(enableModelEntry).toBeVisible()

  // Execute the enable model command
  await Command.execute('LanguageModels.enableModel', 'model-1')

  // Verify the model is now enabled (should not have disabled class)
  const firstTableRow = Locator('.TableBody .TableRow').first()
  await expect(firstTableRow).not.toHaveClass('Disabled')
}
