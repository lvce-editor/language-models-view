import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleHeaderContextMenu } from '../src/parts/HandleHeaderContextMenu/HandleHeaderContextMenu.ts'

test('handleHeaderContextMenu returns state unchanged', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    uid: 42,
  }

  const result = handleHeaderContextMenu(state)

  expect(result).toBe(state)
  expect(result.uid).toBe(42)
})

test('handleHeaderContextMenu preserves all state properties', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filterValue: 'test',
    headerHeight: 40,
    initial: false,
    rowHeight: 30,
    scrollBarHeight: 12,
    uid: 100,
    width: 1024,
    x: 50,
    y: 150,
  }

  const result = handleHeaderContextMenu(state)

  expect(result).toBe(state)
  expect(result.uid).toBe(100)
  expect(result.width).toBe(1024)
  expect(result.x).toBe(50)
  expect(result.y).toBe(150)
  expect(result.headerHeight).toBe(40)
  expect(result.rowHeight).toBe(30)
  expect(result.scrollBarHeight).toBe(12)
  expect(result.filterValue).toBe('test')
  expect(result.initial).toBe(false)
})

test('handleHeaderContextMenu with various state configurations', () => {
  const states: LanguageModelsState[] = [
    {
      ...createDefaultState(),
      uid: 1,
      width: 800,
    },
    {
      ...createDefaultState(),
      filterValue: 'gpt',
      uid: 2,
      width: 1200,
    },
    {
      ...createDefaultState(),
      headerHeight: 60,
      uid: 3,
      width: 500,
    },
  ]

  for (const state of states) {
    const result = handleHeaderContextMenu(state)
    expect(result).toBe(state)
  }
})
