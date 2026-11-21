import React from "react";
import { WHY_CHOOSE_US, GYM_INFO } from "@/data/gymData";
import { Flame, Trophy } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0a0a0a] relative border-t border-[#222222]">
      {/* Background glow elements */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#E5392F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
              <Trophy className="w-3.5 h-3.5 text-[#E5392F]" />
              THE MEGA GYM ADVANTAGE
            </div>

            <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase leading-tight mb-6">
              WHY JOIN <br />
              <span className="text-[#E5392F]">MEGA GYM?</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed mb-8">
              We eliminate guesswork with intentional programming, supportive coaching, and a driven community that welcomes beginners and athletes alike.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a0f0f] to-[#121212] border-2 border-[#E5392F]/40 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-6 h-6 text-[#E5392F]" />
                <h4 className="font-['Anton',sans-serif] text-xl text-white uppercase tracking-wide">
                  Ready to Start Training?
                </h4>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Walk in for a ₦4,000 day pass, enroll in the ₦20,000 weekend plan, or unlock full coach guidance with our ₦30,000 monthly membership.
              </p>
              <a
                href={GYM_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 bg-[#E5392F] hover:bg-[#B92720] text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-transform active:scale-95 shadow-[0_4px_15px_rgba(229,57,47,0.4)]"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Column: Key Differentiators */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#E5392F]/60 transition-all duration-300 group flex items-start gap-5 shadow-lg"
              >
                <span className="font-['Anton',sans-serif] text-3xl sm:text-4xl text-[#E5392F] transition-colors leading-none">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-['Anton',sans-serif] text-xl text-white uppercase tracking-wide mb-2 group-hover:text-[#E5392F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
