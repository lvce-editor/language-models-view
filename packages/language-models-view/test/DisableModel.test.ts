import { beforeEach, expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { disableModel } from '../src/parts/DisableModel/DisableModel.ts'

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

test('disableModel disables a model by id', async () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    models: [
      {
        capabilities: { tools: false, vision: false },
        deprecated: false,
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
        deprecated: false,
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
  }

  const result = await disableModel(state, 'gpt-4')

  expect(result.models[0].enabled).toBe(false)
  expect(result.models[1].enabled).toBe(true)
})

test('disableModel returns unchanged state if model id not found', async () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    models: [
      {
        capabilities: { tools: false, vision: false },
        deprecated: false,
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

  const result = await disableModel(state, 'nonexistent')

  expect(result.models[0].enabled).toBe(true)
})

test('disableModel does not modify other model properties', async () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    models: [
      {
        capabilities: { tools: false, vision: false },
        deprecated: false,
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

  const result = await disableModel(state, 'gpt-4')

  expect(result.models[0].id).toBe('gpt-4')
  expect(result.models[0].name).toBe('GPT-4')
})

test('disableModel preserves other state properties', async () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test',
    models: [
      {
        capabilities: { tools: false, vision: false },
        deprecated: false,
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    platform: 1,
    scrollBarHeight: 10,
    uid: 123,
    width: 500,
    x: 10,
    y: 20,
  }

  const result = await disableModel(state, 'gpt-4')

  expect(result.initial).toBe(false)
  expect(result.filterValue).toBe('test')
  expect(result.platform).toBe(1)
  expect(result.uid).toBe(123)
})
