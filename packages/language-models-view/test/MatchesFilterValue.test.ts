import { expect, test } from '@jest/globals'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { matchesFilterValue } from '../src/parts/MatchesFilterValue/MatchesFilterValue.ts'

const createMockModel = (overrides: Partial<LanguageModel>): LanguageModel => ({
  capabilities: {},
  deprecated: false,
  enabled: true,
  id: 'model-1',
  inputContextSize: 4096,
  name: 'Test Model',
  outputContextSize: 2048,
  provider: 'openai',
  selected: false,
  ...overrides,
})

test('matchesFilterValue - should match by name', () => {
  const model = createMockModel({ name: 'GPT-4 Turbo' })
  expect(matchesFilterValue(model, 'gpt')).toBe(true)
})

test('matchesFilterValue - should match by name (full)', () => {
  const model = createMockModel({ name: 'Claude 3.5' })
  expect(matchesFilterValue(model, 'claude 3.5')).toBe(true)
})

test('matchesFilterValue - should match by id', () => {
  const model = createMockModel({ id: 'gpt-4-turbo-preview' })
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should match by provider', () => {
  const model = createMockModel({ provider: 'anthropic' })
  expect(matchesFilterValue(model, 'anthropic')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for name', () => {
  const model = createMockModel({ name: 'GPT-4' })
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for id', () => {
  const model = createMockModel({ id: 'GPT-4-TURBO' })
  expect(matchesFilterValue(model, 'gpt-4')).toBe(true)
})

test('matchesFilterValue - should be case-insensitive for provider', () => {
  const model = createMockModel({ provider: 'OPENAI' })
  expect(matchesFilterValue(model, 'open')).toBe(true)
})

test('matchesFilterValue - should not match when filter is not in any field', () => {
  const model = createMockModel({
    name: 'GPT-4',
    id: 'gpt-4-turbo',
    provider: 'openai',
  })
  expect(matchesFilterValue(model, 'anthropic')).toBe(false)
})

test('matchesFilterValue - should handle empty filter string', () => {
  const model = createMockModel()
  expect(matchesFilterValue(model, '')).toBe(true)
})

test('matchesFilterValue - should work with lowercase filter value', () => {
  const model = createMockModel({ name: 'Claude Opus' })
  expect(matchesFilterValue(model, 'claude')).toBe(true)
})

test('matchesFilterValue - should match partial text in name', () => {
  const model = createMockModel({ name: 'Llama 2 Chat' })
  expect(matchesFilterValue(model, 'chat')).toBe(true)
})

test('matchesFilterValue - should match partial text in id', () => {
  const model = createMockModel({ id: 'claude-3-opus-20240229' })
  expect(matchesFilterValue(model, '3-opus')).toBe(true)
})

test('matchesFilterValue - should match partial text in provider', () => {
  const model = createMockModel({ provider: 'huggingface' })
  expect(matchesFilterValue(model, 'hugging')).toBe(true)
})
