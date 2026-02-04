import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getAddModelsButton } from '../src/parts/AddModelsButton/GetAddModelsButtonVirtualDom.ts'

test('getAddModelsButton returns button with correct properties', () => {
  const result = getAddModelsButton()
  expect(result).toEqual([
    {
      childCount: 1,
      className: 'Button AddModelsButton',
      onClick: 6,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Add Models',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getAddModelsButton returns consistent results on multiple calls', () => {
  const result1 = getAddModelsButton()
  const result2 = getAddModelsButton()
  expect(result1).toEqual(result2)
})
