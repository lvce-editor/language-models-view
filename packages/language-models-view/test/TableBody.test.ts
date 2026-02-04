import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { LanguageModel } from '../src/parts/LanguageModel/LanguageModel.ts'
import { getTableBody, getTableBodyVirtualDom } from '../src/parts/TableBody/GetTableBodyVirtualDom.ts'

test('getTableBody returns tbody element with correct childCount for empty array', () => {
  const result = getTableBody([])
  expect(result).toEqual({
    childCount: 0,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBody returns tbody element with correct childCount for single model', () => {
  const models: readonly LanguageModel[] = [{ id: 'gpt-4', name: 'GPT-4' }]
  const result = getTableBody(models)
  expect(result).toEqual({
    childCount: 1,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBody returns tbody element with correct childCount for multiple models', () => {
  const models: readonly LanguageModel[] = [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'gpt-3.5', name: 'GPT-3.5' },
    { id: 'claude', name: 'Claude' },
  ]
  const result = getTableBody(models)
  expect(result).toEqual({
    childCount: 3,
    type: VirtualDomElements.TBody,
  })
})

test('getTableBodyVirtualDom returns empty array for empty models', () => {
  const result = getTableBodyVirtualDom([])
  expect(result).toEqual([
    {
      childCount: 0,
      type: VirtualDomElements.TBody,
    },
  ])
})

test('getTableBodyVirtualDom returns correct structure for single model', () => {
  const models: readonly LanguageModel[] = [{ id: 'gpt-4', name: 'GPT-4' }]
  const result = getTableBodyVirtualDom(models)
  expect(result).toEqual([
    {
      childCount: 1,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getTableBodyVirtualDom returns correct structure for multiple models', () => {
  const models: readonly LanguageModel[] = [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'claude', name: 'Claude' },
  ]
  const result = getTableBodyVirtualDom(models)
  expect(result).toEqual([
    {
      childCount: 2,
      type: VirtualDomElements.TBody,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'gpt-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'GPT-4',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 2,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'claude',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      type: VirtualDomElements.Td,
    },
    {
      text: 'Claude',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getTableBodyVirtualDom returns consistent results on multiple calls with same models', () => {
  const models: readonly LanguageModel[] = [{ id: 'gpt-4', name: 'GPT-4' }]
  const result1 = getTableBodyVirtualDom(models)
  const result2 = getTableBodyVirtualDom(models)
  expect(result1).toEqual(result2)
})
