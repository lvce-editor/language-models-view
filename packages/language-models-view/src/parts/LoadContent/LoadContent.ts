import type { LanguageModelsState } from '../LanguageModelsState/LanguageModelsState.ts'

export const loadContent = async (state: LanguageModelsState): Promise<LanguageModelsState> => {
  return {
    ...state,
    initial: false,
    models: [
      { id: '1', name: 'GPT-4' },
      { id: '2', name: 'Claude 3 Opus' },
      { id: '3', name: 'Llama 2' },
      { id: '4', name: 'Mistral 7B' },
      { id: '5', name: 'Gemini Pro' },
    ],
  }
}
