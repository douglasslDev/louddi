import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import '../../fonts/fonts.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ministério Louddi',
  description: 'Ministério Louddi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
  <html lang="en">
    <Head>
        <link rel="icon" href="/backgr  ound3.jpg" />
      </Head>
  
      <body >{children}</body>
    </html>
    
   
  )
}
