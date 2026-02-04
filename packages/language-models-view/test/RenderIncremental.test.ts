import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { renderIncremental } from '../src/parts/RenderIncremental/RenderIncremental.ts'

// Helper function to create a test model
const createTestModel = (id: string, name: string, enabled = true): LanguageModel => ({
  capabilities: { tools: false, vision: false },
  deprecated: false,
  enabled,
  id,
  inputContextSize: 8192,
  name,
  outputContextSize: 4096,
  provider: 'openai',
  selected: false,
})

// Helper function to create a test state
const createTestState = (uid: number, models: LanguageModel[] = [], filteredModels?: LanguageModel[]): LanguageModelsState => ({
  filteredModels: filteredModels ?? models,
  filterValue: '',
  headerHeight: 25,
  initial: false,
  inputSource: 0,
  models,
  platform: 1,
  rowHeight: 20,
  scrollBarHeight: 0,
  uid,
  width: 800,
  x: 0,
  y: 0,
})

test('renderIncremental returns a command array with three elements', () => {
  const oldState = createTestState(1)
  const newState = createTestState(2)

  const result = renderIncremental(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(3)
})

test('renderIncremental returns SetPatches as the first element', () => {
  const oldState = createTestState(1)
  const newState = createTestState(2)

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
})

test('renderIncremental uses the newState uid as the second element', () => {
  const oldState = createTestState(100)
  const newState = createTestState(42)

  const result = renderIncremental(oldState, newState)

  expect(result[1]).toBe(42)
})

test('renderIncremental returns patches as the third element', () => {
  const oldState = createTestState(1)
  const newState = createTestState(2)

  const result = renderIncremental(oldState, newState)

  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with identical states and models', () => {
  const model = createTestModel('model1', 'Model 1')
  const oldState = createTestState(1, [model])
  const newState = createTestState(2, [model])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(newState.uid)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with different models between states', () => {
  const model1 = createTestModel('model1', 'Model 1')
  const model2 = createTestModel('model2', 'Model 2')
  const oldState = createTestState(1, [model1])
  const newState = createTestState(2, [model1, model2])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with empty models', () => {
  const oldState = createTestState(1, [])
  const newState = createTestState(2, [])

  const result = renderIncremental(oldState, newState)

  expect(result).toEqual([ViewletCommand.SetPatches, 2, expect.any(Array)])
})

test('renderIncremental with enabled models', () => {
  const model = createTestModel('model1', 'Model 1', true)
  const oldState = createTestState(1, [model])
  const newState = createTestState(2, [model])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with disabled models', () => {
  const model = createTestModel('model1', 'Model 1', false)
  const oldState = createTestState(1, [model])
  const newState = createTestState(2, [model])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with models list changing from populated to empty', () => {
  const model = createTestModel('model1', 'Model 1')
  const oldState = createTestState(1, [model])
  const newState = createTestState(2, [])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with filtered models', () => {
  const model1 = createTestModel('model1', 'Model 1')
  const model2 = createTestModel('model2', 'Model 2')
  const oldState = createTestState(1, [model1, model2], [model1])
  const newState = createTestState(2, [model1, model2], [model2])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderIncremental with multiple models changes', () => {
  const model1 = createTestModel('model1', 'Model 1')
  const model2 = createTestModel('model2', 'Model 2')
  const model3 = createTestModel('model3', 'Model 3')
  const model4 = createTestModel('model4', 'Model 4')

  const oldState = createTestState(1, [model1, model2, model3])
  const newState = createTestState(2, [model2, model3, model4])

  const result = renderIncremental(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetPatches)
  expect(result[1]).toBe(2)
  expect(Array.isArray(result[2])).toBe(true)
})
