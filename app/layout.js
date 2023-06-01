import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/sidebar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranay Aryal',
  description: 'portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
         />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')`
          }}/>
      </head>
      <body className={`max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto ${inter.className}`}>
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
