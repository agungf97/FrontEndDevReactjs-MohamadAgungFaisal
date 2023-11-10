import '@/app/globals.css'
import Header from '@/components/header'
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'
import { light } from '@clerk/themes'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Restaurants',
  description: 'Sekawan Test',
}

export default function RootLayout({ children, }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={nunito.className}>
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
