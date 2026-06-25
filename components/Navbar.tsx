"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-brand-700 font-black text-xl tracking-tight">
              Recruit<span className="text-brand-500">OS</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/#how-it-works" className="hover:text-brand-600 transition-colors">
              How It Works
            </Link>
            <Link href="/#pricing" className="hover:text-brand-600 transition-colors">
              Pricing
            </Link>
            <Link href="/demo" className="hover:text-brand-600 transition-colors">
              Demo Profile
            </Link>
            <Link
              href="/#get-started"
              className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <Link href="/#how-it-works" onClick={() => setOpen(false)} className="hover:text-brand-600">How It Works</Link>
            <Link href="/#pricing" onClick={() => setOpen(false)} className="hover:text-brand-600">Pricing</Link>
            <Link href="/demo" onClick={() => setOpen(false)} className="hover:text-brand-600">Demo Profile</Link>
            <Link href="/#get-started" onClick={() => setOpen(false)} className="bg-brand-600 text-white px-4 py-2 rounded-lg text-center">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
