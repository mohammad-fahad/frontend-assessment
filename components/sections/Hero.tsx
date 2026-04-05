import Image from "next/image";
import Button from "../ui/Button";
import { PromoBadge } from "../ui/PromoBadge";

export default function Hero() {
  const promoText = (
    <>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />

      <span className="pl-2  text-gray-300 font-thin">
        30% off until 4d : 2h : 41m : 17s
      </span>
    </>
  );
  return (
    <section className="hero-pro-container min-h-screen flex flex-col items-center justify-start pt-32 pb-24  overflow-hidden">
      <div className="hero-glow-mesh" />
      <div className="hero-top-fade" />
      <div className="hero-scanlines" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="text-center container  mx-auto mb-6">
          <PromoBadge>{promoText}</PromoBadge>
        </div>

        <div className="text-center max-w-[850px] mx-auto mb-8">
          <h1 className="text-4xl md:text-[52px] font-semibold leading-tight text-white mb-6 tracking-tight">
            Master Focus & Get <br className="hidden md:block" /> More Done in
            Less Time
          </h1>

          <p className="text-[#a1a1aa] text-lg md:text-[17px] px-8 md:px-0 max-w-[600px] mx-auto leading-relaxed">
            A step-by-step system to eliminate procrastination, train your brain
            <br />
            for deep work, and boost productivity effortlessly.
          </p>
        </div>

        <div className="flex justify-center items-center mx-auto gap-4 mb-16">
          <Button>Enroll now</Button>

          <Button variant="dark" className="border-white/10">
            Curriculum
          </Button>
        </div>

        <div className="relative aspect-video w-full max-w-[90vw] md:max-w-[70vw]  mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.3)] bg-black/40">
          <Image
            src="/assets/hero-video.png"
            fill
            alt="Hero Video Preview"
            className="object-cover opacity-90"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-600 border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
