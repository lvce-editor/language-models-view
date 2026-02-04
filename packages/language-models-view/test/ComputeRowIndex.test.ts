import { expect, test } from '@jest/globals'
import * as ComputeRowIndex from '../src/parts/ComputeRowIndex/ComputeRowIndex.ts'

const HEADER_HEIGHT = 25
const ROW_HEIGHT = 20

test('computeRowIndex - click in header area', () => {
  const result = ComputeRowIndex.computeRowIndex(10, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(-1)
})

test('computeRowIndex - click at header boundary', () => {
  const result = ComputeRowIndex.computeRowIndex(24, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(-1)
})

test('computeRowIndex - click at first row start', () => {
  const result = ComputeRowIndex.computeRowIndex(25, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(0)
})

test('computeRowIndex - click in first row', () => {
  const result = ComputeRowIndex.computeRowIndex(30, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(0)
})

test('computeRowIndex - click at first row end', () => {
  const result = ComputeRowIndex.computeRowIndex(44, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(0)
})

test('computeRowIndex - click at second row start', () => {
  const result = ComputeRowIndex.computeRowIndex(45, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(1)
})

test('computeRowIndex - click in second row', () => {
  const result = ComputeRowIndex.computeRowIndex(50, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(1)
})

test('computeRowIndex - click in third row', () => {
  const result = ComputeRowIndex.computeRowIndex(65, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(2)
})

test('computeRowIndex - click in tenth row', () => {
  const result = ComputeRowIndex.computeRowIndex(225, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(10)
})

test('computeRowIndex - click at y=0', () => {
  const result = ComputeRowIndex.computeRowIndex(0, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(-1)
})

test('computeRowIndex - negative y value', () => {
  const result = ComputeRowIndex.computeRowIndex(-10, HEADER_HEIGHT, ROW_HEIGHT)
  expect(result).toBe(-1)
})

test('computeRowIndex - with different header height', () => {
  const result = ComputeRowIndex.computeRowIndex(50, 30, 20)
  expect(result).toBe(1)
})

test('computeRowIndex - with different row height', () => {
  const result = ComputeRowIndex.computeRowIndex(55, 25, 15)
  expect(result).toBe(2)
})
