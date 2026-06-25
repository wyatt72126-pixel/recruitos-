import Link from "next/link";

export default function PremiumSection() {
  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-600 rounded-2xl text-white p-8 md:p-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wide">
          Premium Edition
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
        Unlock Your Full Recruiting Package
      </h2>
      <p className="text-blue-100 mb-8 max-w-xl leading-relaxed">
        The 5 school matches above are just a preview. Your full Premium Edition
        delivers everything you need to land a college offer — without the
        guesswork.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          {
            icon: "🏫",
            title: "50 School Matches",
            desc: "A full list of programs ranked by fit across Division I, II, and III.",
          },
          {
            icon: "📬",
            title: "Verified Coach Contacts",
            desc: "Real emails and Twitter/X handles for 3+ coaches at each of your top 5 schools — pulled from official staff pages, not guessed.",
          },
          {
            icon: "✉️",
            title: "Personalized Outreach Emails",
            desc: "A ready-to-send, personalized email for every coach contact. Just copy and send.",
          },
          {
            icon: "🏕️",
            title: "Camp & Junior Day Alerts",
            desc: "Get notified about recruiting events at your matched schools before spots fill up.",
          },
          {
            icon: "📋",
            title: "Coach Contact Strategy",
            desc: "A step-by-step guide on when to reach out, what to say, and how to follow up.",
          },
          {
            icon: "🔒",
            title: "Reliability Guarantee",
            desc: "If any contact is unreachable, we replace it with a verified alternative from the same staff page.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white bg-opacity-10 rounded-xl p-4 flex gap-4 items-start"
          >
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <div className="font-bold text-sm mb-1">{item.title}</div>
              <div className="text-blue-100 text-xs leading-relaxed">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/#get-started"
          className="w-full sm:w-auto text-center bg-white text-brand-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
        >
          Get My Full Package — $97
        </Link>
        <span className="text-blue-200 text-sm">One-time payment. No subscriptions.</span>
      </div>
    </div>
  );
}
