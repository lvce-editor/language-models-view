import { expect, test } from '@jest/globals'
import { getKeyBindings } from '../src/parts/GetKeyBindings/GetKeyBindings.ts'

test('getKeyBindings should return an array', () => {
  const keyBindings = getKeyBindings()
  expect(Array.isArray(keyBindings)).toBe(true)
})

test('getKeyBindings should return an empty array', () => {
  const keyBindings = getKeyBindings()
  expect(keyBindings.length).toBe(0)
})

test('each KeyBinding should have required properties', () => {
  const keyBindings = getKeyBindings()
  
  for (const keyBinding of keyBindings) {
    expect(keyBinding).toHaveProperty('command')
    expect(keyBinding).toHaveProperty('key')
    expect(keyBinding).toHaveProperty('when')
  }
})

test('each KeyBinding should have correct property types', () => {
  const keyBindings = getKeyBindings()
  
  for (const keyBinding of keyBindings) {
    expect(typeof keyBinding.command).toBe('string')
    expect(typeof keyBinding.key).toBe('number')
    expect(typeof keyBinding.when).toBe('number')
  }
})

test('getKeyBindings should return consistent results', () => {
  const firstCall = getKeyBindings()
  const secondCall = getKeyBindings()
  
  expect(firstCall).toEqual(secondCall)
})
