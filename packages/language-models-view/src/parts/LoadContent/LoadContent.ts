import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'
import { getModels } from '../GetModels/GetModels.ts'
import { restoreState } from '../RestoreState/RestoreState.ts'

export const loadContent = async (state: LanguageModelsState, savedState?: unknown): Promise<LanguageModelsState> => {
  const models = await getModels()
  let newState: LanguageModelsState = {
    ...state,
    filteredModels: models,
    initial: false,
    models,
  }

  if (savedState) {
    newState = restoreState(newState, savedState)
  }

  return newState
}
