import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

export const handleCheckboxChange = async (
  state: LanguageModelsState,
  targetName: string,
  targetChecked: 'on' | 'off',
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
