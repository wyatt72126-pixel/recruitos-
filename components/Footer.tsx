import Link from "next/link";

const LINKS = {
  Product: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Demo Profile", href: "/demo" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-white font-black text-lg tracking-tight">
              Recruit<span className="text-brand-400">OS</span>
            </Link>
            <p className="text-sm mt-3 leading-relaxed text-gray-500">
              A monthly recruiting assistant that tells athletes which schools
              fit, who to contact, and what to send.
            </p>
          </div>

          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                {group}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} RecruitOS. All rights reserved.</p>
          <p>
            RecruitOS helps athletes reach coaches. It does not guarantee
            offers or scholarships.
          </p>
        </div>
      </div>
    </footer>
  );
}
