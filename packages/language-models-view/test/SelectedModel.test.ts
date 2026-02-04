import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { getTableBodyVirtualDom } from '../src/parts/TableBody/GetTableBodyVirtualDom.ts'

test('getTableBodyVirtualDom applies Selected class to selected model', () => {
  const models: readonly LanguageModel[] = [
    { capabilities: { tools: false, vision: false }, enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: true },
    { capabilities: { tools: false, vision: false }, enabled: true, id: 'claude', inputContextSize: 200_000, name: 'Claude', outputContextSize: 4096, provider: 'anthropic', selected: false },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the first table row (for selected model)
  const firstRow = result[1]
  expect(firstRow.type).toEqual(VirtualDomElements.Tr)
  expect(firstRow.className).toEqual('Selected')

  // Find the second table row (for non-selected model) - now at index 10 due to 4 cells per row
  const secondRow = result[10]
  expect(secondRow.type).toEqual(VirtualDomElements.Tr)
  expect(secondRow.className).toBeUndefined()
})

test('getTableBodyVirtualDom does not apply Selected class when no model is selected', () => {
  const models: readonly LanguageModel[] = [
    { capabilities: { tools: false, vision: false }, enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the table row
  const row = result[1]
  expect(row.type).toEqual(VirtualDomElements.Tr)
  expect(row.className).toBeUndefined()
})

test('getTableBodyVirtualDom applies Selected class to multiple selected models', () => {
  const models: readonly LanguageModel[] = [
    { capabilities: { tools: false, vision: false }, enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: true },
    { capabilities: { tools: false, vision: false }, enabled: true, id: 'claude', inputContextSize: 200_000, name: 'Claude', outputContextSize: 4096, provider: 'anthropic', selected: true },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the first table row
  const firstRow = result[1]
  expect(firstRow.className).toEqual('Selected')

  // Find the second table row - now at index 10 due to 4 cells per row
  const secondRow = result[10]
  expect(secondRow.className).toEqual('Selected')
})
