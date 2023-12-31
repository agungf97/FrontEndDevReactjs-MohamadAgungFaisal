import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar/page'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Restaurants',
  description: 'Sekawan Test',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <Navbar />
          <div className='mt-14'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  )
}
