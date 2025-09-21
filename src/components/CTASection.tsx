import { ArrowRight, Shield, Zap, Globe, TrendingUp } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Life?
          </h2>
          
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join 5 million Casha users who have saved over $2 billion by taking control of their money and reaching their financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              Start Saving Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              See Premium Features
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bank-Level Security</h3>
                <p className="text-green-100 text-sm">256-bit encryption protects your financial data</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Instant Sync</h3>
                <p className="text-green-100 text-sm">Real-time updates across all your devices</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Smart Insights</h3>
                <p className="text-green-100 text-sm">AI-powered recommendations to grow your wealth</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Multi-Currency</h3>
                <p className="text-green-100 text-sm">Track finances in 150+ global currencies</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-green-100">
            <div className="text-sm">As featured in:</div>
            <div className="flex gap-6 opacity-75">
              <div className="h-8 w-24 bg-white rounded"></div>
              <div className="h-8 w-24 bg-white rounded"></div>
              <div className="h-8 w-24 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}