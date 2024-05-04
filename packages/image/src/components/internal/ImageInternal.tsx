'use client'

interface Props {
  src: string
  alt: string
  loading: 'eager' | 'lazy'
}

export default function ImageInternal({ src, alt, loading }: Props) {
  return (
    <img
      className="h-full w-full object-cover z-10 relative text-transparent"
      src={src}
      alt={alt}
      loading={loading}
    />
  )
}
