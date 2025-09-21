import { Wallet, PieChart, Target, Bell, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    description: "Track your spending across multiple categories and see where your money goes each month.",
    color: "green"
  },
  {
    icon: PieChart,
    title: "Budget Planning",
    description: "Create custom budgets and get alerts when you're approaching your spending limits.",
    color: "green"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set financial goals and track your progress towards saving for important milestones.",
    color: "green"
  },
  {
    icon: Bell,
    title: "Bill Reminders",
    description: "Never miss a payment with smart bill reminders and due date notifications.",
    color: "green"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level security ensures your financial data remains safe and confidential.",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Reports & Analytics",
    description: "Generate detailed reports and visualize your financial health with beautiful charts.",
    color: "green"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Everything You Need to Master Your Money
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Powerful features designed to help you understand, manage, and grow your wealth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-green-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}