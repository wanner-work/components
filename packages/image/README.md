![image.](docs/lead.svg)

# image.

An opinionated image component with caching for the web.

## Prerequisites

Only use this package if you are building with [tailwindcss](https://tailwindcss.com/) and the newest version
of [react](https://react.dev/).

## Installation

1. Install the package using pnpm: `pnpm add @wanner.work/image`.
2. Add the following line to your `tailwind.config.js` content configuration: (if not already present from
   different `@wanner.work` components) `"./node_modules/@wanner.work/**/*.{js,ts,jsx,tsx}"`

## Usage

### 1. Using the `Image` component:

```tsx
import Image from '@wanner.work/image'

export default function MyComponent() {
  return (
    <Image
      src="https://source.unsplash.com/random"
      alt="Random image"
      height={500}
      width={500}
    />
  )
}
```

### 2. Using the `Image` component with the `ImageProvider` context component somewhere above the `Image` component in the component tree:

```tsx
import Image, { ImageProvider } from '@wanner.work/image'

export default function MyComponent() {
  return (
    <ImageProvider
      loader={
        <div className="text-white absolute h-full w-full">Loading...</div>
      }
      cache={{
        enabled: true,
        maxAge: 1000 * 60 * 60 * 24,
        keyGenerator: (src) => src.split('?')[0] || src
      }}
    >
      <Image
        src="https://source.unsplash.com/random"
        alt="Random image"
        height={500}
        width={500}
      />
    </ImageProvider>
  )
}
```

## Options

### `useImage` hook

#### Input

- `src` (string): The source of the image.
- `options?` (useImageOptions?): Hook options:
  - `cache?` (ImageCacheOptions?): The cache options:
  - `enabled?` (boolean?): If the caching should be enabled
  - `maxAge?` (number?): The max age of the cache until the resources should be fetched again
  - `keyGenerator?` ((url: string) => string): If the key of the cache shouldn't just be the src url.

#### Output

- `isLoading` (boolean): Boolean to show if the image is loading
- `image` (string): Either the url or the base64 data url of the image.

### `Image` component

- `src` (string): The source of the image.
- `alt` (string): The alt text of the image.
- `height?` (number): The height of the image. Is required if `fill` is `false`.
- `width?` (number): The width of the image. Is required if `fill` is `false`.
- `fill?` (boolean): Whether the image should fill its container. Defaults to `false`.
- `loading?` ('lazy' | 'eager'): The loading strategy of the image. Defaults to `lazy`.

### `ImageProvider` component

- `loader?` (ReactNode?): The loader to show while the image is loading. The custom node will be put into a container
  which has the exact width and height as the image will have.
- `cache?` (ImageCacheOptions?): The cache options:
  - `enabled?` (boolean?): If the caching should be enabled
  - `maxAge?` (number?): The max age of the cache until the resources should be fetched again
  - `keyGenerator?` ((url: string) => string): If the key of the cache shouldn't just be the src url.

## Further information

### Next.js

The component can be used on Next.js and exposes the 'use client' directive as it uses useEffect, states and context.
