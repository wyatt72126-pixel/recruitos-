import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-600 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow / positioning */}
          <p className="inline-block text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            Your monthly recruiting assistant — not just a profile page
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
            The Right Schools.<br />
            The Right Coaches.<br />
            The Right Email.
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto mb-4 leading-relaxed">
            Most athletes don&apos;t know which schools actually fit them, which
            coaches to contact, or what to say. RecruitOS gives you a clear
            recruiting plan, verified coach contacts, and outreach you can send today.
          </p>

          {/* Trust subheadline */}
          <p className="text-sm font-medium text-blue-200 mb-10">
            Every contact is pulled straight from the official athletic staff page — verified, never guessed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#get-started"
              className="bg-white text-brand-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Build My Recruiting Plan →
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
            How RecruitOS Works
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Three steps from where you are now to coaches reading your email.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "Step 01",
                title: "Build the athlete profile",
                desc: "Enter your position, class, GPA, film, stats, location, and recruiting goals. This is the foundation we match against.",
              },
              {
                step: "Step 02",
                title: "Get school matches and verified contacts",
                desc: "RecruitOS recommends schools that fit you and provides verified coach emails and Twitter/X contacts pulled from official staff pages.",
              },
              {
                step: "Step 03",
                title: "Send better outreach",
                desc: "Get ready-to-send email templates and a clear plan for contacting coaches — so your first impression actually lands.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link
              href="/#get-started"
              className="bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-700 transition-colors text-center"
            >
              Start Recruiting Plan →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
            >
              View Demo Profile
            </Link>
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
