import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getTableBody, getTableBodyVirtualDom } from '../src/parts/TableBody/GetTableBodyVirtualDom.ts'

test('getTableBody returns tbody element with correct childCount for empty array', () => {
  const result = getTableBody([])
  expect(result).toEqual({
    childCount: 0,
    onMouseDown: DomEventListenerFunctions.HandleMouseDown,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBody returns tbody element with correct childCount for single model', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]
  const result = getTableBody(models)
  expect(result).toEqual({
    childCount: 1,
    onMouseDown: DomEventListenerFunctions.HandleMouseDown,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBody returns tbody element with correct childCount for multiple models', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 16_385,
      name: 'GPT-3.5',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const result = getTableBody(models)
  expect(result).toEqual({
    childCount: 3,
    onMouseDown: DomEventListenerFunctions.HandleMouseDown,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBodyVirtualDom returns empty array for empty models', () => {
  const result = getTableBodyVirtualDom([])
  expect(result).toEqual([
    {
      childCount: 0,
      onMouseDown: DomEventListenerFunctions.HandleMouseDown,
      type: VirtualDomElements.TBody,
    },
  ])
})

test('getTableBodyVirtualDom returns correct structure for single model', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
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
  expect(result).toEqual([
    {
      childCount: 1,
      onMouseDown: DomEventListenerFunctions.HandleMouseDown,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 4,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'openai',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 8192, out: 4096',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getTableBodyVirtualDom returns correct structure for multiple models', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
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
  expect(result).toEqual([
    {
      childCount: 2,
      onMouseDown: DomEventListenerFunctions.HandleMouseDown,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 4,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'openai',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 8192, out: 4096',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 4,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'claude',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'Claude',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'anthropic',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 200000, out: 4096',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getTableBodyVirtualDom returns consistent results on multiple calls with same models', () => {
  const models: readonly LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]
  const result1 = getTableBodyVirtualDom(models)
  const result2 = getTableBodyVirtualDom(models)
  expect(result1).toEqual(result2)
})
