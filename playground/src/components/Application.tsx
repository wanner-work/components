import Image, { ImageProvider } from '@wanner.work/image'

export default function Application() {
  return (
    <main>
      <div className="h-screen w-screen bg-black flex items-center justify-center gap-16">
        <Image src="https://source.unsplash.com/random" alt="Random image" height={500} width={500}/>
        <ImageProvider loader={<div className="text-white absolute h-full w-full">Loading...</div>}>
          <Image src="https://source.unsplash.com/random" alt="Random image" height={500} width={500}/>
        </ImageProvider>
      </div>
    </main>
  )
}

