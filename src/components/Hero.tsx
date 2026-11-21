"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Calendar, ShieldCheck, Flame, Users, Sparkles, MapPin } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden w-full max-w-full">
      {/* High-Clarity Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/gym-interior.jpg"
          alt="Mega Gym Main Training Floor"
          fill
          priority
          className="object-cover object-center brightness-105 contrast-105"
        />
        {/* Soft, focused gradient overlay preserving maximum background clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#E5392F]/15 rounded-full blur-[130px] pointer-events-none max-w-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Left) */}
          <div className="lg:col-span-8">
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-[#E5392F]/50 backdrop-blur-md mb-6 shadow-2xl max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5392F] animate-ping flex-shrink-0" />
              <span className="w-2 h-2 rounded-full bg-[#E5392F] -ml-4 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E5392F] truncate">
                AYOBO, LAGOS • OPEN MON – SUN
              </span>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-xs text-gray-200 hidden sm:flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#E5392F]" /> 14 Camp Davies Rd
              </span>
            </div>

            {/* Master Hero Headline with Responsive Sizing */}
            <h1 className="font-['Anton',sans-serif] text-4xl sm:text-6xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] mb-6 break-words">
              BUILT BY <span className="text-[#E5392F]">DISCIPLINE.</span>
              <br />
              POWERED BY <span className="text-white underline decoration-[#E5392F] decoration-4 underline-offset-8">YOU.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {GYM_INFO.subtitle} Whether you are starting your fitness journey or training at an advanced athletic level, experience a disciplined environment with structured routines.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#membership"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E5392F] to-[#B92720] hover:from-[#FF3B30] hover:to-[#E5392F] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_30px_rgba(229,57,47,0.6)] hover:shadow-[0_0_40px_rgba(229,57,47,0.9)] group active:scale-95 border border-red-500/40"
              >
                <span>Explore Membership</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#schedule"
                className="inline-flex items-center justify-center gap-3 bg-black/80 hover:bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm border border-gray-700 hover:border-[#E5392F] transition-all duration-300 backdrop-blur-md shadow-xl"
              >
                <Calendar className="w-5 h-5 text-[#E5392F]" />
                <span>Weekly Schedule</span>
              </a>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20 text-xs drop-shadow-md">
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <span>Dedicated Coaches</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <Flame className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <span>Weekly Split</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <Users className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <span>Friday Games (6 PM)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200 font-medium">
                <Sparkles className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <span>7 Days Access</span>
              </div>
            </div>
          </div>

          {/* Right Floating Glass Badge — Keeps Gym Background Open & Clear */}
          {/* <div className="lg:col-span-4 relative hidden lg:flex flex-col items-end justify-center">
            <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 shadow-2xl space-y-4 max-w-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="relative h-10 w-28">
                  <Image
                    src="/images/logo-dark.png"
                    alt="Mega Gym Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5392F] px-2 py-0.5 rounded">
                  Ayobo Floor
                </span>
              </div>

              <div className="space-y-1 text-xs">
                <span className="text-gray-400 block text-[10px] uppercase tracking-wider font-semibold">
                  FEATURED MEMBERSHIP
                </span>
                <p className="text-white font-['Anton',sans-serif] text-xl tracking-wide uppercase">
                  ₦30,000 <span className="text-xs font-sans text-gray-300">/ MONTH</span>
                </p>
                <p className="text-gray-300 text-[11px] leading-relaxed">
                  Includes dedicated coach guidance, weekly split routines &amp; Friday games.
                </p>
              </div>

              <a
                href="#membership"
                className="block text-center w-full py-2 bg-[#E5392F] hover:bg-[#B92720] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Join Now
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
