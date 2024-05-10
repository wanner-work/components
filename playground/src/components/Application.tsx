import Image, { ImageProvider } from '@wanner.work/image'
import Box from "@wanner.work/box";

export default function Application() {
  return (
    <main>
      <div className="min-h-screen bg-black flex items-center justify-center gap-16">
        <Box py="large">
          <Image
            src="https://prod-files-secure.s3.us-west-2.amazonaws.com/1a234db3-ef03-45c4-81fc-233989525f51/61b00c9e-74ee-4e30-b8e2-5c64eb067d67/DSC04837.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240510T121320Z&X-Amz-Expires=3600&X-Amz-Signature=9107ae9a23d11d8ac7250db23ce37ffaf0bd918749afc8133a32ec4192b6e89c&X-Amz-SignedHeaders=host&x-id=GetObject"
            alt="Random image"
            height={500}
            width={800}
          />
        </Box>
        <ImageProvider
          loader={
            <div className="text-white absolute h-full w-full">Loading...</div>
          }
          useCache
          cacheMaxAge={1000}
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
