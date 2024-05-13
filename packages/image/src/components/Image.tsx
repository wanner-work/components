'use client'

import ImageInternal from './internal/ImageInternal'
import ImageLoading from './internal/ImageLoading'
import { useContext, useMemo } from 'react'
import { atom, useAtomValue } from 'jotai'
import ImageProviderContext from '../context/ImageProviderContext'
import PROVIDER_DEFAULTS from '../constants/PROVIDER_DEFAULTS'
import useImage from '../hooks/useImage'
import getImageClassName from '../methods/getImageClassName'
import getImageStyleProperties from '../methods/getImageStyleProperties'

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
  const provider = useContext(ImageProviderContext)
  const { loader, cache } = useAtomValue(
    provider ||
    useMemo(
      () =>
        atom(PROVIDER_DEFAULTS),
      []
    )
  )

  const { image, isLoading } = useImage(src,  {
    cache
  })

  if (!fill && (!height || !width)) {
    throw new Error('You must provide a height and width if fill is not set.')
  }

  let className = useMemo(() => getImageClassName(fill), [fill])
  let style = useMemo(() => getImageStyleProperties(fill, height, width), [fill, height, width])

  return (
    <div className={`relative ${className}`} style={style}>
      <div className="absolute w-full h-full">{loader || <ImageLoading/>}</div>
      <ImageInternal src={image} alt={alt} loading={loading}/>
    </div>
  )
}
