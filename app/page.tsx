import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            We Find Your Schools.<br />You Focus on the Game.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            RecruitOS analyzes your film, stats, and academic profile — then
            gives you a personalized list of college matches with the exact
            coach contacts to reach them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              See a Demo Profile
            </Link>
            <Link
              href="/#get-started"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-brand-700 transition-colors text-lg"
            >
              Get My Matches
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            How RecruitOS Works
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            No guesswork. No cold searching. We do the legwork so you show up prepared.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Submit Your Profile",
                desc: "Share your stats, GPA, film link, and position. Takes 5 minutes.",
              },
              {
                step: "02",
                title: "We Build Your List",
                desc: "Our team identifies 50 college programs that match your level, size preference, and academic needs.",
              },
              {
                step: "03",
                title: "You Get Verified Contacts",
                desc: "For your top 5 matches, we deliver real coach emails and Twitter/X handles — pulled directly from official athletic staff pages.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <span className="text-5xl font-black text-brand-100 leading-none">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-14">
            Why Athletes Choose RecruitOS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "We Recommend the Schools",
                desc: "Athletes don't pick blindly off a list. We analyze fit and surface programs that are realistically within reach and worth your time.",
              },
              {
                icon: "📬",
                title: "Verified Coach Contacts",
                desc: "Every email and Twitter/X handle is sourced from the school's official athletic staff directory — not guessed, not scraped.",
              },
              {
                icon: "✉️",
                title: "Ready-to-Send Emails",
                desc: "Each coach contact comes with a personalized outreach email you can copy and send immediately.",
              },
              {
                icon: "🏕️",
                title: "Camp & Event Alerts",
                desc: "Premium members get notified about camps, junior days, and recruiting opportunities at their matched schools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mb-14">
            One plan. Everything you need to get recruited.
          </p>
          <div className="bg-brand-700 text-white rounded-3xl p-10 md:p-14 shadow-xl max-w-xl mx-auto">
            <div className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-2">
              Premium Edition
            </div>
            <div className="text-6xl font-black mb-2">$97</div>
            <div className="text-blue-200 mb-8">one-time payment</div>
            <ul className="text-left space-y-4 mb-10">
              {[
                "50 personalized school matches",
                "Verified coach contacts for your top 5 schools (3+ coaches each)",
                "Real emails & Twitter/X from official staff pages",
                "Personalized outreach email for every coach",
                "Recruiting camp & junior day alerts",
                "Coach contact strategy guide",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/#get-started"
              className="block w-full bg-white text-brand-700 font-black text-lg py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get My Matches →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="py-20 px-4 bg-brand-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Ready to Get Recruited?</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Join athletes who stopped guessing and started getting responses.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-white text-brand-700 font-black px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors"
          >
            See a Demo Profile First →
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} RecruitOS. All rights reserved.</p>
      </footer>
    </main>
  );
}
