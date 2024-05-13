import Image, { ImageProvider } from '@wanner.work/image'
import Box from "@wanner.work/box";

export default function Application() {
  return (
    <main>
      <div className="min-h-screen bg-black flex items-center justify-center gap-16">
        <ImageProvider
          cache={{
            enabled: true,
            maxAge: 1000 * 60 * 60 * 24,
            keyGenerator: (src) => src.split('?')[0] || src
          }}
        >
          <Box width="content">
            <Image
              src="https://prod-files-secure.s3.us-west-2.amazonaws.com/1a234db3-ef03-45c4-81fc-233989525f51/61b00c9e-74ee-4e30-b8e2-5c64eb067d67/DSC04837.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240513T094909Z&X-Amz-Expires=3600&X-Amz-Signature=ac306c43019f135d9d6b4ab666787384ce97391dfa0b0428338bc6174f1c5c0f&X-Amz-SignedHeaders=host&x-id=GetObject"
              alt="Random image"
              height={500}
              width={750}
            />
          </Box>
        </ImageProvider>

        <Image
          src="https://prod-files-secure.s3.us-west-2.amazonaws.com/1a234db3-ef03-45c4-81fc-233989525f51/61b00c9e-74ee-4e30-b8e2-5c64eb067d67/DSC04837.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240513T094909Z&X-Amz-Expires=3600&X-Amz-Signature=ac306c43019f135d9d6b4ab666787384ce97391dfa0b0428338bc6174f1c5c0f&X-Amz-SignedHeaders=host&x-id=GetObject"
          alt="Random image"
          height={500}
          width={750}
        />
      </div>
    </main>
  );
}
