import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClearClick } from '../src/parts/HandleClearClick/HandleClearClick.ts'

test('handleClearClick clears filter value and resets filteredModels', () => {
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
    filterValue: 'gpt',
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

  const result = handleClearClick(state)

  expect(result.filterValue).toBe('')
  expect(result.filteredModels.length).toBe(2)
  expect(result.filteredModels).toBe(state.models)
})

test('handleClearClick with empty filter returns same state', () => {
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
    filterValue: '',
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

  const result = handleClearClick(state)

  expect(result.filterValue).toBe('')
  expect(result.filteredModels).toBe(state.models)
})

test('handleClearClick preserves other state properties', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [],
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
    platform: 2,
    scrollBarHeight: 15,
    uid: 999,
    width: 1200,
    x: 50,
    y: 100,
  }

  const result = handleClearClick(state)

  expect(result.platform).toBe(2)
  expect(result.scrollBarHeight).toBe(15)
  expect(result.uid).toBe(999)
  expect(result.width).toBe(1200)
  expect(result.x).toBe(50)
  expect(result.y).toBe(100)
  expect(result.filterValue).toBe('')
  expect(result.filteredModels).toBe(state.models)
})

test('handleClearClick does not mutate input state', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [],
    filterValue: 'test filter',
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

  const originalFilterValue = state.filterValue
  const originalFilteredModels = state.filteredModels

  const result = handleClearClick(state)

  expect(state.filterValue).toBe(originalFilterValue)
  expect(state.filteredModels).toBe(originalFilteredModels)
  expect(result.filterValue).toBe('')
  expect(result.filteredModels).toBe(state.models)
})
