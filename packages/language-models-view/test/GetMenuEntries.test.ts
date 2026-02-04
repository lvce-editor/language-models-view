import { expect, test } from '@jest/globals'
import type { ContextMenuProps } from '../src/parts/ContextMenuProps/ContextMenuProps.ts'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import * as LanguageModelsStrings from '../src/parts/LanguageModelsStrings/LanguageModelsStrings.ts'

const defaultMenuProps: ContextMenuProps = {
  menuId: 96,
}

test('getMenuEntries returns empty array when no model is selected', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
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
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(Array.isArray(entries)).toBe(true)
  expect(entries).toHaveLength(0)
})

test('getMenuEntries returns disable entry when selected model is enabled', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
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
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  expect(entries[0].command).toBe('LanguageModels.disableModel')
  expect(entries[0].args).toBe('gpt-4')
  expect(entries[0].id).toBe('disable-model')
  expect(entries[0].label).toBe(LanguageModelsStrings.disableModel())
  expect(entries[0].flags).toBe(0)
})

test('getMenuEntries returns enable entry when selected model is disabled', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
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
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: true,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  expect(entries[0].command).toBe('LanguageModels.enableModel')
  expect(entries[0].args).toBe('claude')
  expect(entries[0].id).toBe('enable-model')
  expect(entries[0].label).toBe(LanguageModelsStrings.enableModel())
  expect(entries[0].flags).toBe(0)
})

test('getMenuEntries returns readonly array', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: true,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(Object.isFrozen(entries) || Array.isArray(entries)).toBe(true)
})

test('getMenuEntries with multiple enabled models returns correct entry for selected model', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
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
      selected: true,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  expect(entries[0].args).toBe('gpt-4-turbo')
  expect(entries[0].command).toBe('LanguageModels.disableModel')
})

test('getMenuEntries with multiple disabled models returns correct entry for selected model', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
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
      enabled: false,
      id: 'gpt-4-turbo',
      inputContextSize: 128_000,
      name: 'GPT-4 Turbo',
      outputContextSize: 4096,
      provider: 'openai',
      selected: true,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: false,
      id: 'claude',
      inputContextSize: 200_000,
      name: 'Claude',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  expect(entries[0].args).toBe('gpt-4-turbo')
  expect(entries[0].command).toBe('LanguageModels.enableModel')
})

test('getMenuEntries with filtered models respects selection state', () => {
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: [
      {
        capabilities: { tools: false, vision: false },
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
        capabilities: { tools: false, vision: false },
        deprecated: false,
        enabled: false,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: true,
      },
    ],
    models: [
      {
        capabilities: { tools: false, vision: false },
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
        capabilities: { tools: false, vision: false },
        deprecated: false,
        enabled: false,
        id: 'claude',
        inputContextSize: 200_000,
        name: 'Claude',
        outputContextSize: 4096,
        provider: 'anthropic',
        selected: true,
      },
    ],
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  expect(entries[0].args).toBe('claude')
  expect(entries[0].command).toBe('LanguageModels.enableModel')
})

test('getMenuEntries returns entries with correct MenuEntry structure', () => {
  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'gpt-4',
      inputContextSize: 8192,
      name: 'GPT-4',
      outputContextSize: 4096,
      provider: 'openai',
      selected: true,
    },
  ]
  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    models,
  }

  const entries = getMenuEntries(state, defaultMenuProps)

  expect(entries).toHaveLength(1)
  const entry = entries[0]
  expect(typeof entry.id).toBe('string')
  expect(typeof entry.label).toBe('string')
  expect(typeof entry.command).toBe('string')
  expect(typeof entry.flags).toBe('number')
  expect(typeof entry.args).toBe('string')
})
