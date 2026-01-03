import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UPEKSHA Engineering | Engineering Solutions Excellence',
    template: '%s | UPEKSHA Engineering',
  },
  description: 'UPEKSHA Engineering delivers reliable, high-quality engineering solutions across industrial, commercial, and infrastructure sectors. Engineering excellence, safety, and sustainability.',
  keywords: ['engineering solutions', 'mechanical engineering', 'electrical systems', 'civil engineering', 'industrial fabrication', 'engineering consultancy'],
  authors: [{ name: 'UPEKSHA Engineering' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'UPEKSHA Engineering',
    title: 'UPEKSHA Engineering | Engineering Solutions Excellence',
    description: 'Delivering reliable, high-quality engineering services across industrial, commercial, and infrastructure sectors.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

