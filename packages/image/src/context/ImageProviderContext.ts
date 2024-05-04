import { createContext } from 'react'
import { Atom } from 'jotai'
import ProviderAtomContent from '../interfaces/ProviderAtomContent'

const ImageProviderContext = createContext<null | Atom<ProviderAtomContent>>(null)

export default ImageProviderContext