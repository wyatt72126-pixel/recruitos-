const LAST_UPDATED = "June 2025";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using RecruitOS ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.`,
  },
  {
    title: "2. Description of Service",
    body: `RecruitOS is a monthly recruiting assistance service that provides student-athletes with personalized school match recommendations, verified coach contact information sourced from official athletic staff pages, and outreach email templates. The Service is intended to help athletes organize and improve their recruiting outreach — it does not guarantee offers, scholarships, or responses from coaches.`,
  },
  {
    title: "3. Accuracy of Information",
    body: `RecruitOS makes reasonable efforts to source coach contact information from official school athletic staff pages. However, staff changes and page updates may cause information to become outdated. We do not guarantee that any contact listed is current, active, or will respond to outreach.`,
  },
  {
    title: "4. No Guarantee of Outcomes",
    body: `Use of RecruitOS does not guarantee any athletic scholarship, offer of admission, coach response, or recruiting outcome. The Service organizes information and outreach tools — the outcome of any outreach is entirely at the discretion of the receiving institution and its coaching staff.`,
  },
  {
    title: "5. Subscription and Billing",
    body: `Premium access is billed at $20 per month. You may cancel at any time. Cancellation takes effect at the end of the current billing period. RecruitOS does not issue refunds for partial months.`,
  },
  {
    title: "6. User Responsibilities",
    body: `You agree to use the Service for lawful purposes only. You are responsible for the accuracy of the profile information you submit. You agree not to misrepresent your athletic or academic credentials in outreach communications generated using the Service.`,
  },
  {
    title: "7. Intellectual Property",
    body: `All content, design, and functionality of RecruitOS is the property of RecruitOS and may not be copied, reproduced, or redistributed without written permission.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `To the fullest extent permitted by law, RecruitOS is not liable for any indirect, incidental, or consequential damages arising from the use of the Service or reliance on any information provided.`,
  },
  {
    title: "9. Changes to Terms",
    body: `We may update these Terms from time to time. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: "10. Contact",
    body: `For questions about these Terms, please use the contact form at recruitos.com/contact.`,
  },
];

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-white border-b border-gray-100 py-14 sm:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-3">Terms of Service</h1>
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
