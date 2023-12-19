import { Nunito } from 'next/font/google';
import './globals.css';
import { ClerkProvider} from '@clerk/nextjs';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'WeComply',
  description: 'An automated sanctioning system',
  ogImage: '/wecomply-banner.png',
};

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
        <html lang="en">
        <head>
        <link
          rel="icon"
          href="/wecomply-logo-metadata.png"
        />
        <link
          rel="stylesheet"
          href={nunito.url}
        />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />

      </head>
          <body className={nunito.className}>
              <div>{children}</div>
          </body>
        </html>
    </ClerkProvider>
  );
}
