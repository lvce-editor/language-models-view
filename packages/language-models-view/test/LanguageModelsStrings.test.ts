import { expect, test } from '@jest/globals'
import * as LanguageModelsStrings from '../src/parts/LanguageModelsStrings/LanguageModelsStrings.ts'

test('LanguageModelsStrings.account should return a string', () => {
  const result = LanguageModelsStrings.account()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.addModels should return a string', () => {
  const result = LanguageModelsStrings.addModels()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.clear should return a string', () => {
  const result = LanguageModelsStrings.clear()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.filterLanguageModels should return a string', () => {
  const result = LanguageModelsStrings.filterLanguageModels()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.id should return a string', () => {
  const result = LanguageModelsStrings.id()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.name should return a string', () => {
  const result = LanguageModelsStrings.name()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.provider should return a string', () => {
  const result = LanguageModelsStrings.provider()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.contextSize should return a string', () => {
  const result = LanguageModelsStrings.contextSize()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.noMatchingModels should return a string', () => {
  const result = LanguageModelsStrings.noMatchingModels()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.enableModel should return a string', () => {
  const result = LanguageModelsStrings.enableModel()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})

test('LanguageModelsStrings.disableModel should return a string', () => {
  const result = LanguageModelsStrings.disableModel()
  expect(typeof result).toBe('string')
  expect(result.length).toBeGreaterThan(0)
})
