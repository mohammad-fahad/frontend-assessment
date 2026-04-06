import Image from "next/image";
import Button from "../ui/Button";
import { PromoBadge } from "../ui/PromoBadge";
import Container from "../ui/Container";
import FadeUp from "../ui/FadeUp";
import { H1, SubText } from "../ui/Typography";

export default function Hero() {
  const promoText = (
    <span className="pl-2  text-gray-300 font-thin">
      30% off until 4d : 2h : 41m : 17s
    </span>
  );
  return (
    <section className="hero-pro-container min-h-screen flex flex-col items-center justify-start py-20 md:py-28  overflow-hidden">
      <Container>
        <div className="hero-glow-mesh" />
        <div className="hero-top-fade" />
        <div className="hero-scanlines" />

        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-center container  mx-auto mb-6">
            <PromoBadge>{promoText}</PromoBadge>
          </div>

          <FadeUp>
            {" "}
            <div className="text-center max-w-[850px] mx-auto mb-8">
              <H1>
                Master Focus & Get <br /> More Done in Less Time
              </H1>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <SubText>
              A step-by-step system to eliminate procrastination, train your
              brain
              <br />
              for deep work, and boost productivity effortlessly.
            </SubText>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="flex justify-center items-center mx-auto gap-6 py-8 md:py-10">
              <Button>Enroll now</Button>

              <Button variant="dark" className="border-white/10">
                Curriculum
              </Button>
            </div>
          </FadeUp>

          <div className="relative aspect-video w-full max-w-[90vw] md:max-w-[70vw]  mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.3)] bg-black/40 my-10 md:my-10">
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
      </Container>
    </section>
  );
}
