import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getLanguageModelsVirtualDom } from '../src/parts/GetLanguageModelsVirtualDom/GetLanguageModelsVirtualDom.ts'

test('getLanguageModelsVirtualDom returns correct structure for empty models', () => {
  const result = getLanguageModelsVirtualDom([], '')
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'LanguageModelsHeader',
      onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'SearchField',
      type: VirtualDomElements.Div,
    },
    {
      autocomplete: 'off',
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'IconButton SearchFieldButtonDisabled',
      disabled: true,
      name: 'ClearButton',
      onClick: 8,
      title: 'Clear',
      type: VirtualDomElements.Button,
    },
    {
      className: 'MaskIcon MaskIconClearAll',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'Button AddModelsButton',
      name: 'AddModelsButton',
      onClick: 6,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Add Models',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'NoMatchingModels',
      type: VirtualDomElements.P,
    },
    {
      text: 'No matching models have been found',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getLanguageModelsVirtualDom returns correct structure for single model', () => {
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
  const result = getLanguageModelsVirtualDom(models, '')
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'LanguageModelsHeader',
      onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 2,
      className: 'SearchField',
      type: VirtualDomElements.Div,
    },
    {
      autocomplete: 'off',
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'IconButton SearchFieldButtonDisabled',
      disabled: true,
      name: 'ClearButton',
      onClick: 8,
      title: 'Clear',
      type: VirtualDomElements.Button,
    },
    {
      className: 'MaskIcon MaskIconClearAll',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'Button AddModelsButton',
      name: 'AddModelsButton',
      onClick: 6,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Add Models',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 2,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 5,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: '',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Provider',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Context Size',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableBody',
      onMouseDown: DomEventListenerFunctions.HandleMouseDown,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 5,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      checked: true,
      inputType: 'checkbox',
      name: 'gpt-4',
      onChange: DomEventListenerFunctions.HandleCheckboxChange,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'openai',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 8192, out: 4096',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getLanguageModelsVirtualDom returns correct structure for multiple models', () => {
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
  const result = getLanguageModelsVirtualDom(models, '')
  expect(result).toEqual([
    {
      childCount: 2,
      className: 'LanguageModels',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 3,
      className: 'LanguageModelsHeader',
      onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
      type: VirtualDomElements.Div,
    },
    {
      autocomplete: 'off',
      className: 'InputBox LanguageModelsFilter',
      inputType: 'search',
      name: 'LanguageModelsFilter',
      onInput: 3,
      placeholder: 'Filter language models...',
      type: VirtualDomElements.Input,
    },
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
    {
      childCount: 1,
      className: 'Button AddModelsButton',
      name: 'AddModelsButton',
      onClick: 6,
      type: VirtualDomElements.Button,
    },
    {
      text: 'Add Models',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 2,
      onContextMenu: DomEventListenerFunctions.HandleContextMenu,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 5,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: '',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Provider',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Context Size',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 2,
      className: 'TableBody',
      onMouseDown: DomEventListenerFunctions.HandleMouseDown,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 5,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      checked: true,
      inputType: 'checkbox',
      name: 'gpt-4',
      onChange: DomEventListenerFunctions.HandleCheckboxChange,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'openai',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 8192, out: 4096',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 5,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      checked: true,
      inputType: 'checkbox',
      name: 'claude',
      onChange: DomEventListenerFunctions.HandleCheckboxChange,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'claude',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'Claude',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'anthropic',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      text: 'in: 200000, out: 4096',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getLanguageModelsVirtualDom returns consistent results on multiple calls with same models', () => {
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
  const result1 = getLanguageModelsVirtualDom(models, '')
  const result2 = getLanguageModelsVirtualDom(models, '')
  expect(result1).toEqual(result2)
})

test('getLanguageModelsVirtualDom includes filter input', () => {
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
  const result = getLanguageModelsVirtualDom(models, '')
  const filterInput = result.find((node) => node.type === VirtualDomElements.Input)
  expect(filterInput).toBeDefined()
  expect(filterInput?.className).toEqual('InputBox LanguageModelsFilter')
})

test('getLanguageModelsVirtualDom includes table header', () => {
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
  const result = getLanguageModelsVirtualDom(models, '')
  const thead = result.find((node) => node.type === VirtualDomElements.THead)
  expect(thead).toBeDefined()
})

test('getLanguageModelsVirtualDom includes table body', () => {
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
  const result = getLanguageModelsVirtualDom(models, '')
  const tbody = result.find((node) => node.type === VirtualDomElements.THead)
  expect(tbody).toBeDefined()
})
