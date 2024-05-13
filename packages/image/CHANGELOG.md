# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-05-13

### Breaking

- The cache configuration has moved from `useCache` and `cacheMaxAge={...}` on the `ImageProvider` component to the 
  `cache` prop. The `cache` prop is an object with the following properties: `enabled` (boolean), `maxAge` (number), and 
  some new ones. (see below)

### Added

- Added the option to set your own cache key per image. This makes sure, e.g. notion images can be cached as well, even 
  if the url, which is returned by the api, changes every single time even tho the image itself is the same.
- Created a `useImage` hook which handles all of the caching and loading if more flexibility is needed.
- Exported useful methods `getImageDataURL` and `preloadImage`

## [1.2.0] - 2024-05-10

### Added

- Added a new caching mechanism to the image component. The image will be cached in the browser after the first load and
  displayed almost immediately. The cache will be cleared after a defined time.

## [1.1.2] - 2024-05-04

### Fixed

- Fixing infinite loop bug by adding useMemo in front of atom creation.
- Adding the loading state as dependency of the useEffect hook.

## [1.1.1] - 2024-05-04

### Fixed

- Fixed bug where 'use client' would not be transpiled correctly by removing the terser plugin.

### Documentation

- Added a note to the README.md that the package is a client component on Next.js.
- Added the issues and homepage url to the package.json.

## [1.1.0] - 2024-05-04

### Added

- Added typescript transpilation to the build process with rollup but usage stays the same.
- Small change of project structure to make it more readable.

### Removed

- Removed `bg-light` from code as it is not a default tailwind class.

## [1.0.0] - 2024-05-01

### Added

- Initial release of the image component.
