import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getClearButton } from '../src/parts/ClearButton/GetClearButtonVirtualDom.ts'

test('getClearButton returns button with correct properties when filterValue is empty', () => {
  const result = getClearButton('')
  expect(result).toEqual([
    {
      childCount: 1,
      className: 'Button ClearButton',
      disabled: true,
      name: 'ClearButton',
      onClick: 8,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Clear',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getClearButton returns button with correct properties when filterValue is not empty', () => {
  const result = getClearButton('search')
  expect(result).toEqual([
    {
      childCount: 1,
      className: 'Button ClearButton',
      disabled: false,
      name: 'ClearButton',
      onClick: 8,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Clear',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getClearButton returns consistent results on multiple calls', () => {
  const result1 = getClearButton('test')
  const result2 = getClearButton('test')
  expect(result1).toEqual(result2)
})

