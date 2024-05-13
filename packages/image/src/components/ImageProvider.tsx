'use client'

import { ReactNode, useMemo } from 'react'
import { atom } from 'jotai'
import ProviderAtomContent from '../interfaces/ProviderAtomContent'
import ImageProviderContext from '../context/ImageProviderContext'
import PROVIDER_DEFAULTS from '../constants/PROVIDER_DEFAULTS'

interface Props extends ProviderAtomContent {
  children: ReactNode[] | ReactNode
}

export default function ImageProvider({
  loader,
  cache,
  children
}: Props) {
  const imageProviderAtom = useMemo(
    () =>
      atom<ProviderAtomContent>({
        loader,
        cache: {
          enabled: cache?.enabled || PROVIDER_DEFAULTS.cache.enabled,
          maxAge: cache?.maxAge || PROVIDER_DEFAULTS.cache.maxAge,
          keyGenerator: cache?.keyGenerator || PROVIDER_DEFAULTS.cache.keyGenerator
        }
      }),
    [loader, cache]
  )

  return (
    <ImageProviderContext.Provider value={imageProviderAtom}>
      {children}
    </ImageProviderContext.Provider>
  )
}
