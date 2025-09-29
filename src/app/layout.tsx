import "./globals.css"
import type { Metadata } from "next"
import Image from "next/image"
import cashaIcon from "./assets/icons/casha-icon.png"

export const metadata: Metadata = {
  title: "Casha – Smart Finance",
  description: "Track, save, and manage money effortlessly with Casha.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-green-900 flex flex-col min-h-screen">
        <header className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-2 py-2 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold text-green-600">
              <Image 
                src={cashaIcon} 
                alt="Casha Logo"
                width={48}
                height={48}
                 className="w-16 h-16"
              />
            
            </a>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        {/* <footer className="bg-green-900 text-green-100 py-6 mt-auto">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Casha. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer> */}


      </body>
    </html>
  )
}