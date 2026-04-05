import Image from "next/image";
import Container from "../ui/Container";
import { PromoBadge } from "../ui/PromoBadge";

const steps = [
  {
    icon: "/assets/focus-icon.png",
    desc: (
      <>
        Develop laser-sharp focus & <br /> eliminate distractions.
      </>
    ),
  },
  {
    icon: "/assets/productivity-icon.png",
    desc: (
      <>
        Master deep work techniques <br /> for smarter productivity.
      </>
    ),
  },
  {
    icon: "/assets/done-icon.png",
    desc: (
      <>
        Overcome procrastination & <br /> get more done.
      </>
    ),
  },
  {
    icon: "/assets/success-icon.png",
    desc: (
      <>
        Build lasting habits for long- <br /> term success.
      </>
    ),
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="text-center mb-32">
          <div className="my-10">
            <PromoBadge>
              <p>The Deep Work Blueprint</p>
            </PromoBadge>
          </div>
          <h2 className="text-3xl font-medium text-white">
            A self-paced, results-driven <br /> course designed to help you
          </h2>
        </div>

        <div className="relative max-w-xs mx-auto py-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex items-start group pb-20 last:pb-0"
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

              <div className=" ps-12 flex flex-col items-start justify-start">
                <div className="mb-2">
                  <div className="w-42 h-42 flex items-center justify-center rounded-full ">
                    <Image
                      src={step.icon}
                      alt="Icon"
                      width={120}
                      height={94}
                      className="opacity-90group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <div className="text-gray-300 text-[15px] leading-snug font-inter">
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
