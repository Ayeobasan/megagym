"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={GYM_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mega Gym on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000" />
        <MessageSquare className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-black/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-800 shadow-xl pointer-events-none">
          Chat with Mega Gym
        </span>
      </a>
    </div>
  );
}

