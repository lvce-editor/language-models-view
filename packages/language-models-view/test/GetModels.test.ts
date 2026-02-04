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
    expect(model).toHaveProperty('name')
    expect(model).toHaveProperty('provider')
    expect(model).toHaveProperty('selected')
    expect(typeof model.enabled).toBe('boolean')
    expect(typeof model.id).toBe('string')
    expect(typeof model.name).toBe('string')
    expect(typeof model.provider).toBe('string')
    expect(typeof model.selected).toBe('boolean')
  }
})

test('getModels should return specific models', async () => {
  const models = await GetModels.getModels()

  expect(models).toEqual([
    { enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false },
    { enabled: true, id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'anthropic', selected: false },
    { enabled: true, id: 'llama-2', name: 'Llama 2', provider: 'meta', selected: false },
    { enabled: false, id: 'mistral-7b', name: 'Mistral 7B', provider: 'mistral', selected: false },
    { enabled: true, id: 'gemini-pro', name: 'Gemini Pro', provider: 'google', selected: false },
  ])
})

test('getModels should return models with selected set to false by default', async () => {
  const models = await GetModels.getModels()

  for (const model of models) {
    expect(model.selected).toBe(false)
  }
})
