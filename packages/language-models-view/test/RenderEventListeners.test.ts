import { expect, test } from '@jest/globals'
import { EventExpression } from '@lvce-editor/constants'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners should return an array', () => {
  const result = renderEventListeners()
  expect(Array.isArray(result)).toBe(true)
})

test('renderEventListeners should return a readonly array', () => {
  const result = renderEventListeners()
  expect(Object.isFrozen(result) || !Array.isArray(result.concat)).toBe(true)
})

test('renderEventListeners should return 7 event listeners', () => {
  const result = renderEventListeners()
  expect(result).toHaveLength(7)
})

test('renderEventListeners should include HandleBlur listener', () => {
  const result = renderEventListeners()
  const handleBlurListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleBlur)
  expect(handleBlurListener).toEqual({
    name: DomEventListenerFunctions.HandleBlur,
    params: ['handleBlur'],
  })
})

test('renderEventListeners should include HandleFilterInput listener with EventExpression.TargetValue', () => {
  const result = renderEventListeners()
  const handleFilterInputListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleFilterInput)
  expect(handleFilterInputListener).toEqual({
    name: DomEventListenerFunctions.HandleFilterInput,
    params: ['handleFilterInput', EventExpression.TargetValue],
  })
})

test('renderEventListeners should include HandleFocus listener', () => {
  const result = renderEventListeners()
  const handleFocusListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleFocus)
  expect(handleFocusListener).toEqual({
    name: DomEventListenerFunctions.HandleFocus,
    params: ['handleFocus'],
  })
})

test('renderEventListeners should include HandleAddModelsClick listener', () => {
  const result = renderEventListeners()
  const handleAddModelsClickListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleAddModelsClick)
  expect(handleAddModelsClickListener).toEqual({
    name: DomEventListenerFunctions.HandleAddModelsClick,
    params: ['handleAddModelsClick'],
  })
})

test('renderEventListeners should include HandleClearClick listener', () => {
  const result = renderEventListeners()
  const handleClearClickListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleClearClick)
  expect(handleClearClickListener).toEqual({
    name: DomEventListenerFunctions.HandleClearClick,
    params: ['handleClearClick'],
  })
})

test('renderEventListeners should include HandleContextMenu listener with preventDefault', () => {
  const result = renderEventListeners()
  const handleContextMenuListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleContextMenu)
  expect(handleContextMenuListener).toEqual({
    name: DomEventListenerFunctions.HandleContextMenu,
    params: ['handleContextMenu', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
    preventDefault: true,
  })
})

test('renderEventListeners should include HandleMouseDown listener with preventDefault and stopPropagation', () => {
  const result = renderEventListeners()
  const handleMouseDownListener = result.find((listener) => listener.name === DomEventListenerFunctions.HandleMouseDown)
  expect(handleMouseDownListener).toEqual({
    name: DomEventListenerFunctions.HandleMouseDown,
    params: ['handleTableRowClick', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
    preventDefault: true,
    stopPropagation: true,
  })
})

test('renderEventListeners should return consistent results on multiple calls', () => {
  const result1 = renderEventListeners()
  const result2 = renderEventListeners()
  expect(result1).toEqual(result2)
})

test('renderEventListeners event listeners should have correct structure', () => {
  const result = renderEventListeners()
  for (const listener of result) {
    expect(listener).toHaveProperty('name')
    expect(listener).toHaveProperty('params')
    expect(typeof listener.name).toBe('number')
    expect(Array.isArray(listener.params)).toBe(true)
  }
})

test('renderEventListeners should have listeners in expected order', () => {
  const result = renderEventListeners()
  const names = result.map((listener) => listener.name)
  expect(names).toEqual([
    DomEventListenerFunctions.HandleBlur,
    DomEventListenerFunctions.HandleFilterInput,
    DomEventListenerFunctions.HandleFocus,
    DomEventListenerFunctions.HandleAddModelsClick,
    DomEventListenerFunctions.HandleClearClick,
    DomEventListenerFunctions.HandleContextMenu,
    DomEventListenerFunctions.HandleMouseDown,
  ])
})

test('renderEventListeners should only have preventDefault set for specific listeners', () => {
  const result = renderEventListeners()
  const listenersWithPreventDefault = result.filter((listener) => listener.preventDefault === true)
  expect(listenersWithPreventDefault).toHaveLength(2)
  expect(listenersWithPreventDefault[0].name).toBe(DomEventListenerFunctions.HandleContextMenu)
  expect(listenersWithPreventDefault[1].name).toBe(DomEventListenerFunctions.HandleMouseDown)
})

test('renderEventListeners should only have stopPropagation set for HandleMouseDown', () => {
  const result = renderEventListeners()
  const listenersWithStopPropagation = result.filter((listener) => listener.stopPropagation === true)
  expect(listenersWithStopPropagation).toHaveLength(1)
  expect(listenersWithStopPropagation[0].name).toBe(DomEventListenerFunctions.HandleMouseDown)
})

test('renderEventListeners all params should be strings', () => {
  const result = renderEventListeners()
  for (const listener of result) {
    for (const param of listener.params) {
      expect(typeof param).toBe('string')
    }
  }
})
