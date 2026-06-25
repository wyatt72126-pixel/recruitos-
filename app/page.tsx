import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-600 text-white py-16 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow / positioning */}
          <p className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-200 bg-white/10 border border-white/20 rounded-full px-3 sm:px-4 py-1.5 mb-6">
            Your monthly recruiting assistant — not just a profile page
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] sm:leading-[1.05] mb-6">
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
              href="/onboarding"
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
      <section id="how-it-works" className="py-14 sm:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-4">
            How RecruitOS Works
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
            Build your profile, get your school matches and verified contacts, send your outreach.
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
                desc: "Get outreach emails written around your profile and a clear order for who to contact first. Review it, make it yours, and send it.",
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
              href="/onboarding"
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

      {/* Product Preview */}
      <section className="py-14 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">What You Get</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Your recruiting plan, in one place.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              School matches ranked by fit, verified coach contacts, and outreach emails ready to copy and send.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Mock profile header */}
            <div className="bg-brand-900 text-white px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-black text-lg">Jordan Mills — Class of 2026</div>
                <div className="text-blue-200 text-sm mt-0.5">Wide Receiver · Marietta, GA · GPA 3.8 · 40-Yard 4.48s</div>
              </div>
              <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full">
                Premium
              </span>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 divide-x divide-gray-100">
              {[
                { label: "School Matches", value: "50" },
                { label: "Priority Schools", value: "5" },
                { label: "Coach Contacts", value: "17" },
                { label: "Outreach Emails", value: "Ready" },
              ].map((stat) => (
                <div key={stat.label} className="px-5 py-4">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{stat.label}</div>
                  <div className="text-2xl font-black text-gray-900 mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Two-panel: matches + contacts */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* School matches */}
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">Top School Matches</div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Appalachian State", div: "FBS · Sun Belt", score: 94 },
                    { name: "James Madison", div: "FBS · Sun Belt", score: 91 },
                    { name: "Liberty University", div: "FBS · Independent", score: 88 },
                    { name: "Coastal Carolina", div: "FBS · Sun Belt", score: 85 },
                  ].map((s) => (
                    <div key={s.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{s.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.div}</div>
                      </div>
                      <span className="bg-brand-600 text-white text-xs font-black px-2.5 py-1 rounded-full">
                        {s.score}%
                      </span>
                    </div>
                  ))}
                  <p className="text-xs text-gray-400 text-center pt-1">+ 46 more matches in your full profile</p>
                </div>
              </div>

              {/* Coach contacts */}
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-500 mb-4">Verified Coach Contacts</div>
                <div className="flex flex-col gap-2.5">
                  {[
                    { name: "Shawn Clark", title: "Head Coach", school: "App State", email: "clarksc@appstate.edu" },
                    { name: "Frank Ponce", title: "Offensive Coordinator", school: "App State", email: "poncef@appstate.edu" },
                    { name: "Bob Wiesel", title: "Head Coach", school: "JMU", email: "wieselrw@jmu.edu" },
                    { name: "Shane Montgomery", title: "Offensive Coordinator", school: "JMU", email: "montgosa@jmu.edu" },
                  ].map((c) => (
                    <div key={c.email} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 gap-3">
                      <div className="min-w-0">
                        <div className="font-bold text-gray-900 text-sm">{c.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{c.title} · {c.school}</div>
                        <div className="text-xs text-gray-500 mt-0.5 truncate">{c.email}</div>
                      </div>
                      <div className="flex items-center gap-1 text-green-600 text-xs font-semibold flex-shrink-0">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-gray-500">
                Contacts are pulled from official athletic staff pages — not scraped from databases.
              </p>
              <Link href="/demo" className="text-brand-600 font-bold text-sm hover:underline flex-shrink-0">
                See the full demo profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why RecruitOS Is Different (Trust) */}
      <section className="py-14 sm:py-20 px-4 bg-brand-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-3">
              Why RecruitOS Is Different
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              No Guessing. Just a Clear, Organized Plan.
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Most recruiting tools hand you a search bar and leave the rest to
              you. RecruitOS does the research instead — which schools fit, who
              to contact, and what to send.
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
      <section className="py-14 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Recruiting Is Confusing. It Doesn&apos;t Have to Be.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              It&apos;s hard to know which schools are a realistic fit, who on
              the staff to contact, or what to write. So most emails go to the
              wrong person and never get a reply. RecruitOS handles all three.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "We Tell You Which Schools Fit",
                desc: "We match you to 50 programs based on your profile — position, stats, GPA, size, and location. Every school on your list is there for a reason.",
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
                desc: "We let you know when your matched schools host camps or junior days — the events where coaches evaluate recruits in person.",
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
      <section className="py-14 sm:py-20 px-4 bg-white">
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
                organizes it into a clear monthly plan the whole family can
                follow — together.
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
      <section id="pricing" className="py-14 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mb-14 max-w-xl mx-auto">
            Start free, or jump straight into a plan. Both paid plans are month-to-month.
          </p>

          <div className="grid md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto text-left">
            {/* Free Demo */}
            <div className="flex flex-col rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Free Demo</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-gray-900">$0</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">See the full layout before you commit.</p>
              <ul className="space-y-3 mb-8 flex-1 text-sm">
                {["Profile preview", "Sample school matches", "Sample coach contacts", "Sample outreach email"].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-600">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/demo" className="block w-full text-center bg-gray-100 text-gray-700 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-colors">
                View Demo Profile
              </Link>
            </div>

            {/* Starter */}
            <div className="flex flex-col rounded-3xl border border-brand-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-2">Starter</div>
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-4xl font-black text-gray-900">$9</span>
                <span className="text-gray-500 font-medium">.99/mo</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">A real plan to start contacting coaches.</p>
              <ul className="space-y-3 mb-8 flex-1 text-sm">
                {[
                  "20 school matches",
                  "Verified coach contacts",
                  "3 priority schools · 2 contacts each",
                  "Copy-and-paste outreach emails",
                  "Monthly recruiting updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700">
                    <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/onboarding" className="block w-full text-center bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-colors">
                Start Starter Plan →
              </Link>
            </div>

            {/* Premium */}
            <div className="relative flex flex-col rounded-3xl bg-brand-700 text-white p-7 shadow-xl ring-2 ring-brand-500 mt-4 md:mt-0">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-green-400 text-brand-900 text-xs font-black uppercase tracking-wide px-4 py-1.5 rounded-full shadow">
                  Most popular
                </span>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2 mt-2">Premium</div>
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-4xl font-black">$20</span>
                <span className="text-blue-200 font-medium">/mo</span>
              </div>
              <p className="text-blue-100 text-sm mb-6">The full plan — more schools, more contacts, more depth.</p>
              <ul className="space-y-3 mb-8 flex-1 text-sm">
                {[
                  "50 school matches",
                  "Verified coach contacts",
                  "5 priority schools · 3+ contacts each",
                  "Copy-and-paste outreach emails",
                  "Camp & junior day alerts",
                  "Monthly strategy updates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/onboarding" className="block w-full text-center bg-white text-brand-700 font-black py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
                Start Premium Plan →
              </Link>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-8 text-center">
            Cancel anytime. RecruitOS helps you reach coaches — it does not guarantee offers or scholarships.{" "}
            <Link href="/pricing" className="text-brand-500 hover:underline">See full plan comparison →</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="py-14 sm:py-20 px-4 bg-brand-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Stop Guessing. Start Contacting the Right Coaches.
          </h2>
          <p className="text-blue-100 mb-2 text-lg leading-relaxed">
            RecruitOS gives you a monthly recruiting plan, verified coach
            contacts, and outreach emails ready to send.
          </p>
          <p className="text-blue-400 text-sm mb-10">
            $20/month. Cancel anytime. No guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/onboarding"
              className="bg-white text-brand-700 font-black px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors"
            >
              Start Premium Plan →
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/60 text-white font-semibold px-10 py-4 rounded-xl text-lg hover:border-white hover:bg-white/10 transition-colors"
            >
              View Demo Profile
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
