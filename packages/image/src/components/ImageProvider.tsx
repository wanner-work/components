'use client'

import { ReactNode, useMemo } from 'react'
import { atom } from 'jotai'
import ProviderAtomContent from '../interfaces/ProviderAtomContent'
import ImageProviderContext from '../context/ImageProviderContext'

interface Props extends ProviderAtomContent {
  children: ReactNode[] | ReactNode
}

export default function ImageProvider({
  loader,
  useCache,
  cacheMaxAge,
  children
}: Props) {
  const imageProviderAtom = useMemo(
    () =>
      atom<ProviderAtomContent>({
        loader,
        useCache,
        cacheMaxAge
      }),
    [loader, useCache, cacheMaxAge]
  )

  return (
    <ImageProviderContext.Provider value={imageProviderAtom}>
      {children}
    </ImageProviderContext.Provider>
  )
}
