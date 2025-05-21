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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${
        scrolled ? "bg-[#060506]/95 border-zinc-800" : "bg-[#060506]/30 border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Retail-Success-Logo.png"
              alt="The Retail Success Coach Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.title} className="relative">
                <button
                  className="flex items-center space-x-1 text-zinc-300 hover:text-white transition-colors"
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
                      className="absolute left-0 mt-2 w-[60rem] max-w-[90vw] rounded-md bg-white shadow-xl ring-1 ring-zinc-200 overflow-hidden scale-glow"
                      onMouseEnter={() => setOpenDropdown(dropdown.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div className="flex flex-wrap gap-x-12 gap-y-10 px-8 py-6 w-full">
                        {dropdown.sections.map((section) => (
                          <div
                            key={section.title}
                            className="w-[calc(50%-1.5rem)] border-b border-zinc-200 pb-4"
                          >
                            {section.title && (
                              <p className="text-xs font-semibold text-black uppercase tracking-wide mb-2">
                                {section.title}
                              </p>
                            )}
                            <ul className="space-y-2">
                              {section.items.map((item) => (
                                <li key={item.title}>
                                  <Link
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md hover:bg-zinc-100 transition-colors"
                                  >
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

            {/* Static Top Links */}
            <Link href="/digital-strategy-packages" className="text-zinc-300 hover:text-white transition-colors">
              Plans & Prices
            </Link>
            <Link href="/blog" className="text-zinc-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/case-studies" className="text-zinc-300 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/insights" className="text-zinc-300 hover:text-white transition-colors">
              Insights
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ScaleButton href="/profit-performance-call" variant="default" size="sm">
              Book a Call
            </ScaleButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
