"use client";

import Container from "../ui/Container";
import { PromoBadge } from "../ui/PromoBadge";
import  Button  from "../ui/Button";
import { ChevronDown, PlayCircle, FileText, CheckCircle2, ChevronUp } from "lucide-react";
import Image from "next/image";

export function CurriculumSection() {
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
    <section className="py-24 bg-black">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <PromoBadge>Course Curriculum</PromoBadge>
          <h2 className="text-2xl md:text-5xl f text-white my-12 tracking-tight">
            Mastering Deep Work: A Structured <br className="hidden md:block" />
            Path To Peek productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-28">
          <div className="lg:col-span-2 space-y-3">
            {modules.map((m) => (
              <div key={m.id} className=" rounded-[24px] overflow-hidden ">
                <div className="flex justify-between items-center p-6 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        Module {m.id} {m.title}
                      </h3>
                      <small className="text-gray-400 font-thin">
                        {m.subtitle}
                      </small>
                    </div>
                  </div>

                  {m.id !== 1 ? (
                    <ChevronDown className="text-white/40 w-5 h-5 " />
                  ) : (
                    <ChevronUp className="text-white/40 w-5 h-5 " />
                  )}
                </div>

                {m.id !== 1 && (
                  <div className="h-[1px] w-full mb-5  bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                )}

                {m.id === 1 && (
                  <div className="px-6 pb-6 space-y-3 ">
                    {m.lessons.map((lesson, i) => (
                      <div key={i}>
                        <div className="h-[1px] w-full mb-5  bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                        <div
                          className={`flex items-center justify-between p-4 rounded-xl transition-all  `}
                        >
                          <div className="flex items-center gap-3 ">
                            <Image
                              className={`w-6 h-6 text-blue-500 items-stretch ${i === 0 ? "opacity-100" : "opacity-30"}`}
                              priority
                              src="/assets/Play-Button.png"
                              alt="play button"
                              height={10}
                              width={10}
                            />

                            <span
                              className={`text-sm ${lesson.preview ? "text-gray-200" : "text-gray-400"}`}
                            >
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-4">
                            {lesson.preview && (
                              <span className="text-[10px] uppercase font-bold text-blue-400 border border-blue-500/40 px-2 py-0.5 rounded-full">
                                Preview
                              </span>
                            )}

                            <span className="text-xs text-gray-500 font-mono">
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {m.id === 1 && (
                  <div className="h-[1px] w-full mb-5  bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Right: Pricing Card */}
          <div className=" h-fit ">
            <div className="bg-[#0B0F17] border border-white/10 p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
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
                    className="flex items-center gap-3 text-sm text-gray-400"
                  >
                    <CheckCircle2 className="text-blue-500 w-4 h-4 shrink-0" />{" "}
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
