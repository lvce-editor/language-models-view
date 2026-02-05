import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual returns true when models and filteredModels are the same', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model2',
      inputContextSize: 8192,
      name: 'Model 2',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const state1: LanguageModelsState = {
    cacheKey: 'disabled-models',
    cacheName: 'language-models-cache',
    filteredModels: models,
    filterValue: '',
    focused: 'none',
    headerHeight: 25,
    initial: false,
    inputSource: 0,
    models: models,
    platform: 1,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 1,
    width: 800,
    x: 0,
    y: 0,
  }

  const state2: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models: models,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual returns false when models are different', () => {
  const models1 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const models2 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model2',
      inputContextSize: 8192,
      name: 'Model 2',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const state1: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models1,
    models: models1,
  }

  const state2: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models1,
    models: models2,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when filteredModels are different', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const filteredModels = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model2',
      inputContextSize: 8192,
      name: 'Model 2',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const state1: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models: models,
  }

  const state2: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: filteredModels,
    models: models,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns false when both models and filteredModels are different', () => {
  const models1 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const models2 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model2',
      inputContextSize: 8192,
      name: 'Model 2',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const filteredModels1 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model3',
      inputContextSize: 8192,
      name: 'Model 3',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const filteredModels2 = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model4',
      inputContextSize: 8192,
      name: 'Model 4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const state1: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: filteredModels1,
    models: models1,
  }

  const state2: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: filteredModels2,
    models: models2,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(false)
})

test('isEqual returns true with empty models arrays', () => {
  const models: any[] = []

  const state1: LanguageModelsState = {
    cacheKey: 'disabled-models',
    cacheName: 'language-models-cache',
    filteredModels: models,
    filterValue: '',
    focused: 'none',
    headerHeight: 25,
    initial: false,
    inputSource: 0,
    models: models,
    platform: 1,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 1,
    width: 800,
    x: 0,
    y: 0,
  }

  const state2: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models: models,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(true)
})

test('isEqual ignores other state properties like filterValue', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const state1: LanguageModelsState = {
    cacheKey: 'disabled-models',
    cacheName: 'language-models-cache',
    filteredModels: models,
    filterValue: 'search1',
    focused: 'none',
    headerHeight: 25,
    initial: false,
    inputSource: 0,
    models: models,
    platform: 1,
    rowHeight: 20,
    scrollBarHeight: 0,
    uid: 1,
    width: 800,
    x: 0,
    y: 0,
  }

  const state2: LanguageModelsState = {
    cacheKey: 'disabled-models',
    cacheName: 'language-models-cache',
    filteredModels: models,
    filterValue: 'search2',
    focused: 'none',
    headerHeight: 25,
    initial: true,
    inputSource: 0,
    models: models,
    platform: 2,
    rowHeight: 20,
    scrollBarHeight: 100,
    uid: 2,
    width: 1000,
    x: 10,
    y: 20,
  }

  const result = DiffItems.isEqual(state1, state2)
  expect(result).toBe(true)
})
