import { ArrowRight, Link as LinkIcon, Smartphone, LineChart, Shield, LayoutDashboard } from "lucide-react";

export default function WhyCasha() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Why Casha?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Complete Picture. Connected.
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most finance apps do one thing well but ignore the rest. Casha gives you something no other app does: your entire financial life connected in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Comparison */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">The Setup Most People Have</h4>
            
            <ul className="space-y-6">
              <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-red-50">
                <div className="text-2xl">📱</div>
                <div>
                  <h5 className="font-bold text-gray-900">App A: Tracks Expenses</h5>
                  <p className="text-gray-500 text-sm mt-1">...but ignores your debt completely.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-red-50">
                <div className="text-2xl">📈</div>
                <div>
                  <h5 className="font-bold text-gray-900">App B: Tracks Investments</h5>
                  <p className="text-gray-500 text-sm mt-1">...but has no idea about your daily spending.</p>
                </div>
              </li>
              <li className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-red-50">
                <div className="text-2xl">📊</div>
                <div>
                  <h5 className="font-bold text-gray-900">App C: Helps with Budgets</h5>
                  <p className="text-gray-500 text-sm mt-1">...but can&apos;t see your income patterns.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Casha connection diagram */}
          <div className="relative">
            <h4 className="text-2xl font-bold text-green-600 mb-8 text-center lg:text-left">How Casha Connects Everything</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-gray-900 w-28 shrink-0">Your Income</span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">feeds your <strong className="text-green-600">Portfolio</strong></span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">grows toward <strong className="text-green-600">Goals</strong></span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-gray-900 w-28 shrink-0">Expenses</span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">tracked against <strong className="text-green-600">Budget</strong></span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">optimized by <strong className="text-green-600">AI</strong></span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="font-bold text-gray-900 w-28 shrink-0">Your Debt</span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">managed with <strong className="text-red-500">Payments</strong></span>
                <ArrowRight className="text-green-500 w-5 h-5 shrink-0" />
                <span className="text-gray-600">improves <strong className="text-blue-500">Health Score</strong></span>
              </div>

              <div className="flex items-center justify-center p-6 bg-green-50 rounded-2xl border border-green-100 border-dashed mt-6">
                <LayoutDashboard className="w-8 h-8 text-green-600 mr-4" />
                <span className="font-bold text-xl text-gray-900">Everything visible on Dashboard</span>
              </div>
            </div>
            
            <div className="absolute -z-10 bg-green-50 w-full h-full rounded-full blur-[100px] top-0 left-0 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
