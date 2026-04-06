import Image from "next/image";
import Container from "../ui/Container";
import { PromoBadge } from "../ui/PromoBadge";

const steps = [
  {
    icon: "/assets/focus-icon.png",
    desc: (
      <>
        Develop laser-sharp focus & <br className="hidden md:block" /> eliminate
        distractions.
      </>
    ),
  },
  {
    icon: "/assets/productivity-icon.png",
    desc: (
      <>
        Master deep work techniques <br className="hidden md:block" /> for
        smarter productivity.
      </>
    ),
  },
  {
    icon: "/assets/done-icon.png",
    desc: (
      <>
        Overcome procrastination & <br className="hidden md:block" /> get more
        done.
      </>
    ),
  },
  {
    icon: "/assets/success-icon.png",
    desc: (
      <>
        Build lasting habits for long- <br className="hidden md:block" /> term
        success.
      </>
    ),
  },
];

export function TimelineSection() {
  return (
    <section className="py-16 bg-black">
      <Container>
        <div className="text-center mb-32">
          <div className="py-16">
            <PromoBadge>
              <p>The Deep Work Blueprint</p>
            </PromoBadge>
          </div>
          <h1 className="text-2xl md:text-5xl py-16 font-normal text-white">
            A self-paced, results-driven <br /> course designed to help you
          </h1>
        </div>

        <div className="relative max-w-xs mx-auto pb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex items-start group pb-16 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full flex flex-col items-center">
                <div className="relative z-10 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

                <div
                  className="w-[2px] h-full"
                  style={{
                    background: "#2563eb",

                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 45%, black 55%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 45%, black 55%, transparent 100%)",
                  }}
                />
              </div>

              <div className=" ps-10 flex flex-col items-start justify-start">
                <div className="">
                  <div className="w-35 h-25 flex items-center justify-start rounded-full -ms-6">
                    <Image
                      src={step.icon}
                      alt="Icon"
                      width={120}
                      height={120}
                      loading="lazy"
                      className="opacity-90group-hover:opacity-100 transition-opacity dark:invert-0 invert group-hover:invert-0"
                    />
                  </div>
                </div>

                <div className="text-gray-300 text-lg leading-snug font-inter">
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
