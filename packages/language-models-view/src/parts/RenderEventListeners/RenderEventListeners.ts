import { EventExpression } from '@lvce-editor/constants'
import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleBlur,
      params: ['handleBlur'],
    },
    {
      name: DomEventListenerFunctions.HandleFilterInput,
      params: ['handleFilterInput', EventExpression.TargetValue],
    },
    {
      name: DomEventListenerFunctions.HandleFocus,
      params: ['handleFocus'],
    },
    {
      name: DomEventListenerFunctions.HandleAddModelsClick,
      params: ['handleAddModelsClick'],
    },
    {
      name: DomEventListenerFunctions.HandleClearClick,
      params: ['handleClearClick'],
    },
    {
      name: DomEventListenerFunctions.HandleContextMenu,
      params: ['handleContextMenu', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
    },
    {
      name: DomEventListenerFunctions.HandleMouseDown,
      params: ['handleTableRowClick', EventExpression.Button, EventExpression.ClientX, EventExpression.ClientY],
      preventDefault: true,
      stopPropagation: true,
    },
    {
      name: DomEventListenerFunctions.HandleCheckboxChange,
      params: ['handleCheckboxChange', EventExpression.TargetName, EventExpression.TargetValue],
      stopPropagation: true,
    },
  ]
}
