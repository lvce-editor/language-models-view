import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffFilterValue from '../src/parts/DiffFilterValue/DiffFilterValue.ts'

test('DiffFilterValue.diffFilterValue should return true when filterValue is the same', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test',
    initial: true,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test',
  }

  const result = DiffFilterValue.diffFilterValue(oldState, newState)
  expect(result).toBe(true)
})

test('DiffFilterValue.diffFilterValue should return false when filterValue is different', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test1',
    initial: true,
    inputSource: 2,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test2',
  }

  const result = DiffFilterValue.diffFilterValue(oldState, newState)
  expect(result).toBe(false)
})

test('DiffFilterValue.diffFilterValue should return true when inputSource is 1 (user input), even if filterValue is different', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test1',
    initial: true,
    inputSource: 1,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test2',
  }

  const result = DiffFilterValue.diffFilterValue(oldState, newState)
  expect(result).toBe(true)
})

test('DiffFilterValue.diffFilterValue should return true when inputSource is 1 (user input), even if filterValue is the same', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test',
    initial: true,
    inputSource: 1,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test',
  }

  const result = DiffFilterValue.diffFilterValue(oldState, newState)
  expect(result).toBe(true)
})
