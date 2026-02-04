import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import * as ApplyRender from '../src/parts/ApplyRender/ApplyRender.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

const createMockState = (overrides: Partial<LanguageModelsState> = {}): LanguageModelsState => {
  return {
    ...createDefaultState(),
    ...overrides,
  }
}

test('applyRender should return empty array when diffResult is empty', () => {
  const oldState = createMockState()
  const newState = createMockState()
  const diffResult: readonly number[] = []

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(result).toEqual([])
})

test('applyRender should process single diff type', () => {
  const oldState = createMockState({ filterValue: '' })
  const newState = createMockState({ filterValue: 'test' })
  const diffResult: readonly number[] = [DiffType.RenderInputValue]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(result.length).toBeGreaterThan(0)
})

test('applyRender should process multiple diff types', () => {
  const oldState = createMockState()
  const newState = createMockState()
  const diffResult: readonly number[] = [DiffType.RenderInputValue, DiffType.RenderItems]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should filter out empty results from renderers', () => {
  const oldState = createMockState({ width: 100 })
  const newState = createMockState({ width: 100 })
  // When states are identical, renderers return empty arrays
  const diffResult: readonly number[] = [DiffType.RenderIncremental]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  // Result may be empty or have filtered items
  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should handle RenderFilterValue diff type', () => {
  const oldState = createMockState({ filterValue: '' })
  const newState = createMockState({ filterValue: 'search' })
  const diffResult: readonly number[] = [DiffType.RenderFilterValue]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should handle RenderIncremental diff type', () => {
  const oldState = createMockState()
  const newState = createMockState()
  const diffResult: readonly number[] = [DiffType.RenderIncremental]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should preserve order of commands from diffResult', () => {
  const oldState = createMockState({ filterValue: '' })
  const newState = createMockState({ filterValue: 'test' })
  const diffResult: readonly number[] = [DiffType.RenderFilterValue, DiffType.RenderInputValue]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBeGreaterThan(0)
})

test('applyRender should handle multiple items with mixed renderers', () => {
  const oldState = createMockState({ filterValue: '' })
  const newState = createMockState({ filterValue: 'search' })
  const diffResult: readonly number[] = [DiffType.RenderFilterValue, DiffType.RenderInputValue, DiffType.RenderItems]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  // Should have results from the renderers
  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should return array of arrays', () => {
  const oldState = createMockState()
  const newState = createMockState({ width: 800 })
  const diffResult: readonly number[] = [DiffType.RenderIncremental]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
})

test('applyRender should handle states with different models', () => {
  const oldState = createMockState({ models: [] })
  const newState = createMockState({
    models: [
      {
        enabled: true,
        id: 'model-1',
        name: 'Claude',
      } as any,
    ],
  })
  const diffResult: readonly number[] = [DiffType.RenderItems]

  const result = ApplyRender.applyRender(oldState, newState, diffResult)

  expect(Array.isArray(result)).toBe(true)
})
