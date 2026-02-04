export const getModels = async (): Promise<any[]> => {
  return [
    { enabled: true, id: 'gpt-4', name: 'GPT-4', provider: 'openai', selected: false },
    { enabled: true, id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'anthropic', selected: false },
    { enabled: true, id: 'llama-2', name: 'Llama 2', provider: 'meta', selected: false },
    { enabled: false, id: 'mistral-7b', name: 'Mistral 7B', provider: 'mistral', selected: false },
    { enabled: true, id: 'gemini-pro', name: 'Gemini Pro', provider: 'google', selected: false },
  ]
}
