import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
export const handleCheckboxChange = async (
  state: Readonly<LanguageModelsState>,
  targetName: Readonly<string>,
  targetChecked: Readonly<'on' | 'off'>,
): Promise<LanguageModelsState> => {
  const { models } = state

  const targetCheckedBoolean = targetChecked === 'on' ? true : false

  // Find the model by matching checkbox name to model id
  const rowIndex = models.findIndex((model) => model.id === targetName)

  // Invalid row index
  if (rowIndex === -1 || rowIndex >= models.length) {
    return state
  }

  const model = models[rowIndex]
  if (!model) {
    return state
  }

  const newEnabled = !targetCheckedBoolean

  // Update the model with the new enabled state
  return UpdateModel.updateModel(state, model.id, newEnabled)
}
/* eslint-enable @typescript-eslint/prefer-readonly-parameter-types */
