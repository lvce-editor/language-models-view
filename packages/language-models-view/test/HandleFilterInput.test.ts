import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { handleFilterInput } from '../src/parts/HandleFilterInput/HandleFilterInput.ts'

const createMockState = (models: any[] = []): LanguageModelsState => ({
  filteredModels: models,
  filterValue: '',
  headerHeight: 25,
  initial: false,
  models,
  platform: 1,
  rowHeight: 20,
  scrollBarHeight: 15,
  uid: 1,
  width: 300,
  x: 0,
  y: 0,
})

test('handleFilterInput - empty filter returns all models', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 4096,
      name: 'GPT-3.5',
      outputContextSize: 2048,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, '')

  expect(result.filteredModels).toHaveLength(2)
  expect(result.filteredModels).toEqual(models)
  expect(result.filterValue).toBe('')
})

test('handleFilterInput - filters by model name (exact match)', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 4096,
      name: 'GPT-3.5',
      outputContextSize: 2048,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'GPT-4')

  expect(result.filteredModels).toHaveLength(1)
  expect(result.filteredModels[0].id).toBe('gpt-4')
  expect(result.filterValue).toBe('GPT-4')
})

test('handleFilterInput - filters by model name (partial match)', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 4096,
      name: 'GPT-3.5',
      outputContextSize: 2048,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'GPT')

  expect(result.filteredModels).toHaveLength(2)
  expect(result.filterValue).toBe('GPT')
})

test('handleFilterInput - filters by model id', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 4096,
      name: 'GPT-3.5',
      outputContextSize: 2048,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'gpt-4')

  expect(result.filteredModels).toHaveLength(1)
  expect(result.filteredModels[0].id).toBe('gpt-4')
  expect(result.filterValue).toBe('gpt-4')
})

test('handleFilterInput - case-insensitive filtering for name', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 10_000,
      name: 'Claude',
      outputContextSize: 5000,
      provider: 'Anthropic',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'gpt')

  expect(result.filteredModels).toHaveLength(1)
  expect(result.filteredModels[0].name).toBe('GPT-4')
})

test('handleFilterInput - case-insensitive filtering for id', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 10_000,
      name: 'Claude',
      outputContextSize: 5000,
      provider: 'Anthropic',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'GPT-4')

  expect(result.filteredModels).toHaveLength(1)
  expect(result.filteredModels[0].id).toBe('gpt-4')
})

test('handleFilterInput - no matches returns empty array', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 10_000,
      name: 'Claude',
      outputContextSize: 5000,
      provider: 'Anthropic',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'nonexistent')

  expect(result.filteredModels).toHaveLength(0)
  expect(result.filterValue).toBe('nonexistent')
})

test('handleFilterInput - multiple matches', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-3.5',
      inputContextSize: 4096,
      name: 'GPT-3.5',
      outputContextSize: 2048,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: true,
      enabled: false,
      id: 'gpt-3',
      inputContextSize: 2048,
      name: 'GPT-3',
      outputContextSize: 1024,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, '3')

  expect(result.filteredModels).toHaveLength(2)
  expect(result.filteredModels.map((m) => m.id)).toEqual(['gpt-3.5', 'gpt-3'])
})

test('handleFilterInput - preserves state immutability', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const originalState = { ...state }
  const result = handleFilterInput(state, 'gpt')

  expect(state).toEqual(originalState)
  expect(result).not.toBe(state)
  expect(result.models).toBe(state.models)
})

test('handleFilterInput - updates filterValue correctly', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'search-term')

  expect(result.filterValue).toBe('search-term')
})

test('handleFilterInput - preserves other state properties', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'gpt')

  expect(result.headerHeight).toBe(state.headerHeight)
  expect(result.rowHeight).toBe(state.rowHeight)
  expect(result.width).toBe(state.width)
  expect(result.platform).toBe(state.platform)
  expect(result.uid).toBe(state.uid)
})

test('handleFilterInput - handles empty models array', () => {
  const state = createMockState([])
  const result = handleFilterInput(state, 'search')

  expect(result.filteredModels).toHaveLength(0)
  expect(result.filterValue).toBe('search')
})

test('handleFilterInput - whitespace handling', () => {
  const models = [
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4 Turbo',
      outputContextSize: 4096,
      provider: 'OpenAI',
      selected: false,
    },
    {
      capabilities: {},
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 10_000,
      name: 'Claude',
      outputContextSize: 5000,
      provider: 'Anthropic',
      selected: false,
    },
  ]
  const state = createMockState(models)
  const result = handleFilterInput(state, 'Turbo')

  expect(result.filteredModels).toHaveLength(1)
  expect(result.filteredModels[0].name).toBe('GPT-4 Turbo')
})
