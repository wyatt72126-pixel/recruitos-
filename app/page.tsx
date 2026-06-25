import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-600 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust line */}
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-6">
            Your monthly college recruiting assistant
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            Know Which Schools Fit.<br />
            Know Who to Contact.<br />
            Know What to Say.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto mb-4 leading-relaxed">
            Most athletes spend months emailing the wrong coaches at the wrong
            schools — and never hear back. RecruitOS gives you a clear plan:
            the right programs, verified coach contacts, and outreach emails
            written for you.
          </p>

          <p className="text-sm text-blue-300 mb-10">
            Every contact is pulled directly from the official athletic staff page — not guessed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-started"
              className="bg-white text-brand-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Get My Recruiting Plan →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-xl hover:border-white hover:bg-white/10 transition-colors text-lg"
            >
              See a Demo Profile
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            Here is Exactly What You Get
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            RecruitOS is not a profile builder. It is a monthly recruiting
            assistant that tells you who to contact, where to go, and what to say.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Your School List",
                desc: "We match you to 50 programs based on your sport, stats, GPA, and size preference — schools that are a realistic fit, not a wishlist.",
              },
              {
                step: "02",
                title: "Verified Coach Contacts",
                desc: "For your top 5 schools, we pull the actual coach emails and Twitter/X handles from the official athletic staff page. At least 3 contacts per school.",
              },
              {
                step: "03",
                title: "Outreach Written for You",
                desc: "Every coach contact comes with a personalized email you can copy and send. No writing from scratch. No wondering if it sounds right.",
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

      {/* Problem / Value Props */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The Recruiting Process Is Broken for Most Athletes
            </h2>
            <p className="text-gray-500 leading-relaxed">
              You do not know which schools are realistic. You do not know which
              coach handles recruiting for your position. And when you send a
              cold email, it goes nowhere. RecruitOS fixes all three.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "We Tell You Which Schools Fit",
                desc: "No guessing. We match you to 50 programs based on your actual profile — athletically and academically. Every school on your list is there for a reason.",
              },
              {
                icon: "📬",
                title: "Contacts Pulled From Official Staff Pages",
                desc: "We source every email and Twitter/X handle directly from the school's official athletic staff directory. If a contact is missing, we find a different coach on the same staff.",
              },
              {
                icon: "✉️",
                title: "Outreach Emails Ready to Copy",
                desc: "Each coach gets a personalized email written around your profile. Copy it, paste it, send it. No blank page.",
              },
              {
                icon: "🏕️",
                title: "Camp and Junior Day Alerts",
                desc: "We notify you when your matched schools host camps or junior days — the events where coaches actually evaluate recruits in person.",
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
          <h2 className="text-4xl font-black mb-4">
            Stop Emailing the Wrong Coaches.
          </h2>
          <p className="text-blue-200 mb-2 text-lg">
            Get your school list, your coach contacts, and your outreach emails — all in one place.
          </p>
          <p className="text-blue-400 text-sm mb-10">
            One-time payment. No subscription. No guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#pricing"
              className="bg-white text-brand-700 font-black px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors"
            >
              Get My Recruiting Plan →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/60 text-white font-semibold px-10 py-4 rounded-xl text-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              See a Demo Profile
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} RecruitOS. All rights reserved.</p>
      </footer>
    </main>
  );
}
