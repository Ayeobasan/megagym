"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

// Streamlined 5 essential links — eliminates horizontal overflow and wrapping
const navLinks = [
  { name: "About", href: "#about" },
  { name: "Schedule", href: "#schedule" },
  { name: "Membership", href: "#membership" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#222222] shadow-2xl py-2.5"
          : "bg-gradient-to-b from-black/95 via-black/80 to-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
          {/* Logo & Location Tag */}
          <Link href="#hero" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group">
            <div className="relative h-10 w-24 sm:h-11 sm:w-28 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo-dark.png"
                alt="Mega Gym Official Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-gray-800 pl-2.5">
              <span className="text-[10px] tracking-widest text-[#E5392F] uppercase font-bold">
                AYOBO • LAGOS
              </span>
              <span className="text-[9px] tracking-wider text-gray-400 uppercase">
                MON – SUN OPEN
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Compact 5 items that fit comfortably without overflowing */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E5392F] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-[#E5392F] transition-colors whitespace-nowrap"
              title="Call Mega Gym Desk"
            >
              <div className="w-7 h-7 rounded-full bg-red-950/60 border border-[#E5392F]/40 flex items-center justify-center text-[#E5392F]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide font-medium">{GYM_INFO.phone}</span>
            </a>

            <a
              href={GYM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#E5392F] to-[#B92720] hover:from-[#FF3B30] hover:to-[#E5392F] text-white px-4 xl:px-5 py-2 xl:py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(229,57,47,0.4)] hover:shadow-[0_0_25px_rgba(229,57,47,0.7)] flex items-center gap-1.5 whitespace-nowrap active:scale-95 border border-red-500/30"
            >
              <span>JOIN MEGA GYM</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions: WhatsApp Pill & Hamburger */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <a
              href={GYM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E5392F] hover:bg-[#B92720] text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow"
            >
              Join
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#E5392F] p-2 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#E5392F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu — Constrained & 100% Responsive */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bg-[#0c0c0c]/98 border-b border-[#262626] shadow-2xl backdrop-blur-xl z-50">
          <div className="px-5 pt-4 pb-7 space-y-3 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center gap-2 pb-3 border-b border-[#222] text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[#E5392F]" />
              <span>14 Camp Davies Rd, Ayobo, Lagos</span>
            </div>

            <div className="grid grid-cols-1 gap-1.5 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-white hover:bg-[#1a1a1a] transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#222] space-y-2.5">
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#E5392F] hover:bg-[#B92720] text-white font-bold uppercase py-3 rounded-xl text-xs tracking-wider shadow-[0_4px_20px_rgba(229,57,47,0.4)] transition-transform active:scale-95"
              >
                JOIN MEGA GYM (WhatsApp)
              </a>
              <a
                href={`tel:${GYM_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#171717] hover:bg-[#222222] text-white py-2.5 rounded-xl text-xs font-semibold border border-gray-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5392F]" />
                Call {GYM_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
