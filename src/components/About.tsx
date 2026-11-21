import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Flame, Target, MapPin } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0c0c0c] relative overflow-hidden border-y border-[#222222] w-full max-w-full">
      {/* Background Red Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#E5392F]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B92720]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Multi-Image Collage on the Left */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1: Main Facility Shot */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#262626] shadow-xl group">
                <Image
                  src="/images/gym-interior.jpg"
                  alt="Mega Gym Main Floor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5392F] px-2 py-0.5 rounded">
                  Facility Floor
                </span>
              </div>

              {/* Image 2: Dedicated Coach Guidance */}
              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#262626] shadow-xl group translate-y-6">
                <Image
                  src="/images/showcase/coach-training.jpg"
                  alt="Trainer coaching member at Mega Gym"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-black/80 px-2 py-0.5 rounded border border-gray-700">
                  Dedicated Coaching
                </span>
              </div>

              {/* Image 3: Free Weights & Dumbbells */}
              <div className="col-span-2 relative h-48 rounded-2xl overflow-hidden border border-[#262626] shadow-xl group mt-2">
                <Image
                  src="/images/showcase/dumbbells.jpg"
                  alt="Free weights and barbell station"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />

                {/* Floating Real Logo Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/90 backdrop-blur-md border border-[#E5392F]/50 flex items-center justify-between">
                  <div className="relative h-9 w-24">
                    <Image
                      src="/images/logo-dark.png"
                      alt="Mega Gym Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5392F] px-2.5 py-1 rounded">
                    AYOBO, LAGOS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative on the Right */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
              <Target className="w-3.5 h-3.5 text-[#E5392F]" />
              ABOUT MEGA GYM
            </div>

            <h2 className="font-['Anton',sans-serif] text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight mb-6">
              MORE THAN A GYM. <br />
              <span className="text-[#E5392F]">YOUR FITNESS COMMUNITY.</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg mb-8">
              <p>
                Located at <strong className="text-white">14 Camp Davies Road in Ayobo, Lagos</strong>, Mega Gym was established to bring disciplined, results-driven fitness to our community. We believe real progress isn&apos;t built on temporary hype—it is forged through daily consistency, focused effort, and an environment that holds you accountable.
              </p>
              <p>
                Whether you want heavy barbell strength training, energising boxing classes, aerobics, or coach-guided programming, our facility gives you everything you need to transform your body and mindset.
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Consistent Training
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    An open athletic floor operating 7 days a week (Monday – Sunday).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Structured Routines
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Balanced splits targeting upper body, lower body, HIIT &amp; cardio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Group Energy
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Aerobics, boxing, cycling and weekly community Friday games at 6 PM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                <CheckCircle2 className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    Coaching Availability
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Hands-on form guidance included in our ₦30,000 monthly membership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
