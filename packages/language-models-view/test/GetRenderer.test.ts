import { expect, test } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import { renderIncremental } from '../src/parts/RenderIncremental/RenderIncremental.ts'
import * as RenderInputValue from '../src/parts/RenderInputValue/RenderInputValue.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'

test('GetRenderer.getRenderer should return renderIncremental for RenderIncremental type', () => {
  const result = GetRenderer.getRenderer(DiffType.RenderIncremental)
  expect(result).toBe(renderIncremental)
})

test('GetRenderer.getRenderer should return renderInputValue for RenderInputValue type', () => {
  const result = GetRenderer.getRenderer(DiffType.RenderInputValue)
  expect(result).toBe(RenderInputValue.renderInputValue)
})

test('GetRenderer.getRenderer should return renderItems for RenderItems type', () => {
  const result = GetRenderer.getRenderer(DiffType.RenderItems)
  expect(result).toBe(RenderItems.renderItems)
})

test('GetRenderer.getRenderer should throw an error for unknown renderer type', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})

test('GetRenderer.getRenderer should throw an error for negative diff type', () => {
  expect(() => GetRenderer.getRenderer(-1)).toThrow('unknown renderer')
})
