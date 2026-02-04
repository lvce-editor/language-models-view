import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectTableRow } from '../src/parts/SelectTableRow/SelectTableRow.ts'

test('selectTableRow selects a row when nothing is selected', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 0)

  expect(result.filteredModels[0].selected).toBe(true)
  expect(result.filteredModels[1].selected).toBe(false)
  expect(result.models[0].selected).toBe(true)
  expect(result.models[1].selected).toBe(false)
})

test('selectTableRow deselects a row when clicking on it again', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 0)

  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.models[0].selected).toBe(false)
})

test('selectTableRow switches selection from one row to another', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    models: [
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
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
  }

  const result = selectTableRow(state, 1)

  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.filteredModels[1].selected).toBe(true)
  expect(result.models[0].selected).toBe(false)
  expect(result.models[1].selected).toBe(true)
})

test('selectTableRow returns unchanged state if index is negative', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, -1)

  expect(result).toBe(state)
  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.models[0].selected).toBe(false)
})

test('selectTableRow returns unchanged state if index is out of bounds', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 10)

  expect(result).toBe(state)
  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.models[0].selected).toBe(false)
})

test('selectTableRow with empty filtered models returns unchanged state', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 0)

  expect(result).toBe(state)
  expect(result.models[0].selected).toBe(false)
})

test('selectTableRow keeps models and filteredModels in sync', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 0)

  // Check models updated correctly
  expect(result.models[0].selected).toBe(true)
  expect(result.models[1].selected).toBe(false)
  expect(result.models[2].selected).toBe(false)

  // Check filteredModels updated correctly
  expect(result.filteredModels[0].selected).toBe(true)
  expect(result.filteredModels[1].selected).toBe(false)
})

test('selectTableRow does not modify other model properties', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: true, vision: true },
        deprecated: false,
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: true, vision: true },
        deprecated: false,
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
  }

  const result = selectTableRow(state, 0)

  expect(result.filteredModels[0].id).toBe('gpt-4')
  expect(result.filteredModels[0].name).toBe('GPT-4')
  expect(result.filteredModels[0].provider).toBe('openai')
  expect(result.filteredModels[0].capabilities.tools).toBe(true)
  expect(result.filteredModels[0].capabilities.vision).toBe(true)
  expect(result.filteredModels[0].enabled).toBe(true)
  expect(result.filteredModels[0].deprecated).toBe(false)
})

test('selectTableRow preserves other state properties', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    filterValue: 'test',
    models: [
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
    ],
    platform: 1,
    scrollBarHeight: 10,
    uid: 123,
    width: 500,
    x: 10,
    y: 20,
  }

  const result = selectTableRow(state, 0)

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('test')
  expect(result.platform).toBe(1)
  expect(result.uid).toBe(123)
  expect(result.width).toBe(500)
  expect(result.x).toBe(10)
  expect(result.y).toBe(20)
})

test('selectTableRow with multiple rows selects the second row', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 1)

  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.filteredModels[1].selected).toBe(true)
  expect(result.filteredModels[2].selected).toBe(false)
  expect(result.models[0].selected).toBe(false)
  expect(result.models[1].selected).toBe(true)
  expect(result.models[2].selected).toBe(false)
})

test('selectTableRow with zero index', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
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
    ],
    models: [
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
    ],
  }

  const result = selectTableRow(state, 0)

  expect(result.filteredModels[0].selected).toBe(true)
  expect(result.models[0].selected).toBe(true)
})
