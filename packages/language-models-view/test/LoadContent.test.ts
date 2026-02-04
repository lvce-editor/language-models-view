import { expect, test } from '@jest/globals'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { loadContent } from '../src/parts/LoadContent/LoadContent.ts'

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
  scrollBarHeight: 10,
  width: 300,
  ...overrides,
})

test('loadContent should fetch models and set initial to false', async () => {
  const state = createMockState()
  const result = await loadContent(state)

  expect(result.initial).toBe(false)
  expect(Array.isArray(result.models)).toBe(true)
  expect(result.models.length).toBeGreaterThan(0)
  expect(result.filteredModels).toEqual(result.models)
})

test('loadContent should return new state with fetched models', async () => {
  const state = createMockState()
  const result = await loadContent(state)

  expect(Array.isArray(result.models)).toBe(true)
  expect(result.models.length).toBeGreaterThan(0)
  const firstModel = result.models[0]
  // Check that the models have the expected structure
  expect(firstModel).toHaveProperty('id')
  expect(firstModel).toHaveProperty('name')
  expect(firstModel).toHaveProperty('provider')
  expect(firstModel).toHaveProperty('enabled')
  expect(firstModel).toHaveProperty('capabilities')
})

test('loadContent should set filteredModels to fetched models', async () => {
  const state = createMockState()
  const result = await loadContent(state)

  expect(result.filteredModels).toEqual(result.models)
})

test('loadContent should preserve other state properties', async () => {
  const state = createMockState({
    filterValue: 'existing filter',
    headerHeight: 50,
    inputSource: 1,
    platform: 2,
    rowHeight: 30,
    scrollBarHeight: 5,
    uid: 123,
    width: 400,
    x: 100,
    y: 200,
  })
  const result = await loadContent(state)

  expect(result.filterValue).toBe('existing filter')
  expect(result.headerHeight).toBe(50)
  expect(result.inputSource).toBe(1)
  expect(result.platform).toBe(2)
  expect(result.rowHeight).toBe(30)
  expect(result.scrollBarHeight).toBe(5)
  expect(result.uid).toBe(123)
  expect(result.width).toBe(400)
  expect(result.x).toBe(100)
  expect(result.y).toBe(200)
})

test('loadContent should not restore state when savedState is undefined', async () => {
  const state = createMockState()
  const result = await loadContent(state, undefined)

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('')
})

test('loadContent should not restore state when savedState is null', async () => {
  const state = createMockState()
  const result = await loadContent(state, null)

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('')
})

test('loadContent should restore state when savedState is provided', async () => {
  const state = createMockState()
  const savedState = { filterValue: 'saved filter', x: 500 }
  const result = await loadContent(state, savedState)

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('saved filter')
  expect(result.x).toBe(500)
})

test('loadContent should spread existing state before fetching models', async () => {
  const originalState = createMockState({
    filterValue: 'original filter',
    width: 600,
  })
  const result = await loadContent(originalState)

  expect(result.filterValue).toBe('original filter')
  expect(result.width).toBe(600)
  expect(result.initial).toBe(false)
})

test('loadContent should override models from original state', async () => {
  const oldModels = [createMockLanguageModel({ id: 'old-model' })]
  const state = createMockState({ filteredModels: oldModels, models: oldModels })
  const result = await loadContent(state)

  expect(result.models).not.toEqual(oldModels)
  expect(result.models.length).toBeGreaterThan(0)
  // Verify that actual models were loaded (not the old mock)
  expect(result.models[0].id).not.toBe('old-model')
})

test('loadContent should override filteredModels from original state', async () => {
  const oldModels = [createMockLanguageModel({ id: 'old-model' })]
  const state = createMockState({ filteredModels: oldModels, models: oldModels })
  const result = await loadContent(state)

  expect(result.filteredModels).not.toEqual(oldModels)
  expect(result.filteredModels).toEqual(result.models)
})
