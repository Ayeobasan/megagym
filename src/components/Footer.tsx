import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] text-gray-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1a1a1a]">
          {/* Brand Info with Real Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative h-12 w-32">
              <Image
                src="/images/logo-dark.png"
                alt="Mega Gym Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-gray-400 leading-relaxed">
              {GYM_INFO.tagline} A modern, energetic fitness destination committed to disciplined strength training, cardio conditioning, and supportive community workouts in Ayobo, Lagos.
            </p>

            {/* Clean Contact Details — Zero Emojis, Pure SVG Icons */}
            <div className="text-xs text-gray-300 space-y-2 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <a href={`tel:${GYM_INFO.phone}`} className="hover:text-white transition-colors">
                  {GYM_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
                <span>Operating Days: {GYM_INFO.operatingDays}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Anton',sans-serif] text-base text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="hover:text-[#E5392F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#E5392F] transition-colors">
                  About Mega Gym
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-[#E5392F] transition-colors">
                  Training Programme
                </Link>
              </li>
              <li>
                <Link href="#membership" className="hover:text-[#E5392F] transition-colors">
                  Membership &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="#activities" className="hover:text-[#E5392F] transition-colors">
                  Workout Activities
                </Link>
              </li>
              <li>
                <Link href="#facility" className="hover:text-[#E5392F] transition-colors">
                  Facility Tour
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-[#E5392F] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#E5392F] transition-colors">
                  Location &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Pricing Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Anton',sans-serif] text-base text-white uppercase tracking-wider">
              Membership Overview
            </h4>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-[#111] border border-gray-800">
                <span className="text-gray-300 font-semibold block">Registration</span>
                <span className="text-white font-bold">₦10,000 (one-time)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#1a0f0f] border border-[#E5392F]/40">
                <span className="text-gray-300 font-semibold block">Monthly (with Coach)</span>
                <span className="text-[#E5392F] font-bold">₦30,000 / month</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#111] border border-gray-800">
                <span className="text-gray-300 font-semibold block">Weekly (Fri–Sun)</span>
                <span className="text-white font-bold">₦20,000 / week</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#111] border border-gray-800">
                <span className="text-gray-300 font-semibold block">Daily Drop-In</span>
                <span className="text-gray-400 font-bold">₦4,000 / day</span>
              </div>
            </div>
          </div>

          {/* Fast WhatsApp Chat */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-['Anton',sans-serif] text-base text-white uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-gray-400">
              Message us directly on WhatsApp for onboarding inquiries.
            </p>
            <a
              href={GYM_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E5392F] hover:bg-[#B92720] text-white font-bold uppercase tracking-wider text-xs px-4 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          <p>© {new Date().getFullYear()} MEGA GYM — 14 Camp Davies Rd, Ayobo, Lagos, Nigeria.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#E5392F]">Identity: Black &amp; Athletic Red</span>
            <a
              href="#hero"
              className="p-2 rounded-full bg-[#141414] hover:bg-[#222222] text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
