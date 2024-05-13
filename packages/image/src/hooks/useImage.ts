import useImageOptions from '../interfaces/hooks/useImageOptions'
import { useCallback, useEffect, useState } from 'react'
import preloadImage from '../methods/preloadImage'
import CACHE from '../constants/CACHE'
import getImageDataURL from '../methods/getImageDataURL'

export default function useImage (src: string, options?: useImageOptions) {
  const [image, setImage] = useState<string>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (options?.cache?.enabled) {
      resolveCache().then((url: string) => {
        setIsLoading(false)
        setImage(url)
      })
    } else {
      preloadImage(src).then(() => {
        setIsLoading(false)
      })
      setImage(src)
    }
  },[src, options])

  const resolveCache = useCallback(async () => {
    const cache = await caches.open(CACHE.name)
    const key = options.cache.keyGenerator ? options.cache.keyGenerator(src) : src

    const match = await cache.match(key)

    if (match) {
      const age = Date.now() - Number(match.headers.get('age'))
      if (age > options.cache.maxAge) {
        await cache.delete(key)
      } else {
        return getImageDataURL(await match.blob())
      }
    }

    const response = await fetch(src)
    const blob = await response.blob()

    void cache.put(key, new Response(blob, {
      headers: {
        ...response.headers,
        age: new Date().getTime().toString()
      }
    }))

    return await getImageDataURL(blob)
  }, [src, options.cache])

  return { image, isLoading }
}
