import { expect, test } from '@jest/globals'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

const createMockLanguageModel = (overrides: Partial<LanguageModel> = {}): LanguageModel => ({
  capabilities: { tools: false, vision: false },
  deprecated: false,
  enabled: true,
  id: 'test-id',
  inputContextSize: 4096,
  name: 'Test Model',
  outputContextSize: 2048,
  provider: 'test-provider',
  selected: false,
  ...overrides,
})

const createMockState = (overrides: Partial<LanguageModelsState> = {}): LanguageModelsState => ({
  ...createDefaultState(),
  platform: 1,
  width: 800,
  ...overrides,
})

test('saveState should extract filterValue and models from state', () => {
  const model = createMockLanguageModel({ id: 'model-1', name: 'Model 1' })
  const state = createMockState({
    filterValue: 'test-filter',
    models: [model],
  })

  const result = saveState(state)

  expect(result.filterValue).toBe('test-filter')
  expect(result.models).toEqual([model])
})

test('saveState should return empty models when state has no models', () => {
  const state = createMockState({
    filterValue: 'search',
    models: [],
  })

  const result = saveState(state)

  expect(result.filterValue).toBe('search')
  expect(result.models).toEqual([])
})

test('saveState should return empty filterValue when not set', () => {
  const model = createMockLanguageModel()
  const state = createMockState({
    filterValue: '',
    models: [model],
  })

  const result = saveState(state)

  expect(result.filterValue).toBe('')
  expect(result.models).toHaveLength(1)
})

test('saveState should handle multiple models', () => {
  const models = [
    createMockLanguageModel({ id: 'model-1', name: 'Model 1' }),
    createMockLanguageModel({ id: 'model-2', name: 'Model 2' }),
    createMockLanguageModel({ id: 'model-3', name: 'Model 3' }),
  ]
  const state = createMockState({
    filterValue: 'test',
    models: models,
  })

  const result = saveState(state)

  expect(result.models).toHaveLength(3)
  expect(result.models).toEqual(models)
})

test('saveState should only return filterValue and models properties', () => {
  const model = createMockLanguageModel()
  const state = createMockState({
    filterValue: 'filter',
    models: [model],
  })

  const result = saveState(state)

  expect(Object.keys(result)).toEqual(['filterValue', 'models'])
})

test('saveState should not include other state properties in result', () => {
  const state = createMockState({
    filterValue: 'test-filter',
    headerHeight: 100,
    models: [],
    uid: 999,
    width: 1000,
  })

  const result = saveState(state)

  expect(result).not.toHaveProperty('headerHeight')
  expect(result).not.toHaveProperty('width')
  expect(result).not.toHaveProperty('uid')
  expect(result).not.toHaveProperty('filteredModels')
  expect(result).not.toHaveProperty('platform')
})

test('saveState preserves model properties exactly', () => {
  const model = createMockLanguageModel({
    capabilities: { tools: true, vision: true },
    deprecated: false,
    enabled: true,
    id: 'gpt-4',
    inputContextSize: 8192,
    name: 'GPT-4',
    outputContextSize: 4096,
    provider: 'openai',
    selected: true,
  })
  const state = createMockState({
    models: [model],
  })

  const result = saveState(state)

  expect(result.models[0]).toEqual(model)
  expect(result.models[0].id).toBe('gpt-4')
  expect(result.models[0].name).toBe('GPT-4')
  expect(result.models[0].provider).toBe('openai')
  expect(result.models[0].enabled).toBe(true)
  expect(result.models[0].selected).toBe(true)
})
