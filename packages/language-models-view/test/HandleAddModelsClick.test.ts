import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleAddModelsClick } from '../src/parts/HandleAddModelsClick/HandleAddModelsClick.ts'

test('handleAddModelsClick adds a dummy model', () => {
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
  expect(result.models.length).toBe(1)
  expect(result.models[0].capabilities).toEqual({ tools: false, vision: false })
  expect(result.models[0].name).toBe('Dummy Model')
  expect(result.models[0].provider).toBe('mock-provider')
  expect(result.models[0].enabled).toBe(true)
  expect(result.models[0].selected).toBe(false)
  expect(result.models[0].inputContextSize).toBe(4096)
  expect(result.models[0].outputContextSize).toBe(2048)
  expect(result.models[0].id).toMatch(/^dummy-model-\d+$/)
  expect(result.filteredModels.length).toBe(1)
})

test('handleAddModelsClick preserves all state properties and adds a model', () => {
  const state = {
    ...createDefaultState(),
    filterValue: 'test filter',
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: false,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: true,
      },
    ],
    platform: 2,
    scrollBarHeight: 15,
    uid: 999,
    width: 1200,
    x: 50,
    y: 100,
  }

  const result = handleAddModelsClick(state)

  expect(result.filterValue).toBe('test filter')
  expect(result.models.length).toBe(3)
  expect(result.models[0]).toBe(state.models[0])
  expect(result.models[1]).toBe(state.models[1])
  expect(result.models[2].name).toBe('Dummy Model')
  expect(result.platform).toBe(2)
  expect(result.scrollBarHeight).toBe(15)
  expect(result.uid).toBe(999)
  expect(result.width).toBe(1200)
  expect(result.x).toBe(50)
  expect(result.y).toBe(100)
})

test('handleAddModelsClick does not mutate input state', () => {
  const state = {
    ...createDefaultState(),
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
  }

  const originalModels = state.models
  const originalLength = state.models.length

  const result = handleAddModelsClick(state)

  expect(state.models).toBe(originalModels)
  expect(state.models.length).toBe(originalLength)
  expect(result.models.length).toBe(originalLength + 1)
})

test('handleAddModelsClick works with empty models', () => {
  const state = {
    ...createDefaultState(),
    models: [],
  }

  const result = handleAddModelsClick(state)

  expect(result.models.length).toBe(1)
  expect(result.models[0].name).toBe('Dummy Model')
})

test('handleAddModelsClick works with filtered models', () => {
  const state = {
    ...createDefaultState(),
    filteredModels: [
      { capabilities: { tools: false, vision: false }, enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
    ],
    filterValue: 'gpt',
    models: [
      { capabilities: { tools: false, vision: false }, enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
      { capabilities: { tools: false, vision: false }, enabled: false, id: 'claude', inputContextSize: 200_000, name: 'Claude', outputContextSize: 4096, provider: 'anthropic', selected: false },
    ],
  }

  const result = handleAddModelsClick(state)

  expect(result.models.length).toBe(3)
  expect(result.filteredModels.length).toBe(1)
  expect(result.filteredModels).toBe(state.filteredModels)
})
