import { expect, test } from '@jest/globals'
import { getDisabledModelIds } from '../src/parts/GetDisabledModelIds/GetDisabledModelIds.ts'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'

test('getDisabledModelIds returns empty array when all models are enabled', () => {
  const models: LanguageModel[] = [
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
  ]

  const result = getDisabledModelIds(models)

  expect(result).toEqual([])
})

test('getDisabledModelIds returns all ids when all models are disabled', () => {
  const models: LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
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
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]

  const result = getDisabledModelIds(models)

  expect(result).toEqual(['gpt-4', 'claude'])
})

test('getDisabledModelIds returns disabled model ids from mixed array', () => {
  const models: LanguageModel[] = [
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
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'palm',
      inputContextSize: 32_000,
      name: 'PaLM',
      outputContextSize: 8192,
      provider: 'google',
      selected: false,
    },
  ]

  const result = getDisabledModelIds(models)

  expect(result).toEqual(['claude', 'palm'])
})

test('getDisabledModelIds returns empty array for empty input', () => {
  const models: LanguageModel[] = []

  const result = getDisabledModelIds(models)

  expect(result).toEqual([])
})

test('getDisabledModelIds returns single disabled model id', () => {
  const models: LanguageModel[] = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
  ]

  const result = getDisabledModelIds(models)

  expect(result).toEqual(['gpt-4'])
})
