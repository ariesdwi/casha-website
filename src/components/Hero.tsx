"use client";
import { useState } from "react";
import { Play, Download, Star, X } from "lucide-react";
import Image from "next/image";

// Import your screenshots
import screenshot1 from "../app/assets/images/1.png";
import screenshot2 from "../app/assets/images/2.png";
import screenshot3 from "../app/assets/images/3.png";
import screenshot4 from "../app/assets/images/4.png";
import screenshot5 from "../app/assets/images/5.png";
import screenshot6 from "../app/assets/images/6.png";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { 
      src: screenshot1, 
      alt: "Transaction Input", 
      title: "Natural Language Input",
      description: "With natural language input, simply type what you spent and Casha turns it into a transaction automatically.",
      icon: "💬"
    },
    { 
      src: screenshot2, 
      alt: "Dashboard", 
      title: "Smart Organization",
      description: "Casha keeps your money organized so you can focus on what matters most in life.",
      icon: "📱"
    },
    { 
      src: screenshot3, 
      alt: "Transactions", 
      title: "All Currency Support",
      description: "No matter where you are, Casha adapts to your local currency so you can track spending anywhere.",
      icon: "💱"
    },
    { 
      src: screenshot4, 
      alt: "Reports", 
      title: "Beautiful Analytics",
      description: "From weekly to yearly insights, get beautiful charts that make your money habits easy to understand.",
      icon: "📊"
    },
    { 
      src: screenshot5, 
      alt: "Budget", 
      title: "Smart Budgeting",
      description: "Set your spending limits and let Casha notify you when you're close to going over.",
      icon: "🎯"
    },
    { 
      src: screenshot6, 
      alt: "All Currency", 
      title: "Multi-Currency",
      description: "Track expenses in any currency with automatic conversion and localization.",
      icon: "🌍"
    }
  ];

  // YouTube video ID extracted from the URL
  const youtubeVideoId = "pVO5JuFUmlI";
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-20 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by 5M+ users worldwide
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Take Control of Your
              <span className="text-green-600"> Financial Life</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Casha helps you track expenses, create budgets, and achieve your financial goals with AI-powered insights. 
              Join millions who have transformed their financial habits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://apps.apple.com/app/casha-your-finance-companion"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="font-semibold text-lg">App Store</div>
                </div>
              </a>
              
              <button 
                onClick={() => setIsPlaying(true)}
                className="flex items-center justify-center text-gray-700 hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.8★</div>
                <div className="text-sm text-gray-600">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
            </div>
          </div>

          {/* Horizontal Screenshots with Interactive Description */}
          <div id="features" className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                See Casha in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tap any screen to learn more about each feature
              </p>
            </div>

            {/* Active Feature Description */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full text-lg font-semibold mb-4">
                <span className="text-2xl mr-3">{features[activeFeature].icon}</span>
                {features[activeFeature].title}
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>

            {/* Horizontal Screenshots Grid */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`group relative transition-all duration-300 ${
                      activeFeature === index 
                        ? 'transform scale-105' 
                        : 'hover:scale-105'
                    }`}
                  >
                    <div className={`relative rounded-2xl shadow-lg border-4 overflow-hidden transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-green-500 shadow-xl'
                        : 'border-white hover:border-green-300 group-hover:shadow-xl'
                    }`}>
                      <Image 
                        src={feature.src}
                        alt={feature.alt}
                        className="w-full h-auto object-cover"
                      />
                      
                      {/* Active Indicator */}
                      {activeFeature === index && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    {/* Feature Label */}
                    <div className={`mt-3 text-center transition-colors duration-300 ${
                      activeFeature === index ? 'text-green-600 font-semibold' : 'text-gray-600'
                    }`}>
                      <div className="text-sm font-medium">{feature.title.split(' ')[0]}</div>
                      <div className="text-xs opacity-80">{feature.title.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeature 
                      ? 'bg-green-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quick Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chat-Style Input</h3>
              <p className="text-gray-600 leading-relaxed">
                Type transactions naturally like you&aposre chatting. &quot;Lunch with Sarah $25&quot; becomes a categorized expense instantly.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart categorization learns from your spending patterns and provides personalized financial advice.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-600 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Track expenses in any currency with automatic conversion. Perfect for travelers and international users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Casha App Demo</h3>
              <button 
                onClick={() => setIsPlaying(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="aspect-video bg-black">
              <iframe
                src={youtubeEmbedUrl}
                title="Casha App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            
            <div className="p-4 border-t">
              <div className="flex justify-end">
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}