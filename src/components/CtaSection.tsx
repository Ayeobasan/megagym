import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function CtaSection() {
  return (
    <section className="py-28 bg-[#0a0606] relative overflow-hidden border-t border-[#222222] w-full max-w-full">
      {/* Background Photography with Deep Red Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/showcase/friday-games.jpg"
          alt="Gym Athletes Training"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5392F]/20 blur-[160px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-red-900/50 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-6 shadow-lg">
          DISCIPLINE • COMMUNITY • RESULTS
        </div>

        <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide uppercase leading-tight mb-6">
          YOUR NEXT CHAPTER <br />
          <span className="text-[#E5392F]">STARTS HERE.</span>
        </h2>

        <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready to make fitness part of your routine? Choose your membership plan, register today, and experience the power of consistent training at Mega Gym.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E5392F] to-[#B92720] hover:from-[#FF3B30] hover:to-[#E5392F] text-white px-9 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_30px_rgba(229,57,47,0.5)] active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>GET STARTED (WhatsApp)</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${GYM_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#171717] hover:bg-[#222222] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm border border-gray-700 hover:border-[#E5392F] transition-all duration-300"
          >
            <Phone className="w-5 h-5 text-[#E5392F]" />
            <span>Call {GYM_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
