import { Download, Zap, BrainCircuit, ShieldCheck, LineChart, WifiOff } from "lucide-react";

export default function CTASection() {
  const reasons = [
    { icon: Zap, title: "🚀 Takes 5 seconds to track a transaction", desc: "Chat AI: just type 'Makan 50rb' — done." },
    { icon: BrainCircuit, title: "🧠 Smarter than a spreadsheet", desc: "AI analyzes spending and recommends optimal budgets automatically." },
    { icon: ShieldCheck, title: "💳 Helps you get out of debt faster", desc: "Credit card statement tracking + payoff simulation = clear debt-free timeline." },
    { icon: LineChart, title: "📈 Shows your true net worth", desc: "Portfolio (assets) minus Liabilities (debt) = your true position, in real-time." },
    { icon: WifiOff, title: "🔒 Works without internet", desc: "Saved locally first. No connectivity? Everything syncs when online." }
  ];

  return (
    <section className="py-24 bg-green-50 border-t border-green-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Should I Download Casha Today?
            </h2>
            <p className="text-xl text-gray-600 mb-8 italic border-l-4 border-green-500 pl-4 py-2">
              If you&apos;ve ever wondered &quot;Where did my money go?&quot; — Casha is the answer.
            </p>
            
            <div className="space-y-6 mb-12">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-200 text-green-700 flex items-center justify-center shrink-0 mt-1">
                    <reason.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{reason.title}</h4>
                    <p className="text-gray-600 mt-1">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/id/app/cashaapp/id6754607757"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              >
                <Download className="w-6 h-6" />
                <div className="text-left leading-tight">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="font-semibold text-lg">App Store</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-20"></div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">The Bottom Line</h3>
              
              <div className="text-7xl mb-6 relative z-10">🏆</div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8 relative z-10 lg:px-8">
                Download it. Track everything. Watch your financial health score climb from 
                <span className="font-bold text-red-500"> Survival</span> → 
                <span className="font-bold text-yellow-500"> Stability</span> → 
                <span className="font-bold text-blue-500"> Security</span> → 
                <span className="font-bold text-green-500"> Freedom</span>!
              </p>
              
              <a 
                href="https://apps.apple.com/id/app/cashaapp/id6754607757"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full transition-colors relative z-10 shadow-lg shadow-green-200"
              >
                Start Your Journey Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}