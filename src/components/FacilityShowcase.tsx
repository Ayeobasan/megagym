import React from "react";
import Image from "next/image";
import { Dumbbell, Shield, Flame, Users, ArrowUpRight } from "lucide-react";
import { GYM_INFO } from "@/data/gymData";

const facilityHighlights = [
  {
    title: "Heavy Barbell & Iron Arena",
    category: "Strength Zone",
    image: "/images/gym-interior.jpg",
    description: "Olympic racks, bumper plates, power benches, and deadlift platforms.",
  },
  {
    title: "Dumbbells & Free Weights",
    category: "Conditioning Zone",
    image: "/images/showcase/dumbbells.jpg",
    description: "Full progression dumbbells from warm-ups to heavy presses.",
  },
  {
    title: "Combat & Boxing Enclosure",
    category: "Combat Zone",
    image: "/images/showcase/boxing.jpg",
    description: "Heavy bags, focus pads, and combat conditioning circuits.",
  },
  {
    title: "Cardio & Treadmill Gallery",
    category: "Endurance Zone",
    image: "/images/showcase/cardio-treadmill.jpg",
    description: "Commercial treadmills, spin bikes, and jump rope tracks.",
  },
];

export default function FacilityShowcase() {
  return (
    <section id="facility" className="py-20 bg-[#0a0a0a] relative border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-3">
              <Dumbbell className="w-3.5 h-3.5 text-[#E5392F]" />
              FACILITY TOUR
            </div>
            <h2 className="font-['Anton',sans-serif] text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight">
              INSIDE <span className="text-[#E5392F]">MEGA GYM</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md">
            Built for raw athleticism. Take a visual walkthrough of our equipment zones and functional workout floor in Ayobo.
          </p>
        </div>

        {/* 4 Big Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilityHighlights.map((item, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden bg-[#141414] border border-[#222222] hover:border-[#E5392F] transition-all duration-300 shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5392F] px-2.5 py-1 rounded-md shadow">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-['Anton',sans-serif] text-xl text-white uppercase tracking-wide mb-1.5 group-hover:text-[#E5392F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

