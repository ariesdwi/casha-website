import { Globe, WifiOff, Smartphone, Languages, Check } from "lucide-react";

const languages = [
  { flag: "🇺🇸", name: "English", code: "en" },
  { flag: "🇮🇩", name: "Bahasa Indonesia", code: "id" },
  { flag: "🇸🇦", name: "Arabic", code: "ar" },
  { flag: "🇩🇪", name: "German", code: "de" },
  { flag: "🇪🇸", name: "Spanish", code: "es" },
  { flag: "🇫🇷", name: "French", code: "fr" },
  { flag: "🇮🇳", name: "Hindi", code: "hi" },
  { flag: "🇯🇵", name: "Japanese", code: "ja" },
  { flag: "🇰🇷", name: "Korean", code: "ko" },
  { flag: "🇵🇹", name: "Portuguese", code: "pt" },
  { flag: "🇧🇷", name: "Portuguese (Brazil)", code: "pt-BR" },
];

const currencyRegions = [
  {
    region: "🌏 ASEAN",
    currencies: [
      { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp" },
      { name: "Singapore Dollar", code: "SGD", symbol: "S$" },
      { name: "Malaysian Ringgit", code: "MYR", symbol: "RM" },
      { name: "Vietnamese Dong", code: "VND", symbol: "₫" },
      { name: "Thai Baht", code: "THB", symbol: "฿" },
      { name: "Philippine Peso", code: "PHP", symbol: "₱" },
      { name: "Brunei Dollar", code: "BND", symbol: "B$" },
      { name: "Cambodian Riel", code: "KHR", symbol: "៛" },
      { name: "Lao Kip", code: "LAK", symbol: "₭" },
      { name: "Myanmar Kyat", code: "MMK", symbol: "Ks" },
      { name: "US Dollar (East Timor)", code: "USD", symbol: "$" },
    ]
  },
  {
    region: "🌏 Asia",
    currencies: [
      { name: "Chinese Yuan", code: "CNY", symbol: "¥" },
      { name: "Japanese Yen", code: "JPY", symbol: "¥" },
      { name: "South Korean Won", code: "KRW", symbol: "₩" },
      { name: "Indian Rupee", code: "INR", symbol: "₹" },
      { name: "Bangladeshi Taka", code: "BDT", symbol: "৳" },
      { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
      { name: "Sri Lankan Rupee", code: "LKR", symbol: "Rs" },
      { name: "Nepalese Rupee", code: "NPR", symbol: "₨" },
    ]
  },
  {
    region: "🌍 Middle East",
    currencies: [
      { name: "Saudi Riyal", code: "SAR", symbol: "﷼" },
      { name: "UAE Dirham", code: "AED", symbol: "د.إ" },
      { name: "Qatari Riyal", code: "QAR", symbol: "﷼" },
      { name: "Kuwaiti Dinar", code: "KWD", symbol: "د.ك" },
      { name: "Omani Rial", code: "OMR", symbol: "﷼" },
      { name: "Bahraini Dinar", code: "BHD", symbol: "د.ب" },
    ]
  },
  {
    region: "🌎 Americas",
    currencies: [
      { name: "US Dollar", code: "USD", symbol: "$" },
      { name: "Canadian Dollar", code: "CAD", symbol: "C$" },
      { name: "Brazilian Real", code: "BRL", symbol: "R$" },
      { name: "Mexican Peso", code: "MXN", symbol: "$" },
      { name: "Argentine Peso", code: "ARS", symbol: "$" },
    ]
  },
  {
    region: "🌍 Europe",
    currencies: [
      { name: "Euro", code: "EUR", symbol: "€" },
      { name: "British Pound", code: "GBP", symbol: "£" },
      { name: "Swiss Franc", code: "CHF", symbol: "CHF" },
      { name: "Swedish Krona", code: "SEK", symbol: "kr" },
      { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
      { name: "Danish Krone", code: "DKK", symbol: "kr" },
      { name: "Russian Ruble", code: "RUB", symbol: "₽" },
      { name: "Turkish Lira", code: "TRY", symbol: "₺" },
    ]
  },
  {
    region: "🌏 Oceania & Africa",
    currencies: [
      { name: "Australian Dollar", code: "AUD", symbol: "A$" },
      { name: "New Zealand Dollar", code: "NZD", symbol: "NZ$" },
      { name: "South African Rand", code: "ZAR", symbol: "R" },
      { name: "Egyptian Pound", code: "EGP", symbol: "£" },
      { name: "Nigerian Naira", code: "NGN", symbol: "₦" },
      { name: "Kenyan Shilling", code: "KES", symbol: "KSh" },
      { name: "Ghanaian Cedi", code: "GHS", symbol: "₵" },
    ]
  },
];

export default function CashaCapabilities() {
  return (
    <section className="py-24 bg-green-900 text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-green-400 uppercase mb-3">Flexibility & Global Support</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Track Anywhere, Anytime
          </h3>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Casha works everywhere — auto-detected language, 44 currencies across 6 regions, and 100% offline-first.
          </p>
        </div>

        {/* Platform */}
        <div className="bg-green-800/50 backdrop-blur-sm border border-green-700/50 rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-green-300" />
            </div>
            <h4 className="text-2xl font-bold">Platform</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "iPhone (iOS 16+)", badge: null },
              { label: "iPad Compatible", badge: null },
              { label: "Full Offline Mode", badge: "100% Offline-First" },
              { label: "Cloud Sync", badge: null },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-green-800/40 rounded-xl px-4 py-3 border border-green-700/50">
                <span className="text-sm">{item.label}</span>
                {item.badge
                  ? <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-2 whitespace-nowrap">{item.badge}</span>
                  : <Check className="text-green-400 w-4 h-4 shrink-0 ml-2" />
                }
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Languages */}
          <div className="bg-green-800/50 backdrop-blur-sm border border-green-700/50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
                <Languages className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">11 Languages</h4>
                <p className="text-green-300 text-sm mt-0.5">Auto-detected from device system language</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center gap-3 bg-green-800/40 border border-green-700/40 rounded-xl px-4 py-2.5">
                  <span className="text-xl">{lang.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{lang.name}</div>
                    <div className="text-xs text-green-400">{lang.code}</div>
                  </div>
                  <Check className="text-green-400 w-4 h-4 shrink-0" />
                </div>
              ))}
            </div>
            <p className="text-green-200 text-sm mt-4 text-center">
              All 14 modules fully translated. The AI Chat understands every language natively.
            </p>
          </div>

          {/* Currencies */}
          <div className="bg-green-800/50 backdrop-blur-sm border border-green-700/50 rounded-3xl p-8 overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-xl flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <h4 className="text-2xl font-bold">44 Currencies</h4>
                <p className="text-green-300 text-sm mt-0.5">Across 6 global regions, with a searchable picker</p>
              </div>
            </div>

            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
              {currencyRegions.map((region, ri) => (
                <div key={ri}>
                  <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">{region.region}</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {region.currencies.map((cur, ci) => (
                      <div key={ci} className="flex items-center justify-between bg-green-800/40 border border-green-700/40 rounded-lg px-3 py-1.5">
                        <span className="text-sm font-medium text-green-100">{cur.code}</span>
                        <span className="text-xs text-green-400 font-mono">{cur.symbol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-green-800/50 border border-green-700 rounded-full px-6 py-3 text-sm font-medium text-green-100">
            <WifiOff className="w-4 h-4 mr-2" />
            No internet? No problem. Everything syncs when you&apos;re back online automatically.
          </div>
        </div>
      </div>
    </section>
  );
}
