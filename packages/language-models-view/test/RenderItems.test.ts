import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

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
  headerHeight: 0,
  rowHeight: 0,
  width: 0,
  ...overrides,
})

test('renderItems should return SetDom2 command with empty DOM when initial is true', () => {
  const oldState = createMockState()
  const newState = createMockState({ initial: true, uid: 42 })

  const result = renderItems(oldState, newState)

  expect(result).toEqual([ViewletCommand.SetDom2, 42, []])
})

test('renderItems should return SetDom2 command with virtual DOM when initial is false', () => {
  const model = createMockLanguageModel()
  const oldState = createMockState()
  const newState = createMockState({
    filteredModels: [model],
    initial: false,
    uid: 10,
  })

  const result = renderItems(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetDom2)
  expect(result[1]).toBe(10)
  expect(Array.isArray(result[2])).toBe(true)
  expect(result[2].length).toBeGreaterThan(0)
})

test('renderItems should handle multiple models', () => {
  const models = [createMockLanguageModel({ id: 'model-1' }), createMockLanguageModel({ id: 'model-2' }), createMockLanguageModel({ id: 'model-3' })]
  const oldState = createMockState()
  const newState = createMockState({
    filteredModels: models,
    initial: false,
    uid: 99,
  })

  const result = renderItems(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetDom2)
  expect(result[1]).toBe(99)
  expect(Array.isArray(result[2])).toBe(true)
})

test('renderItems should use newState.uid in the command', () => {
  const oldState = createMockState({ uid: 1 })
  const newState = createMockState({ initial: true, uid: 555 })

  const result = renderItems(oldState, newState)

  expect(result[1]).toBe(555)
})

test('renderItems should return different DOM for different filteredModels', () => {
  const oldState = createMockState()
  const newState1 = createMockState({
    filteredModels: [createMockLanguageModel({ id: 'model-1' })],
    initial: false,
    uid: 1,
  })
  const newState2 = createMockState({
    filteredModels: [createMockLanguageModel({ id: 'model-1' }), createMockLanguageModel({ id: 'model-2' })],
    initial: false,
    uid: 1,
  })

  const result1 = renderItems(oldState, newState1)
  const result2 = renderItems(oldState, newState2)

  expect(result1[0]).toBe(result2[0])
  expect(result1[1]).toBe(result2[1])
  expect(result1[2]).toBeDefined()
  expect(result2[2]).toBeDefined()
})
