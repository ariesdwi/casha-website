// components/layout/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import cashaIcon from '../../app/assets/icons/casha-icon.png'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

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
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                Download Free
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <a
                    href="https://apps.apple.com/id/app/cashaapp/id6754607757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Download on the</div>
                      <div className="font-semibold text-gray-900 text-sm">App Store</div>
                    </div>
                  </a>
                  <div className="border-t border-gray-100" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.casha.app&hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.37.21.8.22 1.18.02l12.93-7.46-2.79-2.79-11.32 10.23zM.54 1.07C.2 1.46 0 2.04 0 2.79v18.42c0 .75.2 1.33.55 1.72l.09.08 10.32-10.33v-.24L.63.99.54 1.07zM20.67 10.4l-2.76-1.6-3.11 3.11 3.11 3.11 2.78-1.6c.79-.46.79-1.57-.02-2.02zM4.36.22L17.29 7.68l-2.79 2.79L3.18.24C3.56.04 3.99.05 4.36.22z"/>
                    </svg>
                    <div>
                      <div className="text-xs text-gray-500">Get it on</div>
                      <div className="font-semibold text-gray-900 text-sm">Google Play</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
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