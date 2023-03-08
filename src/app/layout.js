import { Roboto } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const FontBody = Roboto({
  subsets: ['latin'],
  weight: ['400', '300', '400', '700', '900']
})

export const metadata = {
  title: 'Weather App',
  description: 'A simple weather app'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={FontBody.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
