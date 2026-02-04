import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getFilterInput } from '../src/parts/FilterInput/GetFilterInputVirtualDom.ts'

test('getFilterInput returns input element with correct properties', () => {
  const result = getFilterInput()
  expect(result).toEqual({
    autocomplete: 'off',
    className: 'InputBox LanguageModelsFilter',
    inputType: 'search',
    name: 'LanguageModelsFilter',
    onInput: 3,
    placeholder: 'Filter language models...',
    type: VirtualDomElements.Input,
  })
})

test('getFilterInput returns consistent results on multiple calls', () => {
  const result1 = getFilterInput()
  const result2 = getFilterInput()
  expect(result1).toEqual(result2)
})
