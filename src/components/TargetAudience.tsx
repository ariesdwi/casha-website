import { Briefcase, Laptop, Store, GraduationCap, Users, TrendingUp, CreditCard } from "lucide-react";

export default function TargetAudience() {
  const audiences = [
    { type: "Working Professionals", desc: "Track salary, daily expenses, credit card spending", icon: Briefcase },
    { type: "Freelancers", desc: "Multiple income streams, variable expenses, invoice tracking", icon: Laptop },
    { type: "Business Owners", desc: "Business vs personal expense separation", icon: Store },
    { type: "Students", desc: "Budget management, savings goals", icon: GraduationCap },
    { type: "Young Families", desc: "Household budgeting, debt management, saving for milestones", icon: Users },
    { type: "Investors", desc: "Portfolio tracking (28 asset types), income from investments", icon: TrendingUp },
    { type: "Debt Managers", desc: "Credit card optimization, loan payoff planning", icon: CreditCard },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">Who Will Use Casha?</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Designed for anyone who earns and spends
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {audiences.map((aud, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center hover:border-green-300 transition-colors">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <aud.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{aud.type}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{aud.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Highly Recommended For</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-lg">!</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">People who struggle to save</h4>
                  <p className="text-gray-600 mt-1">AI recommendations + budget alerts help build discipline</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold text-lg">!</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">People with multiple debts</h4>
                  <p className="text-gray-600 mt-1">Liability module with payoff simulation shows fastest path out</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 font-bold text-lg">?</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">People who find tracking tedious</h4>
                  <p className="text-gray-600 mt-1">Chat AI reduces input to 5 seconds</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 font-bold text-lg">?</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">People wanting to invest wisely</h4>
                  <p className="text-gray-600 mt-1">Portfolio linked to income + goals shows the full picture</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0 font-bold text-lg">?</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">People with financial goals</h4>
                  <p className="text-gray-600 mt-1">Goal tracker with asset linking and progress visualization</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 font-bold text-lg">✓</div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Anyone wanting financial clarity</h4>
                  <p className="text-gray-600 mt-1">Dashboard + Health Score = instant comprehensive understanding</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-4 bg-gray-50 rounded-xl text-center text-sm text-gray-500">
            Note: Not ideal for Enterprise/business accounting or Shared/family budgeting (currently single-user).
          </div>
        </div>
      </div>
    </section>
  );
}
