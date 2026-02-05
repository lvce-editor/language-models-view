import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getCheckboxInput } from '../src/parts/TableBody/ModelRowVirtualDom/GetCheckboxInput/GetCheckboxInput.ts'

const createMockLanguageModel = (overrides: Partial<LanguageModel> = {}): LanguageModel => ({
  capabilities: { tools: false, vision: false },
  deprecated: false,
  enabled: true,
  id: 'test-id',
  inputContextSize: 4096,
  name: 'Test Model',
  outputContextSize: 2048,
  provider: 'test-provider',
  selected: false,
  ...overrides,
})

test('getCheckboxInput should return checkbox input node for enabled model', () => {
  const model = createMockLanguageModel({ enabled: true, id: 'model-1' })
  const result = getCheckboxInput(model)
  expect(result).toEqual({
    checked: true,
    inputType: 'checkbox',
    name: 'model-1',
    onChange: DomEventListenerFunctions.HandleCheckboxChange,
    type: VirtualDomElements.Input,
  })
})

test('getCheckboxInput should return checkbox input node for disabled model', () => {
  const model = createMockLanguageModel({ enabled: false, id: 'model-2' })
  const result = getCheckboxInput(model)
  expect(result).toEqual({
    checked: false,
    inputType: 'checkbox',
    name: 'model-2',
    onChange: DomEventListenerFunctions.HandleCheckboxChange,
    type: VirtualDomElements.Input,
  })
})

test('getCheckboxInput should use model id as checkbox name', () => {
  const model = createMockLanguageModel({ id: 'custom-model-id' })
  const result = getCheckboxInput(model)
  expect(result.name).toBe('custom-model-id')
})

test('getCheckboxInput should have correct type', () => {
  const model = createMockLanguageModel()
  const result = getCheckboxInput(model)
  expect(result.type).toBe(VirtualDomElements.Input)
})

test('getCheckboxInput should have checkbox inputType', () => {
  const model = createMockLanguageModel()
  const result = getCheckboxInput(model)
  expect(result.inputType).toBe('checkbox')
})

test('getCheckboxInput should have HandleCheckboxChange as onChange handler', () => {
  const model = createMockLanguageModel()
  const result = getCheckboxInput(model)
  expect(result.onChange).toBe(DomEventListenerFunctions.HandleCheckboxChange)
})
