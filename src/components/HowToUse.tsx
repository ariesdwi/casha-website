import { Download, UserPlus, Globe, Play, Clock, Coffee, DollarSign, Calendar, TrendingUp, CheckCircle2 } from "lucide-react";

export default function HowToUse() {
  const gettingStartedSteps = [
    { icon: Download, title: "Download", desc: "Get Casha from the App Store" },
    { icon: UserPlus, title: "Sign Up", desc: "Log in with Apple, Google, or Email" },
    { icon: Globe, title: "Setup", desc: "Set your currency (auto-detected)" },
    { icon: Play, title: "Start", desc: "Tap '+' or use Chat AI" },
  ];

  const dailyUsage = [
    { time: "Morning", action: "☕ 'Kopi 25rb' → Chat AI adds expense", color: "bg-orange-100 text-orange-600" },
    { time: "Afternoon", action: "💰 Salary notification → Income auto-logged", color: "bg-green-100 text-green-600" },
    { time: "Evening", action: "📊 Check Dashboard → Review daily spending", color: "bg-blue-100 text-blue-600" },
    { time: "Weekly", action: "📋 Check Reports → Understand patterns", color: "bg-purple-100 text-purple-600" },
    { time: "Monthly", action: "🎯 Review Goals → Track progress", color: "bg-rose-100 text-rose-600" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">How to Use Casha</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Setup in Minutes, Master for Life
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We built Casha so you can spend less time managing your money and more time enjoying it. It literally takes 5 seconds to log a transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Getting Started */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Getting Started (2 mins)</h4>
            <div className="space-y-6">
              {gettingStartedSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-100 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-green-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900">{step.title}</h5>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Key Actions
              </h5>
              <ul className="space-y-3 text-gray-600">
                <li><strong className="text-gray-900">Add expense:</strong> Chat AI, &quot;+&quot; button, or receipt scan</li>
                <li><strong className="text-gray-900">Add income:</strong> Chat AI or Income module</li>
                <li><strong className="text-gray-900">Pay credit card:</strong> Chat AI (&quot;Bayar BCA 5jt&quot;) or Liabilities</li>
                <li><strong className="text-gray-900">Check budget:</strong> Dashboard Budget section (auto-alerts)</li>
              </ul>
            </div>
          </div>

          {/* Daily Usage */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Daily Usage At A Glance</h4>
            <div className="relative border-l-2 border-gray-100 ml-6 space-y-8 pb-4">
              {dailyUsage.map((usage, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className={`absolute -left-3.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-4 border-white ${usage.color}`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-current"></div>
                  </div>
                  <div className="bg-white border text-left border-gray-100 shadow-sm rounded-2xl p-5 hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{usage.time}</span>
                    <p className="text-lg font-medium text-gray-900 mt-2">{usage.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
