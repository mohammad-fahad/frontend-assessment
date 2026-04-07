"use client";

import Container from "../ui/Container";
import { PromoBadge } from "../ui/PromoBadge";
import Button from "../ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Card from "../ui/Card";

export function CurriculumSection() {
  const [hilightedModule, setHilightedModule] = useState<number | null>(0);
  const modules = [
    {
      id: 1,
      title: "Foundations of Deep Work",
      subtitle: "1.7hrs of video",
      lessons: [
        {
          title: "Understanding Focus & Distraction",
          duration: "14:23",
          preview: true,
        },
        { title: "The Science Behind Deep Work", duration: "22:51" },
        { title: "Identifying Your Productivity Killers", duration: "34:42" },
        { title: "How to Strengthen Your Attention Span", duration: "27:08" },
      ],
    },
    {
      id: 2,
      title: "Building Your Deep Work Routine",
      subtitle: "1.3hrs of video",
      lessons: [],
    },
    {
      id: 3,
      title: "Eliminating Procrastination",
      subtitle: "1.5hrs of video",
      lessons: [],
    },
    {
      id: 4,
      title: "Advanced Focus & Productivity Hacks",
      subtitle: "1.2hrs of video",
      lessons: [],
    },
  ];

  return (
    <section className="py-26 bg-black" id="curriculum">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <PromoBadge>Course Curriculum</PromoBadge>
          <h1 className="text-2xl md:text-5xl font-normal tracking-tight leading-tight py-16 text-white">
            Mastering Deep Work: A Structured <br className="hidden md:block" />
            Path To Peek productivity
          </h1>
        </div>

        {/* Responsive Grid Fix */}
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 my-16">
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-3">
            {modules.map((m, i) => (
              <div key={m.id} className="rounded-[24px] overflow-hidden">
                <div className="flex justify-between items-center p-6 cursor-pointer group">
                  <div>
                    <h3 className="text-white font-medium text-lg">
                      Module {m.id}: {m.title}
                    </h3>
                    <small className="text-gray-400 font-thin">
                      {m.subtitle}
                    </small>
                  </div>
                  {m.id === 1 ? (
                    <ChevronUp
                      className="text-white w-8 h-12"
                      fill="currentColor"
                    />
                  ) : (
                    <ChevronDown
                      className="text-white w-8 h-12"
                      fill="currentColor"
                    />
                  )}
                </div>

                {/* Lesson List with Perfect Borders */}
                {m.id === 1 && (
                  <div className="px-6 pb-6 space-y-2">
                    {m.lessons.map((lesson, idx) => (
                      <div key={idx}>
                        <div className="h-[1px] w-full mb-2 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
                        <div
                          className="flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer"
                          onMouseEnter={() => setHilightedModule(idx)}
                          onMouseLeave={() => setHilightedModule(null)}
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              className={`w-6 h-6 transition-all duration-300 ${hilightedModule === idx || (hilightedModule === null && idx === 0) ? "opacity-100 scale-110" : "opacity-30"}`}
                              src="/assets/Play-Button.png"
                              alt="play"
                              height={24}
                              width={24}
                            />
                            <span
                              className={`text-xs md:text-md  transition-colors ${lesson.preview || hilightedModule === idx ? "text-gray-200" : "text-gray-500"}`}
                            >
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            {lesson.preview && (
                              <span className="text-[8px] md:text-xm lg:text-md  uppercase font-bold text-blue-400 border border-blue-500/60 px-2 py-0.5 sm:mt-0 sm:ms-0 ms-2 mt-8 rounded-full">
                                Preview
                              </span>
                            )}
                            <span
                              className={`text-xs md:text-md font-mono ${lesson.preview || hilightedModule === idx ? "text-gray-200" : "text-gray-500"}`}
                            >
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {i !== modules.length - 1 && (
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1 h-fit">
            <Card className="bg-[#0B0F17] border border-white/10 p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
              <h4 className="text-white font-medium text-xl mb-6">
                Not only video lessons!
              </h4>
              <ul className="space-y-4 mb-8">
                {[
                  "6h of videos - Step-by-step deep work strategies.",
                  "Templates & Trackers – Stay on track effortlessly.",
                  "Live Q&As – Expert guidance & accountability.",
                  "Exclusive Community – Connect with others.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-md text-gray-400"
                  >
                    <Image
                      src="/assets/done-icon.png"
                      alt="Check"
                      width={65}
                      height={65}
                      className="shrink-0 dark:invert-0 invert"
                      loading="lazy"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="primary"
                className="w-full py-4 text-base font-semibold shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                Enroll Now
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
