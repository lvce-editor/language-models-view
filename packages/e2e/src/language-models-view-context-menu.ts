import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-context-menu'

export const skip = 1

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  await Command.execute('LanguageModels.handleContextMenu', 0, 0, 0)

  // assert
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeVisible()
}
