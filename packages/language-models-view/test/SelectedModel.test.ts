import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { getTableBodyVirtualDom } from '../src/parts/TableBody/GetTableBodyVirtualDom.ts'

test('getTableBodyVirtualDom applies Selected class to selected model', () => {
  const models: readonly LanguageModel[] = [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', selected: true },
    { enabled: true, id: 'claude', name: 'Claude', selected: false },
  ]
  const result = getTableBodyVirtualDom(models)
  
  // Find the first table row (for selected model)
  const firstRow = result[1]
  expect(firstRow.type).toEqual(VirtualDomElements.Tr)
  expect(firstRow.className).toEqual('Selected')
  
  // Find the second table row (for non-selected model)
  const secondRow = result[6]
  expect(secondRow.type).toEqual(VirtualDomElements.Tr)
  expect(secondRow.className).toBeUndefined()
})

test('getTableBodyVirtualDom does not apply Selected class when no model is selected', () => {
  const models: readonly LanguageModel[] = [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', selected: false },
  ]
  const result = getTableBodyVirtualDom(models)
  
  // Find the table row
  const row = result[1]
  expect(row.type).toEqual(VirtualDomElements.Tr)
  expect(row.className).toBeUndefined()
})

test('getTableBodyVirtualDom applies Selected class to multiple selected models', () => {
  const models: readonly LanguageModel[] = [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', selected: true },
    { enabled: true, id: 'claude', name: 'Claude', selected: true },
  ]
  const result = getTableBodyVirtualDom(models)
  
  // Find the first table row
  const firstRow = result[1]
  expect(firstRow.className).toEqual('Selected')
  
  // Find the second table row
  const secondRow = result[6]
  expect(secondRow.className).toEqual('Selected')
})
