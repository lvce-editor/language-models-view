import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-header-context-menu'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  await Command.execute('LanguageModels.handleHeaderContextMenu')

  // assert
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeHidden()
}
