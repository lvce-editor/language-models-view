import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { enableModel } from '../src/parts/EnableModel/EnableModel.ts'

test('enableModel enables a model by id', () => {
  const state = {
    ...createDefaultState(),
    models: [
      { enabled: false, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false },
      { enabled: false, id: 'claude', name: 'Claude', provider: 'anthropic', selected: false },
    ],
  }

  const result = enableModel(state, 'gpt-4')

  expect(result.models[0].enabled).toBe(true)
  expect(result.models[1].enabled).toBe(false)
})

test('enableModel returns unchanged state if model id not found', () => {
  const state = {
    ...createDefaultState(),
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
  }

  const result = enableModel(state, 'nonexistent')

  expect(result.models[0].enabled).toBe(false)
})

test('enableModel does not modify other model properties', () => {
  const state = {
    ...createDefaultState(),
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
  }

  const result = enableModel(state, 'gpt-4')

  expect(result.models[0].id).toBe('gpt-4')
  expect(result.models[0].name).toBe('GPT-4')
})

test('enableModel preserves other state properties', () => {
  const state = {
    ...createDefaultState(),
    filterValue: 'test',
    models: [{ enabled: false, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
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
