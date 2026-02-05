import { expect, test } from '@jest/globals'
import type { Dimensions } from '../src/parts/Dimensions/Dimensions.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { resize } from '../src/parts/Resize/Resize.ts'

const createMockDimensions = (overrides?: Partial<Dimensions>): Dimensions => ({
  height: 600,
  width: 1000,
  x: 10,
  y: 20,
  ...overrides,
})

test('resize should update width from dimensions', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ width: 1200 })

  const result = resize(state, dimensions)

  expect(result.width).toBe(1200)
})

test('resize should update x from dimensions', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ x: 50 })

  const result = resize(state, dimensions)

  expect(result.x).toBe(50)
})

test('resize should update y from dimensions', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ y: 100 })

  const result = resize(state, dimensions)

  expect(result.y).toBe(100)
})

test('resize should update all position and size properties', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ width: 1500, x: 30, y: 40 })

  const result = resize(state, dimensions)

  expect(result.width).toBe(1500)
  expect(result.x).toBe(30)
  expect(result.y).toBe(40)
})

test('resize should preserve all other state properties', () => {
  const state = {
    ...createDefaultState(),
    cacheKey: 'custom-cache',
    filterValue: 'test',
    headerHeight: 30,
    rowHeight: 25,
    scrollBarHeight: 15,
  }
  const dimensions = createMockDimensions({ width: 900, x: 5, y: 15 })

  const result = resize(state, dimensions)

  expect(result.cacheKey).toBe('custom-cache')
  expect(result.filterValue).toBe('test')
  expect(result.headerHeight).toBe(30)
  expect(result.rowHeight).toBe(25)
  expect(result.scrollBarHeight).toBe(15)
})

test('resize should return a new state object', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions()

  const result = resize(state, dimensions)

  expect(result).not.toBe(state)
})

test('resize should handle zero dimensions', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ width: 0, x: 0, y: 0 })

  const result = resize(state, dimensions)

  expect(result.width).toBe(0)
  expect(result.x).toBe(0)
  expect(result.y).toBe(0)
})

test('resize should handle large dimensions', () => {
  const state = createDefaultState()
  const dimensions = createMockDimensions({ width: 10_000, x: 5000, y: 8000 })

  const result = resize(state, dimensions)

  expect(result.width).toBe(10_000)
  expect(result.x).toBe(5000)
  expect(result.y).toBe(8000)
})

test('resize should handle floating point dimensions', () => {
  const state = createDefaultState()
  const dimensions: Dimensions = {
    height: 600.5,
    width: 1024.75,
    x: 10.25,
    y: 20.5,
  }

  const result = resize(state, dimensions)

  expect(result.width).toBe(1024.75)
  expect(result.x).toBe(10.25)
  expect(result.y).toBe(20.5)
})
