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

      {/* Why RecruitOS Is Different (Trust) */}
      <section className="py-20 px-4 bg-brand-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-3">
              Why RecruitOS Is Different
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              No Guessing. Just a Clear, Organized Plan.
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Most recruiting tools hand athletes a search bar and wish them
              luck. RecruitOS does the work that actually matters — telling you
              where to focus and giving you contact information you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "We don't let athletes guess",
                desc: "You won't be left scrolling through a giant list of schools hoping something sticks. We point you to programs worth your time.",
              },
              {
                title: "Recommendations based on real fit",
                desc: "Every school we recommend is matched on fit, level, location, academics, and opportunity — not just name recognition.",
              },
              {
                title: "Contacts from official staff pages",
                desc: "Coach emails and Twitter/X handles are pulled directly from each school's official athletic staff page.",
              },
              {
                title: "A backup when a contact is missing",
                desc: "If a coach's contact information isn't available, we use a different staff member from the same official page so you always have a way in.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-blue-300 text-sm mt-14 max-w-2xl border-t border-white/10 pt-6">
            RecruitOS organizes your outreach and gives you verified contact
            information. We don't guarantee scholarships or offers, and we don't
            claim a personal relationship with any coach — the decision to
            respond is always the coach's.
          </p>
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

      {/* For Parents */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">
                For Parents
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                Recruiting Without the Guessing
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-6">
                Recruiting gets confusing fast when a family doesn&apos;t know
                which schools fit, who to contact, or what to say. RecruitOS
                organizes the whole process into a clear monthly plan you can
                actually follow — together.
              </p>
              <a
                href="#how-it-works"
                className="inline-block bg-brand-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-brand-700 transition-colors"
              >
                See How It Works
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <ul className="space-y-5">
                {[
                  {
                    title: "Clear school recommendations",
                    desc: "A focused list of programs that fit your athlete — not a wall of names to sort through.",
                  },
                  {
                    title: "Verified coach contacts",
                    desc: "Coach contact information drawn from official athletic staff pages.",
                  },
                  {
                    title: "Ready-to-send outreach emails",
                    desc: "Drafted emails your athlete can review and send — no blank page, no guesswork.",
                  },
                  {
                    title: "Monthly updates",
                    desc: "New opportunities, camps, and next steps delivered every month.",
                  },
                  {
                    title: "A simple plan families understand",
                    desc: "One organized process you can follow from start to finish, together.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mb-14 max-w-xl mx-auto">
            Start with a free demo profile, or get the full recruiting plan with Premium.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto text-left">
            {/* Free Demo Profile */}
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
                {[
                  "Athlete profile preview",
                  "Example school recommendations",
                  "Sample coach contact layout",
                  "Sample outreach email format",
                ].map((item) => (
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

            {/* RecruitOS Premium */}
            <div className="relative flex flex-col rounded-3xl bg-brand-700 text-white p-8 md:p-10 shadow-xl ring-2 ring-brand-500 md:scale-[1.03]">
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
                {[
                  "50 personalized school matches",
                  "Verified coach emails and Twitter/X contacts",
                  "5 priority schools with at least 3 coach contacts each",
                  "Copy-and-paste outreach emails",
                  "Camp and junior day opportunity updates",
                  "Monthly recruiting strategy updates",
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
                className="block w-full text-center bg-white text-brand-700 font-black text-lg py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Start Premium Plan →
              </Link>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            Cancel anytime. RecruitOS helps you reach coaches — it does not guarantee offers or scholarships.
          </p>
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
            $20/month. Cancel anytime. No guesswork.
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
