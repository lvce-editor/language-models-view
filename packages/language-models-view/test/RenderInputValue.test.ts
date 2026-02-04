import { expect, test } from '@jest/globals'
import { ViewletCommand } from '@lvce-editor/constants'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderInputValue from '../src/parts/RenderInputValue/RenderInputValue.ts'

test('RenderInputValue.renderInputValue should return the correct command array', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'old',
    initial: true,
    uid: 42,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'new input value',
  }

  const result = RenderInputValue.renderInputValue(oldState, newState)

  expect(result).toEqual([ViewletCommand.SetValueByName, 42, 'LanguageModelsFilter', 'new input value'])
})

test('RenderInputValue.renderInputValue should use newState values', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'initial',
    initial: true,
    uid: 42,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'updated value',
    initial: false,
    inputSource: 1,
    uid: 99,
    width: 100,
  }

  const result = RenderInputValue.renderInputValue(oldState, newState)

  expect(result[0]).toBe(ViewletCommand.SetValueByName)
  expect(result[1]).toBe(99)
  expect(result[2]).toBe('LanguageModelsFilter')
  expect(result[3]).toBe('updated value')
})

test('RenderInputValue.renderInputValue should handle empty filter value', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'something',
    initial: true,
    uid: 5,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: '',
  }

  const result = RenderInputValue.renderInputValue(oldState, newState)

  expect(result).toEqual([ViewletCommand.SetValueByName, 5, 'LanguageModelsFilter', ''])
})

test('RenderInputValue.renderInputValue should return array format', () => {
  const oldState: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test',
    initial: true,
    uid: 10,
    width: 100,
  }

  const newState: LanguageModelsState = {
    ...oldState,
    filterValue: 'test value',
  }

  const result = RenderInputValue.renderInputValue(oldState, newState)

  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(4)
})
