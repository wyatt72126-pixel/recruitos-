import Link from "next/link";

const FREE_FEATURES = [
  "Athlete profile preview",
  "Example school recommendations",
  "Sample coach contact layout",
  "Sample outreach email format",
];

const STARTER_FEATURES = [
  "20 school matches",
  "Verified coach emails and Twitter/X contacts",
  "3 priority schools with 2 coach contacts each",
  "Copy-and-paste outreach emails",
  "Monthly recruiting updates",
];

const PREMIUM_FEATURES = [
  "50 personalized school matches",
  "Verified coach emails and Twitter/X contacts",
  "5 priority schools with 3+ coach contacts each",
  "Copy-and-paste outreach emails",
  "Camp and junior day opportunity updates",
  "Monthly recruiting strategy updates",
];

const FAQ = [
  {
    q: "What's the difference between Starter and Premium?",
    a: "Starter gives you 20 school matches and 3 priority schools with 2 verified coach contacts each — a solid starting point. Premium expands that to 50 school matches, 5 priority schools with 3+ contacts each, and adds camp/junior day alerts and a deeper monthly strategy update.",
  },
  {
    q: "What does RecruitOS actually deliver?",
    a: "A list of school matches, verified coach contacts for your priority schools (pulled from official athletic staff pages), personalized outreach email templates, and monthly recruiting updates. Starter and Premium differ in volume and depth — see the plan comparison above.",
  },
  {
    q: "Does RecruitOS guarantee a scholarship or offer?",
    a: "No. RecruitOS organizes your outreach and gives you verified contact information. The decision to respond is always the coach's. We do not promise scholarships, offers, or coach relationships.",
  },
  {
    q: "How are coach contacts verified?",
    a: "Every email and Twitter/X handle is sourced directly from the school's official athletic staff page. If a contact is unavailable, we substitute a different staff member from the same page.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Both plans are month-to-month with no contracts. You can cancel at any time.",
  },
  {
    q: "Is the Free Demo Profile really free?",
    a: "Yes. The demo shows you exactly what a RecruitOS profile looks like — sample school recommendations, sample coach contact layout, and a sample outreach email — before you commit to any plan.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14 sm:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">
            Pricing
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-500 text-lg">
            Start with the free demo, pick a plan when you&apos;re ready.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 sm:py-20 px-4">
        <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto text-left">

          {/* Free Demo */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Free Demo
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-black text-gray-900">$0</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              See what a RecruitOS profile looks like before you commit.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {FREE_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/demo"
              className="block w-full text-center bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors"
            >
              View Demo Profile
            </Link>
          </div>

          {/* Starter */}
          <div className="flex flex-col rounded-3xl border border-brand-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-2">
              Starter
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-black text-gray-900">$9</span>
              <span className="text-gray-400 font-medium">.99<span className="text-sm">/mo</span></span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              A real recruiting plan to get you started reaching out.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {STARTER_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full text-center bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-colors"
            >
              Start Starter Plan →
            </Link>
          </div>

          {/* Premium */}
          <div className="relative flex flex-col rounded-3xl bg-brand-700 text-white p-8 shadow-xl ring-2 ring-brand-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-green-400 text-brand-900 text-xs font-black uppercase tracking-wide px-4 py-1.5 rounded-full shadow">
                Best for serious recruits
              </span>
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2 mt-2">
              Premium
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-black">$20</span>
              <span className="text-blue-200 font-medium text-sm">/mo</span>
            </div>
            <p className="text-blue-100 text-sm mb-6">
              The full plan — more matches, more contacts, more depth.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {PREMIUM_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full text-center bg-white text-brand-700 font-black py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Start Premium Plan →
            </Link>
          </div>
        </div>

        {/* Compare note */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-1">Both plans are month-to-month. Cancel anytime.</p>
          <p className="text-gray-400 text-xs leading-relaxed mt-3">
            RecruitOS provides recruiting organization, school research, coach
            contact information, and outreach support. RecruitOS does not
            guarantee scholarships, roster spots, offers, coach responses, or
            admission to any school.
          </p>
        </div>
      </section>

      {/* Plan comparison table */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black text-gray-900 mb-6 text-center">Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-semibold w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-semibold">Starter</th>
                  <th className="text-center py-3 px-4 text-brand-600 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["School matches", "20", "50"],
                  ["Priority schools", "3", "5"],
                  ["Coach contacts per school", "2", "3+"],
                  ["Verified contacts from official pages", "✓", "✓"],
                  ["Copy-and-paste outreach emails", "✓", "✓"],
                  ["Camp & junior day alerts", "—", "✓"],
                  ["Monthly strategy updates", "Basic", "Full"],
                ].map(([feature, starter, premium]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-4 text-gray-700">{feature}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{starter}</td>
                    <td className="py-3 px-4 text-center font-semibold text-brand-700">{premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-gray-200">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
