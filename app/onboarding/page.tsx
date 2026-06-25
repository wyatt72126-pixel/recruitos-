"use client";
import { useState } from "react";
import Link from "next/link";

const GRAD_YEARS = ["2025", "2026", "2027", "2028", "2029", "2030"];

const STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const POSITIONS = [
  "Quarterback", "Running Back", "Wide Receiver", "Tight End",
  "Offensive Tackle", "Offensive Guard", "Center",
  "Defensive End", "Defensive Tackle", "Edge",
  "Linebacker", "Cornerback", "Safety",
  "Kicker", "Punter", "Long Snapper", "Athlete",
];

const COLLEGE_LEVELS = [
  "FBS — Division I",
  "FCS — Division I",
  "Division II",
  "Division III",
  "NAIA",
  "Junior College",
  "Open to any level",
];

const inputClass =
  "border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent";
const selectClass = inputClass + " bg-white";
const labelClass = "text-sm font-semibold text-gray-700";
const req = <span className="text-red-500">*</span>;

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass}>
        {label} {required ? req : <span className="text-gray-400 font-normal">(optional)</span>}
      </label>
      {children}
      {hint && <span className="text-xs text-gray-400">{hint}</span>}
    </div>
  );
}

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      <div className="border-b border-gray-100 px-7 sm:px-9 py-6 flex items-start gap-4">
        <span className="w-9 h-9 rounded-full bg-brand-600 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
          {number}
        </span>
        <div>
          <h2 className="text-lg font-black text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        </div>
      </div>
      <div className="px-7 sm:px-9 py-7">{children}</div>
    </section>
  );
}

export default function OnboardingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // ─────────────────────────────────────────────────────────────
    // BACKEND INTEGRATION POINT
    // No backend is connected yet. When one exists, collect the form
    // values here (e.g. with FormData) and POST them to your API or
    // form handler. Until then we only show a front-end success state.
    //
    //   const data = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    //   await fetch("/api/onboarding", { method: "POST", body: JSON.stringify(data) });
    // ─────────────────────────────────────────────────────────────
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <main className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-10 sm:p-14 text-center shadow-sm max-w-lg">
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">Recruiting profile received</h1>
          <p className="text-gray-500 leading-relaxed mb-8">
            Thanks for submitting your profile. Once your account is active,
            we&apos;ll build your school matches and verified coach contacts and
            send them to your email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="bg-brand-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors">
              View a Demo Profile
            </Link>
            <Link href="/" className="border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12 sm:py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-500 mb-3">
            Athlete Onboarding
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
            Build Your Recruiting Profile
          </h1>
          <p className="text-gray-500 text-lg">
            Tell us about the athlete. This is what we use to build your school
            matches and verified coach contacts.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 px-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* 1. Athlete Info */}
          <Section number="1" title="Athlete Info" description="Who the athlete is and how to reach the family.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Athlete first name" htmlFor="firstName" required>
                <input id="firstName" name="firstName" type="text" required placeholder="Jordan" className={inputClass} />
              </Field>
              <Field label="Athlete last name" htmlFor="lastName" required>
                <input id="lastName" name="lastName" type="text" required placeholder="Mills" className={inputClass} />
              </Field>
              <Field label="Email" htmlFor="email" required>
                <input id="email" name="email" type="email" required placeholder="athlete@example.com" className={inputClass} />
              </Field>
              <Field label="Phone number" htmlFor="phone" required>
                <input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" className={inputClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Parent/guardian email" htmlFor="parentEmail" required>
                  <input id="parentEmail" name="parentEmail" type="email" required placeholder="parent@example.com" className={inputClass} />
                </Field>
              </div>
            </div>
          </Section>

          {/* 2. Academic Info */}
          <Section number="2" title="Academic Info" description="Grades and school details coaches ask about first.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Graduation year" htmlFor="gradYear" required>
                <select id="gradYear" name="gradYear" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select year</option>
                  {GRAD_YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </Field>
              <Field label="High school" htmlFor="highSchool" required>
                <input id="highSchool" name="highSchool" type="text" required placeholder="Marietta High School" className={inputClass} />
              </Field>
              <Field label="State" htmlFor="state" required>
                <select id="state" name="state" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select state</option>
                  {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="GPA" htmlFor="gpa" required>
                <input id="gpa" name="gpa" type="text" inputMode="decimal" required placeholder="3.8" className={inputClass} />
              </Field>
              <Field label="ACT/SAT score" htmlFor="testScore">
                <input id="testScore" name="testScore" type="text" placeholder="e.g. ACT 27 or SAT 1240" className={inputClass} />
              </Field>
              <Field label="Intended major" htmlFor="major">
                <input id="major" name="major" type="text" placeholder="Business, Engineering, Undecided…" className={inputClass} />
              </Field>
            </div>
          </Section>

          {/* 3. Football Info */}
          <Section number="3" title="Football Info" description="Position, measurables, and film coaches will evaluate.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Position" htmlFor="position" required>
                <select id="position" name="position" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select position</option>
                  {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </Field>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Height" htmlFor="height" required>
                  <input id="height" name="height" type="text" required placeholder={`6'2"`} className={inputClass} />
                </Field>
                <Field label="Weight" htmlFor="weight" required>
                  <input id="weight" name="weight" type="text" inputMode="numeric" required placeholder="185 lbs" className={inputClass} />
                </Field>
              </div>
              <Field label="Hudl/film link" htmlFor="filmLink" required>
                <input id="filmLink" name="filmLink" type="url" required placeholder="https://hudl.com/profile/…" className={inputClass} />
              </Field>
              <Field label="Twitter/X profile link" htmlFor="twitter">
                <input id="twitter" name="twitter" type="url" placeholder="https://x.com/yourhandle" className={inputClass} />
              </Field>
            </div>
          </Section>

          {/* 4. Recruiting Goals */}
          <Section number="4" title="Recruiting Goals" description="What you're looking for so we can match the right schools.">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Preferred college level" htmlFor="level" required>
                <select id="level" name="level" required defaultValue="" className={selectClass}>
                  <option value="" disabled>Select level</option>
                  {COLLEGE_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </Field>
              <Field label="Preferred location" htmlFor="location" hint="Region, states, or distance from home.">
                <input id="location" name="location" type="text" placeholder="Southeast, within 6 hours, no preference…" className={inputClass} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Notes/goals" htmlFor="notes" hint="Anything else we should know — target schools, priorities, timeline.">
                  <textarea id="notes" name="notes" rows={5} placeholder="Tell us about your recruiting goals…" className={inputClass + " resize-none"} />
                </Field>
              </div>
            </div>
          </Section>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto bg-brand-600 text-white font-black px-12 py-4 rounded-xl hover:bg-brand-700 transition-colors text-lg"
            >
              Submit Recruiting Profile
            </button>
            <p className="text-xs text-gray-400 text-center max-w-md">
              This form is not connected to a backend yet. Your profile will not
              be stored or sent until the service is fully set up.
            </p>
            <p className="text-xs text-gray-400 text-center max-w-2xl leading-relaxed border-t border-gray-200 pt-4 mt-1">
              RecruitOS provides recruiting organization, school research, coach
              contact information, and outreach support. RecruitOS does not
              guarantee scholarships, roster spots, offers, coach responses, or
              admission to any school.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
