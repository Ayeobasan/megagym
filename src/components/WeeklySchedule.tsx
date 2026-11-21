"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Flame, ChevronRight, Info } from "lucide-react";
import { WEEKLY_SCHEDULE, GYM_INFO } from "@/data/gymData";

export default function WeeklySchedule() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const activeDay = WEEKLY_SCHEDULE[selectedDayIndex];

  return (
    <section id="schedule" className="py-24 bg-[#0c0c0c] relative border-t border-[#222222]">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5392F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#E5392F]" />
            STRUCTURED TIMETABLE
          </div>
          <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase mb-6">
            WEEKLY WORKOUT <span className="text-[#E5392F]">PROGRAMME</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Train with a disciplined curriculum. Every day has a dedicated focus so you build balanced strength, stamina, and agility.
          </p>
        </div>

        {/* Day Selector Buttons / Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {WEEKLY_SCHEDULE.map((item, index) => {
            const isSelected = selectedDayIndex === index;
            const isSunday = item.shortDay === "SUN";

            return (
              <button
                key={item.day}
                onClick={() => setSelectedDayIndex(index)}
                className={`flex-shrink-0 px-4 sm:px-6 py-3 rounded-xl font-['Anton',sans-serif] tracking-wider text-sm uppercase transition-all duration-200 flex flex-col items-center gap-1 ${
                  isSelected
                    ? "bg-[#E5392F] text-white shadow-[0_4px_25px_rgba(229,57,47,0.5)] scale-105"
                    : "bg-[#141414] hover:bg-[#1f1f1f] text-gray-400 hover:text-white border border-[#242424]"
                }`}
              >
                <span className="text-base sm:text-lg leading-none">{item.shortDay}</span>
                <span className="text-[10px] font-sans font-normal opacity-80">
                  {isSunday ? "Open Gym" : "Routine"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Detail Card with Visual Image Header */}
        <div className="max-w-4xl mx-auto bg-[#141414] border-2 border-[#242424] rounded-2xl overflow-hidden shadow-2xl">
          {/* Visual Day Hero Banner */}
          <div className="relative h-48 sm:h-56 w-full">
            <Image
              src={activeDay.image}
              alt={activeDay.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/70 to-transparent" />

            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#E5392F] px-2.5 py-0.5 rounded shadow">
                    {activeDay.timeNote}
                  </span>
                  {activeDay.highlight && (
                    <span className="text-xs font-semibold text-gray-300 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded">
                      <Flame className="w-3.5 h-3.5 text-[#E5392F]" />
                      {activeDay.highlight}
                    </span>
                  )}
                </div>
                <h3 className="font-['Anton',sans-serif] text-2xl sm:text-4xl text-white uppercase tracking-wide">
                  {activeDay.day} — {activeDay.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-black/80 px-3 py-1.5 rounded-lg border border-gray-800 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-[#E5392F]" />
                <span>Full Access Plan</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Activities List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {activeDay.activities.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-black/70 border border-[#222222] hover:border-[#E5392F]/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E5392F]/20 border border-[#E5392F]/40 flex items-center justify-center flex-shrink-0 text-[#E5392F] font-bold text-xs">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {activity}
                  </span>
                </div>
              ))}
            </div>

            {/* Sunday Note or Workout Context */}
            {activeDay.shortDay === "SUN" ? (
              <div className="p-4 rounded-xl bg-[#1c1212] border border-[#E5392F]/40 flex items-start gap-3 text-xs text-gray-300">
                <Info className="w-5 h-5 text-[#E5392F] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-0.5 text-white">Sunday Operating Schedule:</strong>
                  Mega Gym operates Monday through Sunday. On Sunday, our facility is open for independent workouts, cardio, and active recovery. Official programmed class hours will be confirmed soon by management.
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/60 border border-gray-800">
                <p className="text-xs text-gray-400">
                  Want coach guidance during {activeDay.day}&apos;s workout session?
                </p>
                <a
                  href={GYM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5392F] hover:text-white transition-colors"
                >
                  Inquire on WhatsApp <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
