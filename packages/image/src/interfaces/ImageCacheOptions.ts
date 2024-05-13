export default interface ImageCacheOptions {
  /**
   * If the cache is enabled or not.
   */
  enabled?: boolean

  /**
   * The maximum age of the cache in milliseconds.
   */
  maxAge?: number

  /**
   * If the key to your cache isn't the src, you can provide a key generator function
   * that will be called with the src and should return a string key.
   * @param src
   */
  keyGenerator?: (src: string) => string
}