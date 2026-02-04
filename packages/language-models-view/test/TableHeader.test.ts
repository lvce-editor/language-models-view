import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getTableHead } from '../src/parts/TableHeader/GetTableHead/GetTableHead.ts'
import { getTableHeaderVirtualDom } from '../src/parts/TableHeader/GetTableHeaderVirtualDom.ts'

test('getTableHead returns thead element', () => {
  const result = getTableHead()
  expect(result).toEqual({
    childCount: 1,
    type: VirtualDomElements.THead,
  })
})

test('getTableHeaderVirtualDom returns array with all header elements', () => {
  const result = getTableHeaderVirtualDom()
  expect(result).toEqual([
    {
      childCount: 1,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 4,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'ID',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Name',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Provider',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      text: 'Context Size',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getTableHeaderVirtualDom returns array with 10 elements', () => {
  const result = getTableHeaderVirtualDom()
  expect(result.length).toEqual(10)
})

test('getTableHeaderVirtualDom returns consistent results on multiple calls', () => {
  const result1 = getTableHeaderVirtualDom()
  const result2 = getTableHeaderVirtualDom()
  expect(result1).toEqual(result2)
})
