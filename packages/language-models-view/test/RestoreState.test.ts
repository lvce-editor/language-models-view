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

test('restoreState - should restore filterValue and ignore other properties', () => {
  const state = createDefaultState()
  const savedState = {
    filterValue: 'valid filter',
    x: 'invalid',
    y: 100,
  }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('valid filter')
})

test('restoreState - should ignore extra properties in savedState', () => {
  const state = createDefaultState()
  const savedState = {
    anotherExtra: 123,
    extraProp: 'should be ignored',
    filterValue: 'test',
  }
  const result = RestoreState.restoreState(state, savedState)
  expect(result.filterValue).toBe('test')
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

test('restoreState - should handle savedState that is an array', () => {
  const state = createDefaultState()
  const result = RestoreState.restoreState(state, [])
  expect(result).toEqual(state)
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
  const savedState = { filterValue: 'new' }
  RestoreState.restoreState(state, savedState)
  expect(state).toEqual(originalState)
})
