import { Nunito } from 'next/font/google'
import '@/app/globals.css'
import Header from '@/components/header'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Restaurants',
  description: 'Sekawan Test',
}

export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header/>
        <div className='container mx-auto w-full lg:w-10/12'>
          {children}
        </div>
      </body>
    </html>
  )
}
