import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Enfield Spares | Genuine Royal Enfield OEM Parts',
  description: 'Premium OEM spare parts for Royal Enfield motorcycles. Sourced in India, delivered worldwide.',
  keywords: 'Royal Enfield spare parts, OEM parts, Classic 350, Meteor 350, Himalayan parts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
