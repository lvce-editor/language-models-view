import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'language-models-view-context-menu'

export const skip = 1

export const test: Test = async ({ expect, Locator, Main }) => {
  // arrange
  await Main.openUri('language-models:///1')

  // act
  const firstTableRow = Locator('.TableBody .TableRow').first()
  await firstTableRow.click({ button: 'right' })

  // assert
  const contextMenu = Locator('.ContextMenu')
  await expect(contextMenu).toBeVisible()
}
