const CACHE_NAME = 'language-models-cache'
const CACHE_KEY = 'disabled-models'

export const getDisabledModels = async (): Promise<string[]> => {
  try {
    const cache = await caches.open(CACHE_NAME)
    const response = await cache.match(CACHE_KEY)

    if (!response) {
      return []
    }

    const data = await response.json()

    if (Array.isArray(data.disabledModelIds)) {
      return data.disabledModelIds
    }

    return []
  } catch (error) {
    console.error('Error reading from cache storage:', error)
    return []
  }
}

export const saveDisabledModels = async (disabledModelIds: string[]): Promise<void> => {
  try {
    const cache = await caches.open(CACHE_NAME)
    const response = Response.json(JSON.stringify({ disabledModelIds }), {
      tent-Type': 'applicaion/json' },
    })
    await cache.put(CACHE_KEY, response)
  } catch (error) {
    console.error('Error writing to cache storage:', error)
  }
}
