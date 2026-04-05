import Container from "../ui/Container";
import Button from "../ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
          {/* Left Card: Course Blueprint */}
          <div className="bg-[#0B0F17] p-8 md:p-12 rounded-[32px] border border-white/5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/10 rounded-full w-fit">
              <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              Introducing
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              The Deep Work Blueprint
            </h2>
            <p className="text-gray-500 mb-10 text-sm">
              What extra you will get if you enroll now:
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-gray-600" />
                Bonus: 1:1 coaching session to boost focus.
              </li>
              <li className="flex items-center gap-4 text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-gray-600" />
                Discount: Save 30% when you enroll now!
              </li>
            </ul>
          </div>

          {/* Right Card: Pricing with Gradient Border */}
          <div className="relative p-[1px] rounded-[32px] overflow-hidden group">
            {/* Horizontal Blue Gradient Reflection at Top */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent z-10" />

            <div className="bg-[#0D121D] p-8 md:p-10 rounded-[31px] h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-white text-5xl font-semibold">
                    $349
                  </span>
                   <span className="relative text-gray-600 text-2xl font-medium ml-2 
    after:content-[''] after:absolute after:left-[-10%] after:right-[-10%] 
    after:top-1/2 after:h-[2px] after:bg-red-500 after:rotate-[-15deg] 
    after:rounded-full">
    $500
  </span>
                </div>
                <span className="bg-blue-600 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase">
                  30% off
                </span>
              </div>

              <p className="text-blue-500 text-xs font-medium mb-10">
                30% off until 4d : 2h : 41m : 17s
              </p>

              <ul className="space-y-5 mb-10 flex-grow">
                {[
                  "8h of videos - Step-by-step deep work strategies.",
                  "Templates in Notion - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-gray-400 text-sm leading-snug"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gray-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                className="w-full py-4 text-sm font-bold tracking-wide"
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
