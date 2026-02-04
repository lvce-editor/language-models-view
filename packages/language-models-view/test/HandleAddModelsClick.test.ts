import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { handleAddModelsClick } from '../src/parts/HandleAddModelsClick/HandleAddModelsClick.ts'

test('handleAddModelsClick returns state unchanged', () => {
  const state: LanguageModelsState = {
    filteredModels: [],
    filterValue: '',
    initial: false,
    models: [],
    platform: 1,
    scrollBarHeight: 0,
    uid: 1,
    width: 800,
    x: 0,
    y: 0,
  }

  const result = handleAddModelsClick(state)
  expect(result).toBe(state)
})
