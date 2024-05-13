export default async function preloadImage (src: string) {
  const image = new Image()
  image.src = src

  await new Promise((resolve, reject) => {
    image.onload = () => resolve(true)
    image.onerror = (error) => reject(error)
  })
}