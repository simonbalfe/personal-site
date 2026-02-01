// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'simon balfe - Software Engineer';
export const SITE_DESCRIPTION =
  'Software engineer passionate about building elegant solutions. Sharing insights on web development, system design, and the craft of coding.';

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: '%s | simon balfe',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Software Engineer',
    'Web Development',
    'Full Stack',
    'TypeScript',
    'React',
    'Node.js',
    'System Design',
    'Tech Blog',
  ],
  authors: [{ name: 'simon balfe' }],
  creator: 'simon balfe',
  publisher: 'simon balfe',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'simon balfe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'simon balfe - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@simobalfe',
  },
};
