import { Check, Crown, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with essential money tracking tools",
    features: [
      "Set 1 budget",
      "View weekly, monthly & yearly reports",
      "Track total spending per category",
      "Take photos of receipts",
      "Community support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium Monthly",
    price: "$4.99",
    period: "per month",
    description: "Unlock full features for smarter financial management",
    features: [
      "Unlimited budgets",
      "Weekly, monthly & yearly reports",
      "Track total spending per category",
      "Take photos of receipts",
      "AI-assisted transaction insights",
      "Ad-free experience",
      "Priority support"
    ],
    cta: "Subscribe Monthly",
    popular: true
  },
  {
    name: "Premium One-Time",
    price: "$99",
    period: "one-time",
    description: "Unlock all features forever with a single payment",
    features: [
      "All Premium Monthly features",
      "Lifetime access",
      "All future updates included"
    ],
    cta: "Unlock Forever",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free or upgrade to Premium to unlock smarter money tracking, AI insights, and full control over your finances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-2xl transform scale-105 z-10"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Crown className="w-4 h-4" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-gray-900"} mb-2`}>
                  {plan.name}
                </h3>
                <div className="flex items-end mb-2">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-lg ${plan.popular ? "text-green-100" : "text-gray-600"}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-lg ${plan.popular ? "text-green-100" : "text-gray-600"} mt-2`}>
                  {plan.description}
                </p>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`rounded-full p-1 mt-1 ${plan.popular ? "bg-green-500" : "bg-green-100"}`}>
                        <Check className={`w-4 h-4 ${plan.popular ? "text-white" : "text-green-600"}`} />
                      </div>
                      <span className={plan.popular ? "text-green-50" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-green-600 hover:bg-gray-100 hover:shadow-lg"
                    : "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            All plans include secure data encryption and regular backups. 
            <span className="text-green-600 font-medium"> 30-day money-back guarantee</span> on Premium plans.
          </p>
        </div>
      </div>
    </section>
  );
}