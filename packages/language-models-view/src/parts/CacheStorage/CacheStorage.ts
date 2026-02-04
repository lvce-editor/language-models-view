export const getDisabledModels = async (cacheName: string, cacheKey: string): Promise<string[]> => {
  try {
    const cache = await caches.open(cacheName)
    const response = await cache.match(cacheKey)

    if (!response) {
      return []
    }

    const data = await response.json()

    if (Array.isArray(data.disabledModelIds)) {
      return data.disabledModelIds.filter((id: any): id is string => typeof id === 'string')
    }

    return []
  } catch (error) {
    console.error('Error reading from cache storage:', error)
    return []
  }
}

export const saveDisabledModels = async (disabledModelIds: readonly string[], cacheName: string, cacheKey: string): Promise<void> => {
  try {
    const cache = await caches.open(cacheName)
    const response = Response.json(
      { disabledModelIds },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    await cache.put(cacheKey, response)
  } catch (error) {
    console.error('Error writing to cache storage:', error)
  }
}
