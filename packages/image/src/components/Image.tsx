'use client'

import ImageInternal from './internal/ImageInternal'
import ImageLoading from './internal/ImageLoading'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { atom, useAtomValue } from 'jotai'
import ImageProviderContext from '../context/ImageProviderContext'
import CACHE from '../constants/CACHE'

interface Props {
  src: string
  alt: string
  height?: number
  width?: number
  fill?: boolean
  loading?: 'eager' | 'lazy'
}

export default function ImageComponent({
  src,
  alt,
  height,
  width,
  fill,
  loading = 'lazy'
}: Props) {
  const [image, setImage] = useState<string>(undefined)

  const provider = useContext(ImageProviderContext)
  const { loader, cacheMaxAge, useCache } = useAtomValue(
    provider ||
      useMemo(
        () =>
          atom({
            loader: undefined,
            useCache: false,
            cacheMaxAge: CACHE.defaultMaxAge
          }),
        []
      )
  )

  if (!fill && (!height || !width)) {
    throw new Error('You must provide a height and width if fill is not set.')
  }

  let className = ''
  let style = {
    height: undefined,
    width: undefined
  }

  if (fill) {
    className += 'w-full h-full'
  } else {
    style.height = `${height}px`
    style.width = `${width}px`
  }

  useEffect(() => {
    if (useCache) {
      void resolveCache()
    } else {
      setImage(src)
    }
  }, [loading, image, src, useCache, cacheMaxAge])

  const resolveCache = async () => {
    const cache = await caches.open(CACHE.name)
    const cachedResponse = await cache.match(src)

    if (cachedResponse) {
      if (
        new Date().getTime() - parseInt(cachedResponse.headers.get('age')) >
        cacheMaxAge
      ) {
        await cache.delete(src)
      } else {
        const base64 = await readCache(await cachedResponse.blob())
        setImage(base64)
        return
      }
    }

    if (loading === 'eager') {
      setImage(src)
    }

    const imageResponse = await fetch(src)
    const blob = await imageResponse.blob()
    const base64 = await readCache(blob)
    setImage(base64)

    await cache.put(
      src,
      new Response(blob, {
        headers: {
          ...imageResponse.headers,
          age: new Date().getTime().toString()
        }
      })
    )
  }

  const readCache = useCallback(async (blob: Blob) => {
    return await new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.readAsDataURL(blob)
    })
  }, [])

  return (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute w-full h-full">{loader || <ImageLoading />}</div>
      <ImageInternal src={image} alt={alt} loading={loading} />
    </div>
  )
}
