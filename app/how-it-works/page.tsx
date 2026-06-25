import Link from "next/link";

const STEPS = [
  {
    step: "Step 01",
    title: "Build your athlete profile",
    desc: "Enter your position, class year, GPA, stats, film link, location, and recruiting goals. The profile takes about five minutes to complete and is the foundation we use to build your match list.",
    details: [
      "Position and sport",
      "Graduation year and GPA",
      "Key stats and film link",
      "Location and preferred school size",
      "Academic and athletic goals",
    ],
  },
  {
    step: "Step 02",
    title: "Receive your school matches and verified contacts",
    desc: "RecruitOS generates a list of 50 programs that fit your profile — matched on fit, level, location, academics, and realistic opportunity. For your top 5 priority schools, we pull verified coach contacts directly from each school's official athletic staff page.",
    details: [
      "50 personalized school matches",
      "5 priority schools with 3+ verified coach contacts each",
      "Coach emails and Twitter/X handles from official staff pages",
      "A backup contact is used if a primary contact is unavailable",
      "Match score and fit summary for each school",
    ],
  },
  {
    step: "Step 03",
    title: "Send outreach using ready-made email templates",
    desc: "Every coach contact comes with a personalized email template written around your profile. Copy it, review it, and send it. No blank page. No wondering if it sounds right.",
    details: [
      "One personalized email per coach contact",
      "Written around your stats, position, and goals",
      "Copy with one click",
      "Easily personalized before sending",
    ],
  },
  {
    step: "Step 04",
    title: "Stay updated with monthly recruiting information",
    desc: "Each month you receive updated school opportunities, camp and junior day alerts at your matched schools, and a fresh recruiting strategy update.",
    details: [
      "Monthly school and opportunity updates",
      "Camp and junior day alerts for matched schools",
      "Recruiting strategy guidance",
      "Contact refresh when staff pages are updated",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">
            How It Works
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            From Profile to Coach Contacts in Four Steps
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            RecruitOS is not a search tool. It takes your profile and turns it
            into a clear monthly recruiting plan — school matches, verified
            coach contacts, and outreach you can send.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="p-7 sm:p-9 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-3 block">
                  {item.step}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="bg-gray-50 px-7 sm:px-9 py-5">
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-4 bg-brand-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-3">Ready to build your plan?</h2>
          <p className="text-blue-200 mb-8">
            Start with the free demo profile to see the full layout, or go
            straight to Premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-white text-brand-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              Start Premium Plan →
            </Link>
            <Link href="/demo" className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-colors">
              View Demo Profile
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
