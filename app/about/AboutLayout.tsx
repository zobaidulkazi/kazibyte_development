
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
    title: 'Welcome About Page',
    description: 'kazibyte_development',
  }

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
