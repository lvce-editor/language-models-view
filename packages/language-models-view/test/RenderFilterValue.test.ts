import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import * as RenderFilterValue from '../src/parts/RenderFilterValue/RenderFilterValue.ts'

test('RenderFilterValue.renderFilterValue should return the correct command array', () => {
  const oldState: LanguageModelsState = {
    filteredModels: [],
    filterValue: 'old',
    headerHeight: 25,
    initial: true,
    models: [],
    platform: 0,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 42,
    width: 100,
    x: 0,
    y: 0,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'new filter value',
  }

  const result = RenderFilterValue.renderFilterValue(oldState, newState)

  expect(result).toEqual([
    ViewletCommand.SetValueByName,
    42,
    'LanguageModelsFilter',
    'new filter value',
  ])
})

test('RenderFilterValue.renderFilterValue should use newState.filterValue in the command', () => {
  const oldState: LanguageModelsState = {
    filteredModels: [],
    filterValue: 'ignored',
    headerHeight: 25,
    initial: true,
    models: [],
    platform: 0,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 123,
    width: 200,
    x: 10,
    y: 20,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'actual value',
  }

  const result = RenderFilterValue.renderFilterValue(oldState, newState)

  expect(result[3]).toBe('actual value')
  expect(result[1]).toBe(123)
})
