import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

export const enableModel = (state: LanguageModelsState, modelId: string): Promise<LanguageModelsState> => {
  return UpdateModel.updateModel(state, modelId, true)
}
