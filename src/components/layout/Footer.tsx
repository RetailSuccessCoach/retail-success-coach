"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setShowForm(true);
  }, []);

  return (
    <footer className="bg-[#060506] border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
            <div className="flex flex-col gap-4 max-w-xl">
              <h3 className="text-4xl font-light text-white">
                Scale Faster with{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-normal">
                  Sharper Insights.
                </span>
              </h3>
              <Link
                href="/profit-performance-call"
                className="px-6 py-2 rounded-md bg-zinc-800 text-white hover:bg-zinc-700 transition-colors w-fit"
              >
                Book a Call
              </Link>
            </div>

            {showForm && (
              <form className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 border-t border-zinc-800">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Quick Profit Checks</h4>
            <ul className="space-y-2">
              <li><Link href="/ecommerce-profit-audit" className="text-zinc-400 hover:text-white">Profit Pulse Check</Link></li>
              <li><Link href="/second-opinion-channel-audit" className="text-zinc-400 hover:text-white">Second-Opinion Audit</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Strategic Audits</h4>
            <ul className="space-y-2">
              <li><Link href="/profit-ratio-audit" className="text-zinc-400 hover:text-white">Profit Ratio Audit</Link></li>
              <li><Link href="/lifetime-value-backed-scale-plan" className="text-zinc-400 hover:text-white">LTV-Backed Scale Plan</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Growth Plans</h4>
            <ul className="space-y-2">
              <li><Link href="/q4-profit-planning-sprint" className="text-zinc-400 hover:text-white">Q4 Profit Planning Sprint</Link></li>
              <li><Link href="/revenue-to-profit-blueprint" className="text-zinc-400 hover:text-white">Revenue-to-Profit Blueprint</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Investor-Grade Strategy</h4>
            <ul className="space-y-2">
              <li><Link href="/essentials-launch-planning" className="text-zinc-400 hover:text-white">Essentials Launch Plan</Link></li>
              <li><Link href="/Full-Funnel-Profit-Launch-for-eCommerce" className="text-zinc-400 hover:text-white">Full-Funnel Profit Launch</Link></li>
              <li><Link href="/bespoke-investor-plan" className="text-zinc-400 hover:text-white">Bespoke Investor Plan</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-zinc-400 hover:text-white">About</Link></li>
              <li>
{/**/}Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-zinc-400 hover:text-white">Blog</Link></li>
              <li>
{/**/}Case Studies</Link></li>
              <li>
{/**/}Insights</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-400 uppercase">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between text-sm text-zinc-500">
          <p>© {currentYear} Channelytics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/legal/terms" className="hover:text-white">Terms</Link>
            <span>&</span>
            <Link href="/legal/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
