const LAST_UPDATED = "June 2025";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: `When you use RecruitOS, we may collect the information you provide directly — including your name, email address, and athlete profile details such as graduation year, position, GPA, and stats. We also collect standard usage data (browser type, device type, pages visited) through analytics tools.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information you provide to generate school match recommendations, produce coach contact lists, and create personalized outreach email templates. We do not sell your personal information to third parties.`,
  },
  {
    title: "3. Sharing of Information",
    body: `We do not share your personal information with third parties except as necessary to operate the Service (for example, payment processing or email delivery). We do not share your profile information with coaches, schools, or recruiting databases without your explicit direction.`,
  },
  {
    title: "4. Data Retention",
    body: `We retain your account and profile data for as long as your account is active. If you cancel your subscription and request deletion of your data, we will remove it within 30 days.`,
  },
  {
    title: "5. Cookies and Analytics",
    body: `RecruitOS may use cookies and third-party analytics to understand how the Service is used. You can disable cookies in your browser settings, though some features may not function correctly if you do.`,
  },
  {
    title: "6. Security",
    body: `We take reasonable technical measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of data transmitted to or from the Service.`,
  },
  {
    title: "7. Children's Privacy",
    body: `RecruitOS is intended for use by student-athletes and their families. If the athlete is under 13, a parent or guardian should review and agree to this policy on their behalf. We do not knowingly collect personal information from children under 13 without parental consent.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify users of material changes by posting the updated policy on this page with a revised date.`,
  },
  {
    title: "9. Contact",
    body: `For privacy-related questions, please use the contact form at recruitos.com/contact.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-white border-b border-gray-100 py-14 sm:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm divide-y divide-gray-100">
          {SECTIONS.map(({ title, body }) => (
            <div key={title} className="px-8 py-7">
              <h2 className="font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
