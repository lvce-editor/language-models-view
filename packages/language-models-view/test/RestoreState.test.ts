import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RestoreState from '../src/parts/RestoreState/RestoreState.ts'

test('restoreState - should return original state when savedState is null', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, null)
  expect(result).toEqual(state)
})

test('restoreState - should return original state when savedState is undefined', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, undefined)
  expect(result).toEqual(state)
})

test('restoreState - should return original state when savedState is a string', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, 'invalid')
  expect(result).toEqual(state)
})

test('restoreState - should return original state when savedState is a number', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, 42)
  expect(result).toEqual(state)
})

test('restoreState - should return original state when savedState is empty object', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, {})
  expect(result).toEqual(state)
})

test('restoreState - should restore filterValue when it is a string', () => {
  const state = createDefaultState()
  const savedState = { filterValue: 'test filter' }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('test filter')
})

test('restoreState - should not restore filterValue when it is a number', () => {
  const state = createDefaultState()
  const savedState = { filterValue: 123 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('')
})

test('restoreState - should not restore filterValue when it is null', () => {
  const state = createDefaultState()
  const savedState = { filterValue: null }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('')
})

test('restoreState - should restore x coordinate when it is a number', () => {
  const state = createDefaultState()
  const savedState = { x: 100 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.x).toBe(100)
})

test('restoreState - should restore negative x coordinate', () => {
  const state = createDefaultState()
  const savedState = { x: -50 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.x).toBe(-50)
})

test('restoreState - should not restore x when it is a string', () => {
  const state = createDefaultState()
  const savedState = { x: '100' }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.x).toBe(0)
})

test('restoreState - should restore y coordinate when it is a number', () => {
  const state = createDefaultState()
  const savedState = { y: 200 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.y).toBe(200)
})

test('restoreState - should restore negative y coordinate', () => {
  const state = createDefaultState()
  const savedState = { y: -75 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.y).toBe(-75)
})

test('restoreState - should not restore y when it is a string', () => {
  const state = createDefaultState()
  const savedState = { y: '200' }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.y).toBe(0)
})

test('restoreState - should restore all three values together', () => {
  const state = createDefaultState()
  const savedState = {
    filterValue: 'search term',
    x: 150,
    y: 250,
  }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('search term')
  expect(result.x).toBe(150)
  expect(result.y).toBe(250)
})

test('restoreState - should restore valid values and ignore invalid ones', () => {
  const state = createDefaultState()
  const savedState = {
    filterValue: 'valid filter',
    x: 'invalid',
    y: 100,
  }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('valid filter')
  expect(result.x).toBe(0)
  expect(result.y).toBe(100)
})

test('restoreState - should ignore extra properties in savedState', () => {
  const state = createDefaultState()
  const savedState = {
    anotherExtra: 123,
    extraProp: 'should be ignored',
    filterValue: 'test',
    x: 50,
    y: 75,
  }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('test')
  expect(result.x).toBe(50)
  expect(result.y).toBe(75)
  expect((result as any).extraProp).toBeUndefined()
  expect((result as any).anotherExtra).toBeUndefined()
})

test('restoreState - should preserve other state properties', () => {
  const state = createDefaultState()
  const stateWithDifferences: LanguageModelsState = {
    ...state,
    headerHeight: 30,
    rowHeight: 25,
    width: 400,
  }
  const savedState = { filterValue: 'restored' }
  const result = RestoreState.restoreState(stateWithDifferences, savedState)
  expect(result.headerHeight).toBe(30)
  expect(result.rowHeight).toBe(25)
  expect(result.width).toBe(400)
  expect(result.filterValue).toBe('restored')
})

test('restoreState - should restore filterValue with empty string', () => {
  const state = createDefaultState()
  const stateWithFilter: LanguageModelsState = {
    ...state,
    filterValue: 'some value',
  }
  const savedState = { filterValue: '' }
  const result = RestoreState.restoreState(stateWithFilter, savedState)
  expect(result.filterValue).toBe('')
})

test('restoreState - should restore x with zero', () => {
  const state = createDefaultState()
  const stateWithX: LanguageModelsState = {
    ...state,
    x: 100,
  }
  const savedState = { x: 0 }
  const result = RestoreState.restoreState(stateWithX, savedState)
  expect(result.x).toBe(0)
})

test('restoreState - should restore y with zero', () => {
  const state = createDefaultState()
  const stateWithY: LanguageModelsState = {
    ...state,
    y: 200,
  }
  const savedState = { y: 0 }
  const result = RestoreState.restoreState(stateWithY, savedState)
  expect(result.y).toBe(0)
})

test('restoreState - should handle savedState that is an array', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, [])
  expect(result).toEqual(state)
})

test('restoreState - should restore large coordinate values', () => {
  const state = createDefaultState()
  const savedState = { x: 999_999, y: 888_888 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.x).toBe(999_999)
  expect(result.y).toBe(888_888)
})

test('restoreState - should restore decimal coordinate values', () => {
  const state = createDefaultState()
  const savedState = { x: 123.45, y: 67.89 }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.x).toBe(123.45)
  expect(result.y).toBe(67.89)
})

test('restoreState - should restore filterValue with special characters', () => {
  const state = createDefaultState()
  const savedState = { filterValue: '@#$%^&*()' }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('@#$%^&*()')
})

test('restoreState - should restore filterValue with unicode characters', () => {
  const state = createDefaultState()
  const savedState = { filterValue: '你好世界🌍' }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('你好世界🌍')
})

test('restoreState - should not mutate original state', () => {
  const state = createDefaultState()
  const originalState = { ...state }
  const savedState = { filterValue: 'new', x: 100, y: 200 }
  RestoreState.restoreState(state, savedState)
  expect(state).toEqual(originalState)
})
