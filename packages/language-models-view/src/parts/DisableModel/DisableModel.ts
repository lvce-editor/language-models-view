import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import * as UpdateModel from '../UpdateModel/UpdateModel.ts'

export const disableModel = (state: LanguageModelsState, modelId: string): Promise<LanguageModelsState> => {
  return UpdateModel.updateModel(state, modelId, false)
}
