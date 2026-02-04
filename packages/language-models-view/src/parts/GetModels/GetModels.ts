export const getModels = async (): Promise<any[]> => {
  return [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', selected: false },
    { enabled: true, id: 'claude-3-opus', name: 'Claude 3 Opus', selected: false },
    { enabled: true, id: 'llama-2', name: 'Llama 2', selected: false },
    { enabled: false, id: 'mistral-7b', name: 'Mistral 7B', selected: false },
    { enabled: true, id: 'gemini-pro', name: 'Gemini Pro', selected: false },
  ]
}
