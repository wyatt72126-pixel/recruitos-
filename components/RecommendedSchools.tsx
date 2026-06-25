"use client";
import { useState } from "react";
import CoachCard from "./CoachCard";
import type { School } from "@/lib/schools";

export default function RecommendedSchools({ schools }: { schools: School[] }) {
  const [activeSchool, setActiveSchool] = useState(schools[0].id);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const school = schools.find((s) => s.id === activeSchool)!;

  function copyOutreach() {
    navigator.clipboard.writeText(school.outreachEmail).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      {/* School tabs */}
      <div className="flex flex-wrap gap-2">
        {schools.map((s) => (
          <button
            key={s.id}
            onClick={() => { setActiveSchool(s.id); setCopiedEmail(false); }}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeSchool === s.id
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-brand-400"
            }`}
          >
            {s.shortName}
          </button>
        ))}
      </div>

      {/* School detail card */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className={`${school.color} text-white px-6 py-5`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black">{school.name}</h3>
              <div className="text-sm opacity-80 mt-1">
                {school.location} &middot; {school.conference} &middot; {school.division}
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl px-3 py-2 text-center flex-shrink-0">
              <div className="text-2xl font-black">{school.matchScore}%</div>
              <div className="text-xs opacity-80">Match</div>
            </div>
          </div>
          <p className="mt-3 text-sm opacity-90 bg-black bg-opacity-10 rounded-lg px-3 py-2">
            {school.fitReason}
          </p>
        </div>

        {/* Coaches */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-gray-700">
              Verified Coach Contacts — sourced from official athletic staff page
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {school.coaches.map((coach) => (
              <CoachCard key={coach.email} coach={coach} />
            ))}
          </div>
        </div>

        {/* Outreach email */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-800">Your Suggested Outreach Email</span>
              <button
                onClick={copyOutreach}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                  copiedEmail
                    ? "bg-green-100 text-green-700"
                    : "bg-brand-600 text-white hover:bg-brand-700"
                }`}
              >
                {copiedEmail ? "Copied!" : "Copy Email"}
              </button>
            </div>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans leading-relaxed">
              {school.outreachEmail}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
