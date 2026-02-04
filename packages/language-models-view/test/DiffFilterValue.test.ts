import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import * as DiffFilterValue from '../src/parts/DiffFilterValue/DiffFilterValue.ts'

test('DiffFilterValue.diffFilterValue should return true when filterValue is the same', () => {
  const oldState: LanguageModelsState = {
    filteredModels: [],
    filterValue: 'test',
    headerHeight: 25,
    initial: true,
    inputSource: 0,
    models: [],
    platform: 0,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 1,
    width: 100,
    x: 0,
    y: 0,
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
    filteredModels: [],
    filterValue: 'test1',
    headerHeight: 25,
    initial: true,
    inputSource: 0,
    models: [],
    platform: 0,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 1,
    width: 100,
    x: 0,
    y: 0,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test2',
  }

  const result = DiffFilterValue.diffFilterValue(oldState, newState)
  expect(result).toBe(false)
})
