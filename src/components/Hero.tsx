"use client";
import { useState } from "react";
import { Play, ArrowRight, Download, Star } from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 5M+ users worldwide
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Take Control of Your
            <span className="text-green-600"> Financial Life</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Casha helps you track expenses, create budgets, and achieve your financial goals with ease. 
            Join millions who have transformed their financial habits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center transition-all duration-300 transform hover:scale-105">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(true)}
              className="flex items-center text-gray-700 hover:text-green-600 px-6 py-4 rounded-xl font-semibold text-lg transition-colors duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* App Store Badges */}
          <div className="flex justify-center gap-6 mb-16">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
              <Download className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
              <Download className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">$</span>
                  </div>
                  <p>App Dashboard Preview</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              +$1,250 saved
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              -$423 spent
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-2xl w-full mx-4">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Video demo would play here</p>
            </div>
            <button 
              onClick={() => setIsPlaying(false)}
              className="mt-4 text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}