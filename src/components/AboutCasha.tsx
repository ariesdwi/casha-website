import { Target, Eye, ShieldCheck, Zap } from "lucide-react";

export default function AboutCasha() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">About Casha</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Complete Financial Ecosystem
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlike simple expense trackers, Casha is an <strong>all-in-one personal finance app</strong> for iOS that gives you a unified view of your entire financial life. Every feature talks to each other perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-green-50 rounded-3xl p-10 md:p-14 border border-green-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Casha exists to solve one fundamental problem: <strong>people don&apos;t know where their money goes.</strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our purpose is to give every user a clear, real-time picture of their financial health. Not just spending, but the full story: income, expenses, debt, assets, and goals — all in one beautifully designed place.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Empower individuals to achieve financial freedom through intelligent money tracking and actionable, AI-powered insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A world where absolutely everyone has full visibility, understanding, and control over their personal finances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
