import { ReactNode } from 'react'
import ImageCacheOptions from './ImageCacheOptions'

export default interface ProviderAtomContent {
  cache?: ImageCacheOptions
  loader?: ReactNode
}
