import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { disableModel } from '../src/parts/DisableModel/DisableModel.ts'

test('disableModel disables a model by id', () => {
  const state = {
    ...createDefaultState(),
    models: [
      { enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false },
      { enabled: true, id: 'claude', name: 'Claude', provider: 'anthropic', selected: false },
    ],
  }

  const result = disableModel(state, 'gpt-4')

  expect(result.models[0].enabled).toBe(false)
  expect(result.models[1].enabled).toBe(true)
})

test('disableModel returns unchanged state if model id not found', () => {
  const state = {
    ...createDefaultState(),
    models: [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
  }

  const result = disableModel(state, 'nonexistent')

  expect(result.models[0].enabled).toBe(true)
})

test('disableModel does not modify other model properties', () => {
  const state = {
    ...createDefaultState(),
    models: [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
  }

  const result = disableModel(state, 'gpt-4')

  expect(result.models[0].id).toBe('gpt-4')
  expect(result.models[0].name).toBe('GPT-4')
})

test('disableModel preserves other state properties', () => {
  const state = {
    ...createDefaultState(),
    filterValue: 'test',
    models: [{ enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false }],
    platform: 1,
    scrollBarHeight: 10,
    uid: 123,
    width: 500,
    x: 10,
    y: 20,
  }

  const result = disableModel(state, 'gpt-4')

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('test')
  expect(result.platform).toBe(1)
  expect(result.uid).toBe(123)
})
