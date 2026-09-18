import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Thanay Krishna C U | AI & Data Science Engineer',
    short_name: 'Thanay',
    description: 'Official portfolio of Thanay Krishna C U (Thanay) – AI & Data Science Engineer and IoT Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#090d16',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
