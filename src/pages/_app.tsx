import '@/styles/globals.css'
import { Dongle } from "next/font/google";
import type { AppProps } from 'next/app'

const dongle = Dongle({
  weight: '700',
  subsets: ['latin'],
  variable: '---dongle'
}) 

export default function App({ Component, pageProps }: AppProps) {
  return <main className={dongle.className}>
    <Component {...pageProps} />
  </main>
}
