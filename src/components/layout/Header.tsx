// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import cashaIcon from '../../app/assets/icons/casha-icon.png'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image 
                src={cashaIcon} 
                alt="Casha - Smart Finance App"
                width={48}
                height={48}
                className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Casha
              </span>
              <span className="text-xs text-gray-500 -mt-1">Smart Finance</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/#features" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Testimonials
            </Link>
            <Link 
              href="/#pricing" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <a 
              href="https://apps.apple.com/app/casha-your-finance-companion"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Download Free
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className="w-full h-0.5 bg-gray-600 rounded"></div>
              <div className="w-full h-0.5 bg-gray-600 rounded"></div>
              <div className="w-full h-0.5 bg-gray-600 rounded"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}