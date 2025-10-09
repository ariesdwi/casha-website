import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Casha – Smart Personal Finance & Expense Tracking',
  description: 'Track expenses, manage budgets, and achieve financial goals with AI-powered insights. Download Casha for iOS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}