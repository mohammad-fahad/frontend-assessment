"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { PromoBadge } from "../ui/PromoBadge";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    type: "text",
    content:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    avatar: "/assets/Avatar.png",
  },
  {
    id: 2,
    name: "Daniel Foster",
    avatar: "/assets/Avatar-1.png",
    role: "Content creator",
    type: "video",
    content: null,
    thumbnail: "/assets/carousel-1.png",
    hasPlayButton: true,
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    type: "text",
    content:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    avatar: "/assets/Avatar-2.png",
  },
  {
    id: 4,
    name: "Tom David",
    avatar: "/assets/Avatar-3.png",
    role: "Entrepreneur",
    type: "video",
    content: null,
    thumbnail: "/assets/carousel-2.png",
    hasPlayButton: true,
  },
  {
    id: 5,
    name: "David Brown",
    avatar: "/assets/Avatar-4.png",
    role: "Software Developer",
    type: "text",
    content:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      {/* 1. Standard Centered Container for Header and Nav */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="mx-atuo text-center mb-12">
          <PromoBadge>Testimonials</PromoBadge>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight">
            Real Results from <br /> Real People
          </h2>
        </div>
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-6">
            <p className="text-zinc-300 text-2xl">
              Join with 5K other students
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mb-2">
            <button
              onClick={scrollPrev}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 2. The Carousel with the "Bleed-to-Right" Effect */}
        {/* Negative margin on the right allows cards to go off-page */}
        <div className="-mr-[100vw]">
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_320px] md:flex-[0_0_420px] min-w-0"
                >
                  <div className="relative h-[500px] md:h-[580px] rounded-[40px] bg-[#111111] border border-white/5 p-10 flex flex-col justify-between group overflow-hidden">
                    {/* Card Body */}
                    <div className="relative z-20">
                      <Image
                        src={item.avatar}
                        className="w-12 h-12 rounded-full border border-white/10 mb-8"
                        alt="avatar"
                            width={48}
                            height={48}
                        loading="lazy"
                      />
                      {item.type === "text" && (
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                          {item.content}
                        </p>
                      )}
                    </div>

                    {/* Video Card Layer */}
                    {item.type === "video" && (
                      <>
                        <Image
                          src={item.thumbnail!}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                          alt="Thumbnail"
                          loading="lazy"
                         fill
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-30">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-2xl group-hover:scale-110 transition">
                            <Play
                              fill="currentColor"
                              size={28}
                              className="ml-1"
                            />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                      </>
                    )}

                    {/* Footer Info */}
                    <div className="relative z-20">
                      <h4 className="text-xl font-medium text-white">
                        {item.name}
                      </h4>
                      <p className="text-zinc-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
