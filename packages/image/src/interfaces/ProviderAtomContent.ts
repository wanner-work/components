import { ReactNode } from 'react'

export default interface ProviderAtomContent {
  useCache?: boolean
  cacheMaxAge?: number
  loader?: ReactNode
}
