"use client";
import { useState } from "react";
import { Play, Download, Star, X } from "lucide-react";
import Image from "next/image";

// Import screenshots
import screenshot1 from "../app/assets/images/1.png";
import screenshot2 from "../app/assets/images/2.png";
import screenshot3 from "../app/assets/images/3.png";
import screenshot4 from "../app/assets/images/4.png";
import screenshot5 from "../app/assets/images/5.png";
import screenshot6 from "../app/assets/images/6.png";
import screenshot7 from "../app/assets/images/7.png";
import screenshot8 from "../app/assets/images/8.png";
import screenshot9 from "../app/assets/images/9.png";
import screenshot10 from "../app/assets/images/10.png";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { 
      src: screenshot1, 
      alt: "Dashboard", 
      title: "Dashboard",
      description: "Get a complete overview of your financial health — income, expenses, debts, and assets all in one beautiful screen.",
      icon: "🏠"
    },
    { 
      src: screenshot2, 
      alt: "AI Chat Input", 
      title: "AI Chat Input",
      description: "Add transactions by typing naturally or scanning receipts. 'Makan siang 45rb' gets parsed instantly.",
      icon: "💬"
    },
    { 
      src: screenshot3, 
      alt: "Report Page", 
      title: "Reports",
      description: "Beautiful charts and monthly reports that show exactly where your money goes and how your finances trend over time.",
      icon: "📋"
    },
    { 
      src: screenshot4, 
      alt: "List Transaction", 
      title: "Transactions",
      description: "Browse, filter, and search your full transaction history with smart categorization done automatically.",
      icon: "📝"
    },
    { 
      src: screenshot5, 
      alt: "Budget and Reminder", 
      title: "Budget & Reminders",
      description: "Set spending limits with AI recommendations and get smart reminders so you never miss a bill or savings target.",
      icon: "🔔"
    },
    { 
      src: screenshot6,
      alt: "Goal Tracker", 
      title: "Goal Tracker",
      description: "Save toward milestones with progress tracking and direct asset linking to stay on course.",
      icon: "🎯"
    },
    { 
      src: screenshot7,
      alt: "Liabilities List", 
      title: "Liabilities",
      description: "Manage credit cards, loans, and installments with real-time payoff simulation and debt tracking.",
      icon: "💳"
    },
    { 
      src: screenshot8,
      alt: "Portfolio & Assets", 
      title: "Portfolio & Assets",
      description: "Monitor 28 types of assets including stocks, gold, crypto, property, and cash in one unified view.",
      icon: "📈"
    },
    { 
      src: screenshot9,
      alt: "Language Settings", 
      title: "Multi-Language",
      description: "Use Casha in your preferred language. Full localization support so finance feels natural to you.",
      icon: "🌐"
    },
    { 
      src: screenshot10,
      alt: "Offline Mode", 
      title: "Offline-First",
      description: "No internet? No problem. Casha works 100% offline so your finances are always accessible.",
      icon: "📵"
    }
  ];

  const youtubeVideoId = "n9cVSe98Tvs";
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
              Your All-In-One Personal Finance App for iOS
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Complete Picture of <br />
              <span className="text-green-600"> Your Financial Life</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Casha combines expense tracking, income management, debt management, portfolio tracking, and smart budgeting into a single, beautifully designed ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="https://apps.apple.com/id/app/cashaapp/id6754607757"
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

              <a 
                href="https://play.google.com/store/apps/details?id=com.casha.app&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.21.8.22 1.18.02l12.93-7.46-2.79-2.79-11.32 10.23zM.54 1.07C.2 1.46 0 2.04 0 2.79v18.42c0 .75.2 1.33.55 1.72l.09.08 10.32-10.33v-.24L.63.99.54 1.07zM20.67 10.4l-2.76-1.6-3.11 3.11 3.11 3.11 2.78-1.6c.79-.46.79-1.57-.02-2.02zM4.36.22L17.29 7.68l-2.79 2.79L3.18.24C3.56.04 3.99.05 4.36.22z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="font-semibold text-lg">Google Play</div>
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
                <div className="text-2xl font-bold text-green-600">1-100</div>
                <div className="text-sm text-gray-600">Health Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">28+</div>
                <div className="text-sm text-gray-600">Asset Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Offline-First</div>
              </div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div id="features" className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                10 Core Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tap any module to see how Casha unifies your finances
              </p>
            </div>

            {/* Active Feature Description */}
            <div className="text-center mb-12 max-w-4xl mx-auto min-h-[120px]">
              <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full text-lg font-semibold mb-4 border border-green-100">
                <span className="text-2xl mr-3">{features[activeFeature].icon}</span>
                {features[activeFeature].title}
              </div>
              <p className="text-gray-700 text-xl leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>

            {/* Horizontal Screenshots Wrap */}
            <div className="flex justify-center flex-wrap gap-4 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`group relative transition-all duration-300 w-32 md:w-36 lg:w-40 ${
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
                    <div className="text-sm font-medium">{feature.title}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8 flex-wrap">
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