import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { getTableBodyVirtualDom } from '../src/parts/TableBody/GetTableBodyVirtualDom.ts'

test('getTableBodyVirtualDom applies Disabled class to disabled model', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the first table row (for disabled model)
  const firstRow = result[1]
  expect(firstRow.type).toEqual(VirtualDomElements.Tr)
  expect(firstRow.className).toEqual('Disabled TableRow')

  // Find the second table row (for enabled model) - now at index 10 due to 4 cells per row
  const secondRow = result[10]
  expect(secondRow.type).toEqual(VirtualDomElements.Tr)
  expect(secondRow.className).toEqual('TableRow')
})

test('getTableBodyVirtualDom does not apply Disabled class when model is enabled', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the table row
  const row = result[1]
  expect(row.type).toEqual(VirtualDomElements.Tr)
  expect(row.className).toEqual('TableRow')
})

test('getTableBodyVirtualDom applies Disabled class to multiple disabled models', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the first table row
  const firstRow = result[1]
  expect(firstRow.className).toEqual('Disabled TableRow')

  // Find the second table row - now at index 10 due to 4 cells per row
  const secondRow = result[10]
  expect(secondRow.className).toEqual('Disabled TableRow')
})

test('getTableBodyVirtualDom applies both Selected and Disabled classes when model is both selected and disabled', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: true,
    },
  ]
  const result = getTableBodyVirtualDom(models)

  // Find the table row
  const row = result[1]
  expect(row.type).toEqual(VirtualDomElements.Tr)
  expect(row.className).toEqual('Selected Disabled TableRow')
})

test('getTableBodyVirtualDom handles mix of enabled and disabled models', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: true,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'gemini',
      inputContextSize: 100_000,
      name: 'Gemini',
      outputContextSize: 4096,
      provider: 'google',
      selected: false,
    },
  ]
  const result = getTableBodyVirtualDom(models)

  // First row: selected and enabled
  const firstRow = result[1]
  expect(firstRow.className).toEqual('TableRowSelected TableRow')

  // Second row: disabled and not selected - now at index 10
  const secondRow = result[10]
  expect(secondRow.className).toEqual('Disabled TableRow')

  // Third row: enabled and not selected - now at index 19
  const thirdRow = result[19]
  expect(thirdRow.className).toEqual('TableRow')
})
