"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, ZoomIn, AlertCircle } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gymData";

const categories = ["All", "Strength", "Combat", "Cardio", "Community", "Coaching"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const filteredImages =
    activeCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-red-900/40 text-xs font-bold uppercase tracking-widest text-[#E5392F] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#E5392F]" />
            TRAINING ATMOSPHERE
          </div>
          <h2 className="font-['Anton',sans-serif] text-4xl sm:text-6xl text-white tracking-wide uppercase mb-6">
            PHOTO <span className="text-[#E5392F]">GALLERY</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Explore our training floor, heavy barbell stations, combat ring, and community workouts.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#E5392F] text-white shadow-[0_0_15px_rgba(229,57,47,0.4)]"
                  : "bg-[#141414] text-gray-400 hover:text-white border border-[#242424]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid (Expanded to 9 high-res images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => {
                setSelectedImage(img.src);
                setSelectedTitle(img.title);
              }}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-[#141414] border border-[#242424] hover:border-[#E5392F] transition-all duration-300 shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5392F] px-2 py-0.5 rounded">
                    {img.category}
                  </span>
                  <h4 className="font-['Anton',sans-serif] text-lg text-white uppercase tracking-wide mt-1.5">
                    {img.title}
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#E5392F] text-white flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Temporary Stock Photography Notice */}
        <div className="mt-12 max-w-2xl mx-auto p-3.5 rounded-xl bg-[#141414] border border-[#242424] flex items-center justify-center gap-2.5 text-xs text-gray-400 text-center">
          <AlertCircle className="w-4 h-4 text-[#E5392F] flex-shrink-0" />
          <span>
            Curated visual placeholders shown. Authentic Mega Gym interior &amp; community member photos will be updated once uploaded.
          </span>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#E5392F] p-2 bg-black/60 rounded-full transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border-2 border-[#242424]">
                <Image
                  src={selectedImage}
                  alt={selectedTitle}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-gray-200 uppercase tracking-wider font-['Anton',sans-serif]">
                {selectedTitle}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
