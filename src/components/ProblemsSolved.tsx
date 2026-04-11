import { Sparkles, LayoutDashboard, BrainCircuit, CreditCard, Activity, Target, WifiOff } from "lucide-react";

export default function ProblemsSolved() {
  const problems = [
    {
      problem: "I don't know where my money goes",
      solution: "Automatic categorization of every transaction + visual spending reports on a unified Dashboard.",
      icon: LayoutDashboard,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      problem: "Tracking expenses is too tedious",
      solution: "AI chat — just type or speak naturally. 'Makan siang 45rb' gets auto-parsed. Or simply scan a receipt.",
      icon: Sparkles,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      problem: "I keep overspending",
      solution: "Smart Budget module with real-time alerts + AI-powered recommendations based on your unique patterns.",
      icon: BrainCircuit,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      problem: "I have multiple debts and lose track",
      solution: "Liabilities module manages credit cards and loans, providing a payoff simulation for the fastest path to freedom.",
      icon: CreditCard,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      problem: "I don't have a clear financial picture",
      solution: "Dashboard unifies everything — income, expenses, debt, assets, goals, and health score — via our Cashflow Engine.",
      icon: Activity,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      problem: "I want to save but don't know how",
      solution: "Goal Tracker precisely linked to your portfolio assets, combined with AI recommendations to identify potential savings.",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      problem: "I can't use finance apps without internet",
      solution: "100% offline-first architecture. All data saves instantly and locally, seamlessly syncing when connected.",
      icon: WifiOff,
      color: "text-slate-600",
      bgColor: "bg-slate-100"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Problems We Solve</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why We Built Casha
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Personal finance is notoriously stressful. We set out to fix the biggest headaches standing between you and financial clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon className="w-7 h-7" />
              </div>
              <div className="mb-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">The Problem</span>
                <h4 className="text-xl font-bold text-gray-900 mt-1 leading-snug">
                  &quot;{item.problem}&quot;
                </h4>
              </div>
              <div className="pt-4 border-t border-gray-50">
                <span className="text-sm font-bold text-green-500 uppercase tracking-wider">The Solution</span>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
