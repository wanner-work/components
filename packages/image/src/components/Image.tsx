'use client'

import ImageInternal from './internal/ImageInternal'
import ImageLoading from './internal/ImageLoading'
import { useContext, useEffect, useMemo, useState } from 'react'
import { atom, useAtomValue } from 'jotai'
import ImageProviderContext from '../context/ImageProviderContext'

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
  const [isLoading, setIsLoading] = useState(true)
  const provider = useContext(ImageProviderContext)
  const { loader } = useAtomValue(provider || useMemo(() => atom({ loader: undefined }), []))


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
    if (loading === 'eager') {
      const image = new Image()
      image.src = src
      image.onload = () => {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }, [loading])

  return (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute w-full h-full">
        {loader || <ImageLoading />}
      </div>
      {!isLoading && <ImageInternal src={src} alt={alt} loading={loading} />}
    </div>
  )
}