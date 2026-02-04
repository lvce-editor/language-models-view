import { expect, test } from '@jest/globals'
import * as GetModels from '../src/parts/GetModels/GetModels.ts'

test('getModels should return an array of models', async () => {
  const models = await GetModels.getModels()

  expect(Array.isArray(models)).toBe(true)
  expect(models.length).toBeGreaterThan(0)
})

test('getModels should return models with correct properties', async () => {
  const models = await GetModels.getModels()

  for (const model of models) {
    expect(model).toHaveProperty('enabled')
    expect(model).toHaveProperty('id')
    expect(model).toHaveProperty('inputContextSize')
    expect(model).toHaveProperty('name')
    expect(model).toHaveProperty('outputContextSize')
    expect(model).toHaveProperty('provider')
    expect(model).toHaveProperty('selected')
    expect(typeof model.enabled).toBe('boolean')
    expect(typeof model.id).toBe('string')
    expect(typeof model.inputContextSize).toBe('number')
    expect(typeof model.name).toBe('string')
    expect(typeof model.outputContextSize).toBe('number')
    expect(typeof model.provider).toBe('string')
    expect(typeof model.selected).toBe('boolean')
  }
})

test('getModels should return specific models', async () => {
  const models = await GetModels.getModels()

  expect(models).toEqual([
    { enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
    {
      enabled: true,
      id: 'claude-3-opus',
      inputContextSize: 200_000,
      name: 'Claude 3 Opus',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    { enabled: true, id: 'llama-2', inputContextSize: 4096, name: 'Llama 2', outputContextSize: 2048, provider: 'meta', selected: false },
    { enabled: false, id: 'mistral-7b', inputContextSize: 8192, name: 'Mistral 7B', outputContextSize: 4096, provider: 'mistral', selected: false },
    { enabled: true, id: 'gemini-pro', inputContextSize: 32_768, name: 'Gemini Pro', outputContextSize: 2048, provider: 'google', selected: false },
  ])
})

test('getModels should return models with selected set to false by default', async () => {
  const models = await GetModels.getModels()

  for (const model of models) {
    expect(model.selected).toBe(false)
  }
})
