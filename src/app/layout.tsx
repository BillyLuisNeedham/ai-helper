import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comrade Prompts',
  description: 'Welcome to ComradePrompts.io, the premier destination for AI-powered prompt generation. Crafted with expertise, our platform delivers unique and engaging prompts that fuel creativity and streamline your writing process. Inspired by the bureaucratic dystopia of "Papers, Please," our tool injects a dose of stern yet whimsical guidance to help you churn out top-notch content. Dive in to explore a plethora of prompt options tailored for writers, students, and creators seeking the perfect start for their next piece. Glory to AI, and glory to Comrade Prompts!',
}


export default function RootLayout({
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
