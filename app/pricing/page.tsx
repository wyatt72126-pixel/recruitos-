import Link from "next/link";

const FREE_FEATURES = [
  "Athlete profile preview",
  "Example school recommendations",
  "Sample coach contact layout",
  "Sample outreach email format",
];

const PREMIUM_FEATURES = [
  "50 personalized school matches",
  "Verified coach emails and Twitter/X contacts",
  "5 priority schools with at least 3 coach contacts each",
  "Copy-and-paste outreach emails",
  "Camp and junior day opportunity updates",
  "Monthly recruiting strategy updates",
];

const FAQ = [
  {
    q: "What does RecruitOS actually deliver?",
    a: "A list of 50 school matches, verified coach contacts for your top 5 schools (pulled from official athletic staff pages), personalized outreach email templates, and monthly recruiting updates.",
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
    a: "Yes. Premium is $20/month with no contracts. You can cancel at any time.",
  },
  {
    q: "Is the Free Demo Profile really free?",
    a: "Yes. The demo shows you exactly what a RecruitOS profile looks like — with sample school recommendations, sample coach contact layout, and a sample outreach email — before you commit to Premium.",
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
            Start with the free demo, or go straight to Premium.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 sm:py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto text-left">
          {/* Free */}
          <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
              Free Demo Profile
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-black text-gray-900">$0</span>
            </div>
            <p className="text-gray-500 mb-8">
              See exactly what a RecruitOS profile looks like before you commit.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {FREE_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/demo"
              className="block w-full text-center bg-gray-900 text-white font-bold text-lg py-4 rounded-xl hover:bg-gray-800 transition-colors"
            >
              View Demo Profile
            </Link>
          </div>

          {/* Premium */}
          <div className="relative flex flex-col rounded-3xl bg-brand-700 text-white p-8 md:p-10 shadow-xl ring-2 ring-brand-500 mt-6 md:mt-0 md:scale-[1.03]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-green-400 text-brand-900 text-xs font-black uppercase tracking-wide px-4 py-1.5 rounded-full shadow">
                Best for serious recruits
              </span>
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2 mt-2">
              RecruitOS Premium
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-black">$20</span>
              <span className="text-blue-200 font-medium">/month</span>
            </div>
            <p className="text-blue-100 mb-8">
              A real recruiting plan for athletes who are ready to reach out.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {PREMIUM_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full text-center bg-white text-brand-700 font-black text-lg py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Start Premium Plan →
            </Link>
          </div>
        </div>

        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-medium mb-2">Cancel anytime.</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            RecruitOS provides recruiting organization, school research, coach
            contact information, and outreach support. RecruitOS does not
            guarantee scholarships, roster spots, offers, coach responses, or
            admission to any school.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="py-6">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
