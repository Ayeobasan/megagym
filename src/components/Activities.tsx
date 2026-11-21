"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, ArrowUpRight } from "lucide-react";
import { ACTIVITIES, GYM_INFO } from "@/data/gymData";

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
            <Dumbbell className="w-3.5 h-3.5 text-[#E5392F]" />
            TRAINING &amp; PROGRAMMES
          </div>
          <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase mb-6">
            DIVERSE DISCIPLINES. <br />
            <span className="text-[#E5392F]">UNCOMPROMISED EFFORT.</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            From heavy barbell strength training to pulse-racing boxing classes and community Friday games, experience a well-rounded athletic curriculum.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.id}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#242424] hover:border-[#E5392F] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              {/* Image Frame with Overlay */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#E5392F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                  {activity.category}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Anton',sans-serif] text-xl text-white uppercase tracking-wide mb-2 group-hover:text-[#E5392F] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    {activity.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {activity.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#1c1c1c] text-gray-300 px-2 py-0.5 rounded border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={GYM_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#E5392F] hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>Inquire About Class</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
