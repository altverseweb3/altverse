import { Urbanist, Inter } from "next/font/google"

export const fontSans = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const fontMono = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})