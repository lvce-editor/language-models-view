export const getModels = async (): Promise<any[]> => {
  return [
    { enabled: true, id: 'gpt-4', inputContextSize: 8192, name: 'GPT-4', outputContextSize: 4096, provider: 'openai', selected: false },
    {
      enabled: true,
      id: 'claude-3-opus',
      inputContextSize: 200_000,
      name: 'Claude 3 Opus',
      outputContextSize: 4096,
      provider: 'anthropic',
      selected: false,
    },
    { enabled: true, id: 'llama-2', inputContextSize: 4096, name: 'Llama 2', outputContextSize: 2048, provider: 'meta', selected: false },
    { enabled: false, id: 'mistral-7b', inputContextSize: 8192, name: 'Mistral 7B', outputContextSize: 4096, provider: 'mistral', selected: false },
    { enabled: true, id: 'gemini-pro', inputContextSize: 32768, name: 'Gemini Pro', outputContextSize: 2048, provider: 'google', selected: false },
  ]
}
