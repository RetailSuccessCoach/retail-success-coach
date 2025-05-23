// File: Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { ScaleButton } from "@/components/ui/ScaleButton";
import { navDropdowns } from "@/components/layout/navDropdowns";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "bg-[#f4f4f4] border-zinc-200" : "bg-[#f4f4f4] border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Retail-Success-Logo.png"
              alt="The Retail Success Coach Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.title} className="relative">
                <button
                  className="flex items-center space-x-1 text-zinc-700 hover:text-black transition-colors"
                  onClick={() => handleDropdownToggle(dropdown.title)}
                  onMouseEnter={() => setOpenDropdown(dropdown.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span>{dropdown.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {openDropdown === dropdown.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-[60rem] max-w-[90vw] rounded-md bg-white shadow-xl ring-1 ring-zinc-200 overflow-hidden"
                      onMouseEnter={() => setOpenDropdown(dropdown.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="flex flex-wrap gap-x-12 gap-y-10 px-8 py-6 w-full">
                        {dropdown.sections.map((section) => (
                          <div key={section.title} className="w-[calc(50%-1.5rem)] border-b border-zinc-200 pb-4">
                            <p className="text-xs font-semibold text-black uppercase tracking-wide mb-2">
                              {section.title}
                            </p>
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.title}>
                                  <Link href={item.href} className="block px-3 py-2 rounded-md hover:bg-zinc-100 transition-colors">
                                    <div className="font-medium text-black">{item.title}</div>
                                    {item.description && (
                                      <p className="text-xs text-zinc-600">{item.description}</p>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/digital-strategy-packages" className="text-zinc-700 hover:text-black transition-colors">
              Plans & Prices
            </Link>
            <Link href="/blog" className="text-zinc-700 hover:text-black transition-colors">
              Blog
            </Link>
            {/* Commented links for now */}
            {/* <Link href="/case-studies" className="text-zinc-700 hover:text-black transition-colors">Case Studies</Link> */}
            {/* <Link href="/insights" className="text-zinc-700 hover:text-black transition-colors">Insights</Link> */}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <ScaleButton
              href="/profit-performance-call"
              variant="default"
              size="sm"
              className="rounded-full bg-black text-white hover:bg-zinc-800 px-5 py-2 text-sm"
            >
              Book a Call
            </ScaleButton>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white text-zinc-900 px-6 py-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/Retail-Success-Logo.png"
                alt="Logo"
                width={140}
                height={32}
              />
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-zinc-700" />
              </button>
            </div>

            <nav className="space-y-8">
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.title}>
                  <p className="text-sm uppercase font-semibold text-zinc-500 mb-3">
                    {dropdown.title}
                  </p>
                  {dropdown.sections.map((section) => (
                    <div key={section.title} className="mb-4">
                      <p className="text-xs uppercase text-zinc-500 tracking-wide mb-2">
                        {section.title}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <Link
                              href={item.href}
                              className="block text-lg font-bold text-zinc-900 py-2 hover:text-zinc-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              <div className="border-t border-zinc-300 pt-6 space-y-3">
                <Link href="/digital-strategy-packages" className="block text-lg font-bold text-zinc-900 hover:text-zinc-600">
                  Plans & Prices
                </Link>
                <Link href="/blog" className="block text-lg font-bold text-zinc-900 hover:text-zinc-600">
                  Blog
                </Link>
                {/* <Link href="/case-studies" className="block text-lg font-bold text-zinc-900 hover:text-zinc-600">Case Studies</Link> */}
                {/* <Link href="/insights" className="block text-lg font-bold text-zinc-900 hover:text-zinc-600">Insights</Link> */}
              </div>

              <div className="mt-10">
                <Link
                  href="/profit-performance-call"
                  className="block w-full text-center bg-black text-white font-semibold py-3 rounded-full hover:bg-zinc-800 transition"
                >
                  Book a Call
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
