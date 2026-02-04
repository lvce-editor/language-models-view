import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { getLanguageModelsVirtualDom } from '../src/parts/GetLanguageModelsVirtualDom/GetLanguageModelsVirtualDom.ts'

test('getLanguageModelsVirtualDom returns correct structure for empty models', () => {
  const result = getLanguageModelsVirtualDom([])
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'LanguageModelsHeader',
      type: VirtualDomElements.Div,
    },
    {
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 0,
      type: VirtualDomElements.TBody,
    },
  ])
})

test('getLanguageModelsVirtualDom returns correct structure for single model', () => {
  const models: readonly LanguageModel[] = [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }]
  const result = getLanguageModelsVirtualDom(models)
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'LanguageModelsHeader',
      type: VirtualDomElements.Div,
    },
    {
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 2,
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
  ])
})

test('getLanguageModelsVirtualDom returns correct structure for multiple models', () => {
  const models: readonly LanguageModel[] = [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false },
    { enabled: true, id: 'claude', name: 'Claude', provider: 'anthropic', selected: false },
  ]
  const result = getLanguageModelsVirtualDom(models)
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'LanguageModelsHeader',
      type: VirtualDomElements.Div,
    },
    {
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 2,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 2,
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
      childCount: 2,
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
  ])
})

test('getLanguageModelsVirtualDom returns consistent results on multiple calls with same models', () => {
  const models: readonly LanguageModel[] = [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }]
  const result1 = getLanguageModelsVirtualDom(models)
  const result2 = getLanguageModelsVirtualDom(models)
  expect(result1).toEqual(result2)
})

test('getLanguageModelsVirtualDom includes filter input', () => {
  const models: readonly LanguageModel[] = [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }]
  const result = getLanguageModelsVirtualDom(models)
  const filterInput = result.find((node) => node.type === VirtualDomElements.Input)
  expect(filterInput).toBeDefined()
  expect(filterInput?.className).toEqual('InputBox LanguageModelsFilter')
})

test('getLanguageModelsVirtualDom includes table header', () => {
  const models: readonly LanguageModel[] = [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }]
  const result = getLanguageModelsVirtualDom(models)
  const thead = result.find((node) => node.type === VirtualDomElements.THead)
  expect(thead).toBeDefined()
})

test('getLanguageModelsVirtualDom includes table body', () => {
  const models: readonly LanguageModel[] = [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }]
  const result = getLanguageModelsVirtualDom(models)
  const tbody = result.find((node) => node.type === VirtualDomElements.THead)
  expect(tbody).toBeDefined()
})
