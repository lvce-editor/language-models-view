import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const handleFilterInput = (state: LanguageModelsState, value: string): LanguageModelsState => {
  const lowerValue = value.toLowerCase()
  const filteredModels = value === '' 
    ? state.models 
    : state.models.filter((model) => 
        model.name.toLowerCase().includes(lowerValue) || 
        model.id.toLowerCase().includes(lowerValue)
      )
  
  return {
    ...state,
    filteredModels,
    filterValue: value,
  }
}
