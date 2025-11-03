import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
            Casha
          </h3>
          
          <p className="text-green-200 text-lg leading-relaxed mb-6 max-w-md">
            Take control of your financial life and achieve your money goals with our smart finance solutions.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/cashaapps?igsh=M2dva2UyY3ExM3F4&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-green-800 hover:bg-green-700 rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-green-200" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-300 text-sm flex items-center gap-1">
              © 2025 Casha - PT Casha. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-green-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-green-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              {/* <a 
                href="mailto:support@casha.com" 
                className="text-green-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}