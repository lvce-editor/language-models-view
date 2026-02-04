import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderFilterValue from '../src/parts/RenderFilterValue/RenderFilterValue.ts'

test('RenderFilterValue.renderFilterValue should return the correct command array', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'old',
    initial: true,
    uid: 42,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'new filter value',
  }

  const result = RenderFilterValue.renderFilterValue(oldState, newState)

  expect(result).toEqual([ViewletCommand.SetValueByName, 42, 'LanguageModelsFilter', 'new filter value'])
})

test('RenderFilterValue.renderFilterValue should use newState.filterValue in the command', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'ignored',
    initial: true,
    uid: 42,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'actual value',
    uid: 123,
  }

  const result = RenderFilterValue.renderFilterValue(oldState, newState)

  expect(result[3]).toBe('actual value')
  expect(result[1]).toBe(123)
})
