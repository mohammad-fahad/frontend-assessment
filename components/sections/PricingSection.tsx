"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import { PromoBadge } from "../ui/PromoBadge";

export function PricingSection() {
  const bonusItems = [
    {
      id: 1,
      text: "Bonus: 1:1 coaching session to boost focus.",
    },
    {
      id: 2,
      text: "Discount: Save 30% when you enroll now!",
    },
  ];
  return (
    <section className="py-16 bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
          {/* Left Card: Course Blueprint */}
          <div className="bg-[#0B0F17] p-8 md:p-12 rounded-[32px] border border-white/5 flex flex-col justify-center">
            <div className="my-8">
              <PromoBadge> Introducing</PromoBadge>
            </div>
            <h1 className="text-2xl md:text-5xl font-normal text-white mb-4">
              The Deep Work Blueprint
            </h1>
            <p className="text-gray-300 mb-10 text-lg">
              What extra you will get if you enroll now:
            </p>

            <ul className="">
              {bonusItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-1 text-gray-400 dark:text-gray-400 text-md"
                >
                  <Image
                    src={"/assets/white-plus.png"}
                    alt="Plus"
                    width={80}
                    height={80}
                    className="shrink-0 dark:invert-0 invert"
                    loading="lazy"
                  />

                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: Pricing with Gradient Border */}
          <div className="card-border-glow group h-full">
            <div className="bg-[#0D121D] p-8 md:p-10 rounded-[31px] h-full flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-white text-2xl md:text-5xl font-normal">
                    $349
                  </span>
                  <span
                    className="relative text-gray-600 text-xl md:text-3xl font-medium md:ml-2 
          after:content-[''] after:absolute after:left-[-10%] after:right-[-10%] 
          after:top-1/2 after:h-[2px] after:bg-red-500 after:rotate-[-170deg] 
          after:rounded-full"
                  >
                    $500
                  </span>
                </div>
                <span className="bg-blue-600 text-xs md:text-sm font-normal text-white px-3 py-1 rounded-md uppercase">
                  30% off
                </span>
              </div>

              <p className="text-gray-300 text-lg font-normal mb-10">
                30% off until{" "}
                <span className="text-gray-300">4d : 2h : 41m : 17s</span>
              </p>

              <ul className="mb-6 flex-grow space-y-6">
                {[
                  "8h of videos - Step-by-step deep work strategies.",
                  "Templates in Notion - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-400 text-md leading-snug"
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
                className="w-full py-4 text-sm font-bold tracking-wide bg-blue-600 hover:bg-blue-500 rounded-2xl text-white transition-all active:scale-[0.98]"
              >
                Enroll now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
