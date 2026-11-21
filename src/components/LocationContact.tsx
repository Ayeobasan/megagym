"use client";

import React, { useState } from "react";
import { MapPin, Phone, MessageSquare, Clock, Instagram, ExternalLink, Send } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function LocationContact() {
  const [formName, setFormName] = useState("");
  const [formGoal, setFormGoal] = useState("General Fitness");
  const [formPlan, setFormPlan] = useState("Monthly Membership with Coach (₦30,000)");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Mega Gym! My name is ${formName || "a new member"}. I am interested in ${formGoal} and would like to join the ${formPlan}. Please give me more information on how to get started!`;
    const targetUrl = `https://wa.me/${GYM_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0c0c] relative border-t border-[#222222]">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#E5392F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#E5392F]" />
            FIND US IN AYOBO, LAGOS
          </div>
          <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase mb-6">
            LOCATION &amp; <span className="text-[#E5392F]">GET IN TOUCH</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Stop by for a workout session or send us a quick WhatsApp message. We are ready to help you begin your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Quick WhatsApp Form */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#242424] shadow-xl space-y-5">
              {/* Full Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5392F]/20 border border-[#E5392F]/40 flex items-center justify-center flex-shrink-0 text-[#E5392F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Gym Location
                  </h4>
                  <p className="text-sm font-semibold text-white leading-relaxed">
                    {GYM_INFO.address}
                  </p>
                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5392F] hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & Direct Call */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
                <div className="w-10 h-10 rounded-xl bg-[#E5392F]/20 border border-[#E5392F]/40 flex items-center justify-center flex-shrink-0 text-[#E5392F]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Direct Phone / Calls
                  </h4>
                  <a
                    href={`tel:${GYM_INFO.phone}`}
                    className="text-lg font-bold text-white hover:text-[#E5392F] transition-colors"
                  >
                    {GYM_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">Click to call Mega Gym desk</p>
                </div>
              </div>

              {/* Operating Days */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0 text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Operating Days
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    {GYM_INFO.operatingDays}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {GYM_INFO.operatingHoursNote}
                  </p>
                </div>
              </div>

              {/* Instagram Notice */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#222222]">
                <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-gray-800 flex items-center justify-center flex-shrink-0 text-gray-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Official Instagram
                  </h4>
                  <p className="text-xs text-gray-400">
                    Official social media handle to be confirmed by gym management.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Box */}
            <form
              onSubmit={handleFormSubmit}
              className="p-6 rounded-2xl bg-[#141414] border border-[#242424] shadow-xl"
            >
              <h4 className="font-['Anton',sans-serif] text-xl text-white uppercase tracking-wide mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#E5392F]" />
                Fast WhatsApp Enquiry
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Fill this quick form to send a pre-formatted message directly to Mega Gym WhatsApp.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-black/60 border border-[#333] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#E5392F]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formGoal}
                    onChange={(e) => setFormGoal(e.target.value)}
                    className="w-full bg-black/60 border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E5392F]"
                  >
                    <option value="Strength & Muscle Building">Strength &amp; Muscle Building</option>
                    <option value="Weight Loss & Aerobics">Weight Loss &amp; Aerobics</option>
                    <option value="Boxing & Combat Fitness">Boxing &amp; Combat Fitness</option>
                    <option value="General Fitness & Health">General Fitness &amp; Health</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Preferred Membership
                  </label>
                  <select
                    value={formPlan}
                    onChange={(e) => setFormPlan(e.target.value)}
                    className="w-full bg-black/60 border border-[#333] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E5392F]"
                  >
                    <option value="Monthly Membership with Coach (₦30,000)">
                      Monthly Membership with Coach (₦30,000)
                    </option>
                    <option value="Weekly Membership (₦20,000 Fri-Sun)">
                      Weekly Membership (₦20,000 Fri-Sun)
                    </option>
                    <option value="Daily Drop-In (₦4,000)">Daily Drop-In (₦4,000)</option>
                    <option value="Registration Only (₦10,000)">Registration Only (₦10,000)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-3 px-4 bg-gradient-to-r from-[#E5392F] to-[#B92720] hover:from-[#FF3B30] hover:to-[#E5392F] text-white font-bold uppercase tracking-wider text-xs rounded-lg transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(229,57,47,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Interactive Google Map Container */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="rounded-2xl overflow-hidden border-2 border-[#242424] bg-[#141414] shadow-2xl flex-1 flex flex-col">
              <div className="p-4 bg-black/80 border-b border-[#242424] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5392F]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Mega Gym Ayobo Map View
                  </span>
                </div>
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#E5392F] hover:underline flex items-center gap-1"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="relative w-full h-[380px] sm:h-[450px] bg-[#121212]">
                <iframe
                  title="Mega Gym Ayobo Location Map"
                  src={GYM_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-black/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-400">
                <span>14 Camp Davies Rd, Ayobo, Lagos 102213, Lagos, Nigeria</span>
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E5392F] font-bold uppercase tracking-wider"
                >
                  Get Route on Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
