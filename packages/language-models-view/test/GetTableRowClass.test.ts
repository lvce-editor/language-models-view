import { expect, test } from '@jest/globals'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getTableRowClass } from '../src/parts/TableBody/ModelRowVirtualDom/GetTableRowClass/GetTableRowClass.ts'

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

test('getTableRowClass should return TableRow class for default model', () => {
  const model = createMockLanguageModel()
  const result = getTableRowClass(model)
  expect(result).toBe(ClassNames.TableRow)
})

test('getTableRowClass should include Selected class when model is selected', () => {
  const model = createMockLanguageModel({ selected: true })
  const result = getTableRowClass(model)
  expect(result).toBe(`${ClassNames.Selected} ${ClassNames.TableRow}`)
})

test('getTableRowClass should include Disabled class when model is disabled', () => {
  const model = createMockLanguageModel({ enabled: false })
  const result = getTableRowClass(model)
  expect(result).toBe(`${ClassNames.Disabled} ${ClassNames.TableRow}`)
})

test('getTableRowClass should include both Selected and Disabled classes when model is both selected and disabled', () => {
  const model = createMockLanguageModel({ enabled: false, selected: true })
  const result = getTableRowClass(model)
  expect(result).toBe(`${ClassNames.Selected} ${ClassNames.Disabled} ${ClassNames.TableRow}`)
})
