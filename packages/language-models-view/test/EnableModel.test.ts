import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { enableModel } from '../src/parts/EnableModel/EnableModel.ts'

test('enableModel enables a model by id', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: '',
    initial: false,
    models: [
      { enabled: false, id: 'gpt-4', name: 'GPT-4', selected: false },
      { enabled: false, id: 'claude', name: 'Claude', selected: false },
    ],
    platform: 0,
    scrollBarHeight: 0,
    uid: 1,
    width: 0,
    x: 0,
    y: 0,
  }

  const result = enableModel(state, 'gpt-4')

  expect(result.models[0].enabled).toBe(true)
  expect(result.models[1].enabled).toBe(false)
})

test('enableModel returns unchanged state if model id not found', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: '',
    initial: false,
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', selected: false }],
    platform: 0,
    scrollBarHeight: 0,
    uid: 1,
    width: 0,
    x: 0,
    y: 0,
  }

  const result = enableModel(state, 'nonexistent')

  expect(result.models[0].enabled).toBe(false)
})

test('enableModel does not modify other model properties', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: '',
    initial: false,
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', selected: false }],
    platform: 0,
    scrollBarHeight: 0,
    uid: 1,
    width: 0,
    x: 0,
    y: 0,
  }

  const result = enableModel(state, 'gpt-4')

  expect(result.models[0].id).toBe('gpt-4')
  expect(result.models[0].name).toBe('GPT-4')
})

test('enableModel preserves other state properties', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: 'test',
    initial: false,
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', selected: false }],
    platform: 1,
    scrollBarHeight: 10,
    uid: 123,
    width: 500,
    x: 10,
    y: 20,
  }

  const result = enableModel(state, 'gpt-4')

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('test')
  expect(result.platform).toBe(1)
  expect(result.uid).toBe(123)
})
