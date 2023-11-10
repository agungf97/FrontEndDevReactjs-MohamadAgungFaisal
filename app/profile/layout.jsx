import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'
import { light } from '@clerk/themes'
import Navbar from '@/components/Navbar/page'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Restaurants',
  description: 'Sekawan Test',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={nunito.className}>
          <Navbar />
          <div className='container mx-auto w-full lg:w-10/12'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}