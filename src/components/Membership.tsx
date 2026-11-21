"use client";

import React from "react";
import Image from "next/image";
import { Check, Star, ArrowRight, AlertCircle, Dumbbell } from "lucide-react";
import { PRICING_PLANS, GYM_INFO } from "@/data/gymData";

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-[#080808] relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E5392F]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
            <Dumbbell className="w-3.5 h-3.5 text-[#E5392F]" />
            TRANSPARENT PRICING
          </div>
          <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase mb-6">
            CHOOSE YOUR <span className="text-[#E5392F]">MEMBERSHIP PLAN</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Straightforward pricing with zero hidden charges. Select your plan, register today, and begin training at Mega Gym.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.featured;
            const encodedMessage = encodeURIComponent(plan.whatsappMessage);
            const planWhatsappUrl = `https://wa.me/${GYM_INFO.phoneRaw}?text=${encodedMessage}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#1a0f0f] via-[#141414] to-[#0d0d0d] border-2 border-[#E5392F] shadow-[0_0_40px_rgba(229,57,47,0.35)] md:-translate-y-3"
                    : "bg-[#121212] border border-[#242424] hover:border-gray-600 shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Visual Image Header */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover opacity-60 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {plan.badge && (
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#E5392F] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                      <Star className="w-3 h-3 fill-white text-white" />
                      {plan.badge}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Plan Name & Period */}
                    <div className="mb-4">
                      <h3 className="font-['Anton',sans-serif] text-2xl text-white uppercase tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 min-h-[32px]">{plan.description}</p>
                    </div>

                    {/* Price Display */}
                    <div className="my-4 pb-4 border-b border-[#222222]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-['Anton',sans-serif] text-4xl sm:text-5xl text-white tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#E5392F] uppercase tracking-wider block mt-1">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Plan Inclusions:
                      </span>
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Check
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isFeatured ? "text-[#E5392F]" : "text-gray-400"
                            }`}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <a
                      href={planWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                        isFeatured
                          ? "bg-[#E5392F] hover:bg-[#B92720] text-white shadow-[0_4px_20px_rgba(229,57,47,0.5)] active:scale-95"
                          : "bg-[#1c1c1c] hover:bg-[#252525] text-white border border-gray-700 hover:border-[#E5392F] active:scale-95"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Policy Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#141414] border border-[#242424] max-w-3xl mx-auto flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white block mb-0.5">Registration Policy Note:</span>
            Member registration is a one-time onboarding fee of ₦10,000 for new members. Registration is separate and not included inside the monthly, weekly, or daily membership rates.
          </div>
        </div>
      </div>
    </section>
  );
}
