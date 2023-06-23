import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeatherCast',
  description: 'A weather forecasting web app made by spandan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
      {children}
      </body>
    </html>
  )
}
