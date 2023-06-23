import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeatherCast',
  description: 'A weather forecasting web app made by spandan',
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: { url: "/favicon.ico", type: "image/ico" },
  },
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
