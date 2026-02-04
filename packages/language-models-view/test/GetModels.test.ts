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
    expect(model).toHaveProperty('capabilities')
    expect(model).toHaveProperty('enabled')
    expect(model).toHaveProperty('id')
    expect(model).toHaveProperty('inputContextSize')
    expect(model).toHaveProperty('name')
    expect(model).toHaveProperty('outputContextSize')
    expect(model).toHaveProperty('provider')
    expect(model).toHaveProperty('selected')
    expect(typeof model.capabilities).toBe('object')
    expect(typeof model.capabilities.tools).toBe('boolean')
    expect(typeof model.capabilities.vision).toBe('boolean')
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
    {
      capabilities: { tools: true, vision: true },
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
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'gpt-4-turbo',
      inputContextSize: 128_000,
      name: 'GPT-4 Turbo',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'gpt-3.5-turbo',
      inputContextSize: 16_385,
      name: 'GPT-3.5 Turbo',
      outputContextSize: 4096,
      provider: 'openai',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'claude-3-opus',
      inputContextSize: 200_000,
      name: 'Claude 3 Opus',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'claude-3-sonnet',
      inputContextSize: 200_000,
      name: 'Claude 3 Sonnet',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'claude-3-haiku',
      inputContextSize: 200_000,
      name: 'Claude 3 Haiku',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'claude-2.1',
      inputContextSize: 200_000,
      name: 'Claude 2.1',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: true,
      id: 'llama-2',
      inputContextSize: 4096,
      name: 'Llama 2',
      outputContextSize: 2048,
      provider: 'meta',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: true,
      id: 'llama-2-70b',
      inputContextSize: 4096,
      name: 'Llama 2 70B',
      outputContextSize: 2048,
      provider: 'meta',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'llama-3',
      inputContextSize: 8192,
      name: 'Llama 3',
      outputContextSize: 4096,
      provider: 'meta',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: false,
      id: 'mistral-7b',
      inputContextSize: 8192,
      name: 'Mistral 7B',
      outputContextSize: 4096,
      provider: 'mistral',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'mistral-medium',
      inputContextSize: 32_768,
      name: 'Mistral Medium',
      outputContextSize: 8192,
      provider: 'mistral',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'mistral-large',
      inputContextSize: 32_768,
      name: 'Mistral Large',
      outputContextSize: 8192,
      provider: 'mistral',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'gemini-pro',
      inputContextSize: 32_768,
      name: 'Gemini Pro',
      outputContextSize: 2048,
      provider: 'google',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: true },
        deprecated: false,
      enabled: true,
      id: 'gemini-ultra',
      inputContextSize: 32_768,
      name: 'Gemini Ultra',
      outputContextSize: 2048,
      provider: 'google',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: false,
      id: 'palm-2',
      inputContextSize: 8192,
      name: 'PaLM 2',
      outputContextSize: 1024,
      provider: 'google',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: true,
      id: 'codellama-34b',
      inputContextSize: 16_384,
      name: 'CodeLlama 34B',
      outputContextSize: 4096,
      provider: 'meta',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: true,
      id: 'deepseek-coder',
      inputContextSize: 16_384,
      name: 'DeepSeek Coder',
      outputContextSize: 4096,
      provider: 'deepseek',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
        deprecated: false,
      enabled: false,
      id: 'falcon-180b',
      inputContextSize: 2048,
      name: 'Falcon 180B',
      outputContextSize: 2048,
      provider: 'tii',
      selected: false,
    },
    {
      capabilities: { tools: true, vision: false },
        deprecated: false,
      enabled: true,
      id: 'mixtral-8x7b',
      inputContextSize: 32_768,
      name: 'Mixtral 8x7B',
      outputContextSize: 8192,
      provider: 'mistral',
      selected: false,
    },
  ])
})

test('getModels should return models with selected set to false by default', async () => {
  const models = await GetModels.getModels()

  for (const model of models) {
    expect(model.selected).toBe(false)
  }
})
