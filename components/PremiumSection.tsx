import Link from "next/link";

const PREMIUM_FEATURES = [
  "50 school matches",
  "5 priority schools with verified coach contacts",
  "At least 3 coach contacts per priority school",
  "Verified emails and Twitter/X contacts from official staff pages",
  "Copy-and-paste outreach emails",
  "Camp, junior day, and recruiting opportunity updates",
  "Monthly recruiting strategy updates",
];

export default function PremiumSection() {
  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-600 rounded-2xl text-white p-8 md:p-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wide">
          RecruitOS Premium
        </span>
        <span className="text-blue-200 text-sm font-semibold">$20/month</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight">
        Upgrade to RecruitOS Premium to receive:
      </h2>
      <p className="text-blue-100 mb-8 max-w-xl leading-relaxed">
        The 5 school matches above are a preview. Premium turns this profile
        into a complete recruiting plan you can act on every month.
      </p>

      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
        {PREMIUM_FEATURES.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-blue-50 leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/#get-started"
          className="w-full sm:w-auto text-center bg-white text-brand-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
        >
          Start Premium Plan →
        </Link>
        <span className="text-blue-200 text-sm">
          $20/month. Cancel anytime.
        </span>
      </div>
    </div>
  );
}
