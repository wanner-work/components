import Image, { ImageProvider } from "@wanner.work/image";
import Box from "@wanner.work/box";

export default function Application() {
  return (
    <main>
      <div className="h-screen w-screen bg-black flex items-center justify-center gap-16">
        <Box width="medium">
          <Image
            src="https://source.unsplash.com/random"
            alt="Random image"
            fill
          />
        </Box>
        <ImageProvider
          loader={
            <div className="text-white absolute h-full w-full">Loading...</div>
          }
        >
          <Box width="medium">
            <Image
              src="https://source.unsplash.com/random"
              alt="Random image"
              fill
            />
          </Box>
        </ImageProvider>
      </div>
    </main>
  );
}
