import { Nunito } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignIn, RedirectToSignIn } from '@clerk/nextjs'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
   
        <html lang="en">
          <body className={nunito.className}>{children}</body>
        </html>

    </ClerkProvider>
  )
}
