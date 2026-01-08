// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header' ;
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Safari Into Africa | Unforgettable Journeys',
  description: 'Discover breathtaking wildlife and incredible sights with our bespoke African safari tours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className={`${lora.variable} font-sans`} style={{ fontFamily: 'Lora, Georgia, sans-serif', fontStyle: 'normal', fontWeight: 95, fontSize: '36px', lineHeight: 'normal' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}