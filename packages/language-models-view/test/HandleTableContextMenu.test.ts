import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { LanguageModelsState } from '../src/parts/LanguageModelsState/LanguageModelsState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleTableContextMenu } from '../src/parts/HandleTableContextMenu/HandleTableContextMenu.ts'

test('handleTableContextMenu calls ContextMenu.show2 with correct parameters', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model-0',
      inputContextSize: 8192,
      name: 'Model 0',
      outputContextSize: 4096,
      provider: 'test',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model-1',
      inputContextSize: 8192,
      name: 'Model 1',
      outputContextSize: 4096,
      provider: 'test',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model-2',
      inputContextSize: 8192,
      name: 'Model 2',
      outputContextSize: 4096,
      provider: 'test',
      selected: false,
    },
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model-3',
      inputContextSize: 8192,
      name: 'Model 3',
      outputContextSize: 4096,
      provider: 'test',
      selected: false,
    },
  ]

  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    uid: 42,
  }

  const result = await handleTableContextMenu(state, 100, 200)

  expect(mockRpc.invocations).toHaveLength(1)
  expect(mockRpc.invocations[0]).toEqual(['ContextMenu.show2', 42, 96, 100, 200, { menuId: 96, modelId: 'model-3' }])
  expect(result).toBe(state)
})

test('handleTableContextMenu returns state unchanged', async () => {
  RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const models = Array.from({ length: 20 }, (_, i) => ({
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: `model-${i}`,
    inputContextSize: 8192,
    name: `Model ${i}`,
    outputContextSize: 4096,
    provider: 'test',
    selected: false,
  }))

  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    uid: 100,
    width: 1024,
    x: 50,
    y: 150,
  }

  const result = await handleTableContextMenu(state, 300, 400)

  expect(result).toBe(state)
  expect(result.uid).toBe(100)
  expect(result.x).toBe(50)
  expect(result.y).toBe(150)
  expect(result.width).toBe(1024)
})

test('handleTableContextMenu handles header click by not showing context menu', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const models = [
    {
      capabilities: { tools: false, vision: false },
      deprecated: false,
      enabled: true,
      id: 'model-0',
      inputContextSize: 8192,
      name: 'Model 0',
      outputContextSize: 4096,
      provider: 'test',
      selected: false,
    },
  ]

  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    uid: 55,
  }

  const result = await handleTableContextMenu(state, 0, 0)

  expect(mockRpc.invocations).toHaveLength(0)
  expect(result).toBe(state)
})

test('handleTableContextMenu handles large coordinates', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const models = Array.from({ length: 100 }, (_, i) => ({
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: `model-${i}`,
    inputContextSize: 8192,
    name: `Model ${i}`,
    outputContextSize: 4096,
    provider: 'test',
    selected: false,
  }))

  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    uid: 77,
  }

  await handleTableContextMenu(state, 1920, 1080)

  expect(mockRpc.invocations[0]).toEqual(['ContextMenu.show2', 77, 96, 1920, 1080, { menuId: 96, modelId: 'model-52' }])
})

test('handleTableContextMenu uses correct menu ID', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  const models = Array.from({ length: 20 }, (_, i) => ({
    capabilities: { tools: false, vision: false },
    deprecated: false,
    enabled: true,
    id: `model-${i}`,
    inputContextSize: 8192,
    name: `Model ${i}`,
    outputContextSize: 4096,
    provider: 'test',
    selected: false,
  }))

  const state: LanguageModelsState = {
    ...createDefaultState(),
    filteredModels: models,
    uid: 123,
  }

  await handleTableContextMenu(state, 250, 350)

  const invocation = mockRpc.invocations[0]
  expect(invocation[2]).toBe(96) // menuId should be 96
  expect(invocation[5].menuId).toBe(96) // args should have menuId: 96
  expect(invocation[5].modelId).toBeDefined() // args should have modelId
})
