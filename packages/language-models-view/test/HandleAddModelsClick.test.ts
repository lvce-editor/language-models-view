import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { handleAddModelsClick } from '../src/parts/HandleAddModelsClick/HandleAddModelsClick.ts'

test('handleAddModelsClick returns state unchanged', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: '',
    initial: false,
    models: [],
    platform: 1,
    scrollBarHeight: 0,
    uid: 1,
    width: 800,
    x: 0,
    y: 0,
  }

  const result = handleAddModelsClick(state)
  expect(result).toBe(state)
})

test('handleAddModelsClick preserves all state properties', () => {
  const state = {
    ...createDefaultState(),
    filterValue: 'test filter',
    models: [
      { enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
      { enabled: false, id: 'claude', inputContextSize: 200_000, name: 'Claude', outputContextSize: 4096, provider: 'anthropic', selected: true },
    ],
    platform: 2,
    scrollBarHeight: 15,
    uid: 999,
    width: 1200,
    x: 50,
    y: 100,
  }

  const result = handleAddModelsClick(state)

  expect(result.filterValue).toBe('test filter')
  expect(result.models).toBe(state.models)
  expect(result.platform).toBe(2)
  expect(result.scrollBarHeight).toBe(15)
  expect(result.uid).toBe(999)
  expect(result.width).toBe(1200)
  expect(result.x).toBe(50)
  expect(result.y).toBe(100)
})

test('handleAddModelsClick does not mutate input state', () => {
  const state = {
    ...createDefaultState(),
    models: [{ enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false }],
  }

  const originalModels = state.models

  handleAddModelsClick(state)

  expect(state.models).toBe(originalModels)
})

test('handleAddModelsClick works with empty models', () => {
  const state = {
    ...createDefaultState(),
    models: [],
  }

  const result = handleAddModelsClick(state)

  expect(result.models).toEqual([])
})

test('handleAddModelsClick works with filtered models', () => {
  const state = {
    ...createDefaultState(),
    filteredModels: [
      { enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
    ],
    models: [
      { enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
      { enabled: false, id: 'claude', inputContextSize: 200_000, name: 'Claude', outputContextSize: 4096, provider: 'anthropic', selected: false },
    ],
  }

  const result = handleAddModelsClick(state)

  expect(result.filteredModels).toBe(state.filteredModels)
  expect(result.models).toBe(state.models)
})
