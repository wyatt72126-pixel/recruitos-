"use client";
import { useState } from "react";
import type { Coach } from "@/lib/schools";

export default function CoachCard({ coach }: { coach: Coach }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTwitter, setCopiedTwitter] = useState(false);

  function copy(text: string, setter: (v: boolean) => void) {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 1800);
    });
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col gap-3">
      <div>
        <div className="font-bold text-gray-900 text-sm">{coach.name}</div>
        <div className="text-xs text-gray-500">{coach.title}</div>
      </div>

      <div className="flex flex-col gap-2">
        {/* Email */}
        <button
          onClick={() => copy(coach.email, setCopiedEmail)}
          className="flex items-center justify-between gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-brand-300 rounded-lg px-3 py-2 text-xs transition-colors group"
          title="Click to copy email"
        >
          <span className="flex items-center gap-2 text-gray-700 truncate">
            <svg className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="truncate">{coach.email}</span>
          </span>
          <span className={`flex-shrink-0 font-semibold ${copiedEmail ? "text-green-600" : "text-brand-600"}`}>
            {copiedEmail ? "Copied!" : "Copy"}
          </span>
        </button>

        {/* Twitter */}
        <button
          onClick={() => copy(coach.twitter, setCopiedTwitter)}
          className="flex items-center justify-between gap-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-brand-300 rounded-lg px-3 py-2 text-xs transition-colors group"
          title="Click to copy Twitter/X handle"
        >
          <span className="flex items-center gap-2 text-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-800 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>{coach.twitter}</span>
          </span>
          <span className={`flex-shrink-0 font-semibold ${copiedTwitter ? "text-green-600" : "text-brand-600"}`}>
            {copiedTwitter ? "Copied!" : "Copy"}
          </span>
        </button>
      </div>

      <a
        href={coach.staffPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-400 hover:text-brand-600 transition-colors"
      >
        View official staff page →
      </a>
    </div>
  );
}
