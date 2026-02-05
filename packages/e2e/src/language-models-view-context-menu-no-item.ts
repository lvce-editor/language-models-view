import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-context-menu-no-item'

export const test: Test = async ({ Command, expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  // Use a very high row index that doesn't exist
  await Command.execute('LanguageModels.handleContextMenu', 999, 0, 0)

  // assert
  // When there's no item at the position, the context menu should either be hidden
  // or contain no menu items
  const contextMenu = Locator('.ContextMenu')
  
  // Check if context menu is hidden or has no menu items
  const isHidden = await contextMenu.isHidden()
  if (!isHidden) {
    const menuItems = Locator('.ContextMenu .MenuItem')
    await expect(menuItems).toHaveCount(0)
  }
}
