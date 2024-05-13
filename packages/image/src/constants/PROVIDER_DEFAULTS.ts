import ProviderAtomContent from '../interfaces/ProviderAtomContent'
import CACHE from './CACHE'

const PROVIDER_DEFAULTS: ProviderAtomContent = {
  cache: {
    enabled: CACHE.defaultEnabled,
    maxAge: CACHE.defaultMaxAge,
    keyGenerator: CACHE.defaultKeyGenerator
  },
  loader: undefined
}

export default PROVIDER_DEFAULTS