import type { Metadata } from 'next'
import { Gochi_Hand } from 'next/font/google'
import './globals.css'
import { TodoProvider } from '@/store/todos'

const gochi_hand = Gochi_Hand({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Todo by sneh',
  description: 'First app created in next JS with typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gochi_hand.className}>
        <TodoProvider>
        {children}
        </TodoProvider>
        </body>
    </html>
  )
}
