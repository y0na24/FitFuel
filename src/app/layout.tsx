import type { Metadata } from 'next'
import './globals.css'
import { pt_sans } from '@/fonts/fonts'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'FitFuel',
  description: 'Интернет-магазин спортивного питания',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${pt_sans.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  )
}
