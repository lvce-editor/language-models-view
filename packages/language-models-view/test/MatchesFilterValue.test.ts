import { expect, test } from '@jest/globals'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { matchesFilterValue } from '../src/parts/MatchesFilterValue/MatchesFilterValue.ts'

test('matchesFilterValue - should match by name', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'GPT-4 Turbo',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'gpt')).toBe(true)
})

test('matchesFilterValue - should match by name (full)', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Claude 3.5',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'claude 3.5')).toBe(true)
})

test('matchesFilterValue - should match by id', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'gpt-4-turbo-preview',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should match by provider', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'anthropic',
    selected: false,
  }
  expect(matchesFilterValue(model, 'anthropic')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for name', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'GPT-4',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for id', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'GPT-4-TURBO',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for provider', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'OPENAI',
    selected: false,
  }
  expect(matchesFilterValue(model, 'open')).toBe(true)
})

test('matchesFilterValue - should not match when filter is not in any field', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'gpt-4-turbo',
    inputContextSize: 4096,
    name: 'GPT-4',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'anthropic')).toBe(false)
})

test('matchesFilterValue - should handle empty filter string', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, '')).toBe(true)
})

test('matchesFilterValue - should work with lowercase filter value', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Claude Opus',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'claude')).toBe(true)
})

test('matchesFilterValue - should match partial text in name', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Llama 2 Chat',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, 'chat')).toBe(true)
})

test('matchesFilterValue - should match partial text in id', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'claude-3-opus-20240229',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'openai',
    selected: false,
  }
  expect(matchesFilterValue(model, '3-opus')).toBe(true)
})

test('matchesFilterValue - should match partial text in provider', () => {
  const model: LanguageModel = {
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: 'model-1',
    inputContextSize: 4096,
    name: 'Test Model',
    outputContextSize: 2048,
    provider: 'huggingface',
    selected: false,
  }
  expect(matchesFilterValue(model, 'hugging')).toBe(true)
})
