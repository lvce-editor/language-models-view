import { expect, test } from '@jest/globals'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleTableRowClick } from '../src/parts/HandleTableRowClick/HandleTableRowClick.ts'

test('handleTableRowClick selects a row when clicking on it', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  // Click on first row (header is 25px, first row is at 25-45px, so y=35 is in the first row)
  const result = handleTableRowClick(state, 0, 0, 35)

  expect(result.models[0].selected).toBe(true)
  expect(result.models[1].selected).toBe(false)
  expect(result.filteredModels[0].selected).toBe(true)
  expect(result.filteredModels[1].selected).toBe(false)
})

test('handleTableRowClick deselects a row when clicking on it again', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: true,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: true,
      },
    ],
    x: 0,
    y: 0,
  }

  const result = handleTableRowClick(state, 0, 0, 35)

  expect(result.models[0].selected).toBe(false)
  expect(result.filteredModels[0].selected).toBe(false)
})

test('handleTableRowClick selects second row', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  // Click on second row (header is 25px, first row is 25-45px, second row is 45-65px, so y=55 is in the second row)
  const result = handleTableRowClick(state, 0, 0, 55)

  expect(result.models[0].selected).toBe(false)
  expect(result.models[1].selected).toBe(true)
  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.filteredModels[1].selected).toBe(true)
})

test('handleTableRowClick deselects previous selection when selecting new row', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: true,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: true,
      },
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  const result = handleTableRowClick(state, 0, 0, 55)

  expect(result.models[0].selected).toBe(false)
  expect(result.models[1].selected).toBe(true)
  expect(result.filteredModels[0].selected).toBe(false)
  expect(result.filteredModels[1].selected).toBe(true)
})

test('handleTableRowClick ignores clicks in header area', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  // Click in header (y=10, which is less than 25px header height)
  const result = handleTableRowClick(state, 0, 0, 10)

  expect(result.models[0].selected).toBe(false)
  expect(result.filteredModels[0].selected).toBe(false)
})

test('handleTableRowClick ignores right clicks', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  // Right click (button=2)
  const result = handleTableRowClick(state, 2, 0, 35)

  expect(result.models[0].selected).toBe(false)
  expect(result.filteredModels[0].selected).toBe(false)
})

test('handleTableRowClick respects y offset', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    x: 0,
    y: 100, // View starts at y=100
  }

  // Click at y=135 (100 offset + 25 header + 10 in first row)
  const result = handleTableRowClick(state, 0, 0, 135)

  expect(result.models[0].selected).toBe(true)
  expect(result.filteredModels[0].selected).toBe(true)
})

test('handleTableRowClick ignores clicks beyond last row', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    x: 0,
    y: 0,
  }

  // Click far below the only row (y=200)
  const result = handleTableRowClick(state, 0, 0, 200)

  expect(result.models[0].selected).toBe(false)
  expect(result.filteredModels[0].selected).toBe(false)
})

test('handleTableRowClick preserves other state properties', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    filterValue: 'test filter',
    models: [
      {
        capabilities: { tools: false, vision: false },
        enabled: true,
        id: 'gpt-4',
        inputContextSize: 8192,
        name: 'GPT-4',
        outputContextSize: 4096,
        provider: 'openai',
        selected: false,
      },
    ],
    platform: 2,
    scrollBarHeight: 15,
    uid: 999,
    width: 1200,
    x: 50,
    y: 100,
  }

  const result = handleTableRowClick(state, 0, 0, 135)

  expect(result.filterValue).toBe('test filter')
  expect(result.platform).toBe(2)
  expect(result.scrollBarHeight).toBe(15)
  expect(result.uid).toBe(999)
  expect(result.width).toBe(1200)
  expect(result.x).toBe(50)
  expect(result.y).toBe(100)
})
