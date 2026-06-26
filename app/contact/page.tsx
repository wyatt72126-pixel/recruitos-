"use client";
import { useState } from "react";

const POSITIONS = [
  "Quarterback", "Running Back", "Wide Receiver", "Tight End",
  "Offensive Tackle", "Offensive Guard", "Center",
  "Defensive End", "Defensive Tackle", "Edge",
  "Linebacker", "Cornerback", "Safety",
  "Kicker", "Punter", "Long Snapper", "Athlete",
  "Other",
];

const YEARS = ["2025", "2026", "2027", "2028", "2029", "2030"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend connected yet — show success state only.
    setSubmitted(true);
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14 sm:py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">
            Contact
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-500 text-lg">
            Questions about the service, the demo profile, or how RecruitOS
            works? Fill out the form and we will get back to you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-2">Message received</h2>
              <p className="text-gray-500">
                Thank you for reaching out. We will follow up at the email address you provided.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="athlete" className="text-sm font-semibold text-gray-700">
                    Athlete name <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="athlete"
                    type="text"
                    placeholder="Jordan Mills"
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="gradYear" className="text-sm font-semibold text-gray-700">
                    Graduation year <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <select
                    id="gradYear"
                    defaultValue=""
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select year</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="position" className="text-sm font-semibold text-gray-700">
                  Position <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  id="position"
                  defaultValue=""
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                >
                  <option value="">Select position</option>
                  {POSITIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="What questions do you have about RecruitOS?"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-brand-600 text-white font-black py-4 rounded-xl hover:bg-brand-700 transition-colors text-lg mt-1"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                We review every message and typically respond within 1–2 business days.
              </p>
              <p className="text-xs text-gray-400 text-center max-w-lg mx-auto leading-relaxed border-t border-gray-100 pt-4">
                RecruitOS provides recruiting organization, school research, coach contact information, and outreach support. RecruitOS does not guarantee scholarships, roster spots, offers, coach responses, or admission to any school.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
