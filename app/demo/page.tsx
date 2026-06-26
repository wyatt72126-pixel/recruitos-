import RecommendedSchools from "@/components/RecommendedSchools";
import PremiumSection from "@/components/PremiumSection";
import { schools } from "@/lib/schools";

export default function DemoPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Profile header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-brand-700 flex items-center justify-center text-white text-3xl font-black flex-shrink-0">
              JM
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-black text-gray-900">Jordan Mills</h1>
                <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  Demo Profile
                </span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-500 mt-2">
                <span>Wide Receiver &middot; 6&apos;2" &middot; 185 lbs</span>
                <span>Marietta, GA</span>
                <span>Class of 2026</span>
                <span>GPA 3.8</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-3 text-sm">
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                  <span className="text-gray-400 text-xs">40-Yard Dash</span>
                  <div className="font-bold text-gray-800">4.48s</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                  <span className="text-gray-400 text-xs">Receptions</span>
                  <div className="font-bold text-gray-800">58</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                  <span className="text-gray-400 text-xs">Yards</span>
                  <div className="font-bold text-gray-800">912</div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                  <span className="text-gray-400 text-xs">Touchdowns</span>
                  <div className="font-bold text-gray-800">11</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 flex flex-col gap-8 sm:gap-10">

        {/* Dashboard summary strip */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "School Matches", value: "5", sub: "of 50 in Premium" },
              { label: "Priority Schools", value: "5", sub: "verified contacts" },
              { label: "Coach Contacts", value: "15", sub: "3+ per school" },
              { label: "Outreach Emails", value: "Ready", sub: "copy & send" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 rounded-xl px-4 py-4"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {stat.label}
                </div>
                <div className="text-2xl font-black text-gray-900 mt-1">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Top 5 school matches */}
        <section>
          <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
                Recommended Schools
              </span>
              <h2 className="text-xl font-black text-gray-900 mt-1">Your Top 5 School Matches</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Recommended based on your stats, size, GPA, and location. Verified coach contacts included.
              </p>
            </div>
            <span className="text-xs text-gray-400 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
              Preview — 50 matches in Premium
            </span>
          </div>
          <RecommendedSchools schools={schools} />
        </section>

        {/* Premium upsell */}
        <section>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Upgrade
          </span>
          <div className="mt-3">
            <PremiumSection />
          </div>
        </section>

      </div>

    </main>
  );
}
