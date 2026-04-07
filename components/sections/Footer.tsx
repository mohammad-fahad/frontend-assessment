import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import Card from "../ui/Card";

export function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-black border-t border-white/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          {/* Logo & Info */}
          <div>
            <h1 className="text-white text-2xl md:text-5xl font-normal mb-2">
              The Deep <br className="hidden md:block" /> Work Blueprint
            </h1>
            <p className="text-gray-600 text-sm">
              Master Focus & Get More Done In Less Time.
            </p>
          </div>

          {/* Blue CTA Card */}
          <Card className="relative bg-blue-600 w-full md:w-[320px] aspect-[1.8/1] md:aspect-auto md:h-[180px] p-8 rounded-[32px] flex flex-col justify-between group cursor-pointer hover:bg-blue-700 transition-all overflow-hidden">
            {/* Top Row: Avatars and Arrow Button */}
            <div className="flex items-center justify-between w-full -mt-2">
              {/* Avatars Stacked */}
              <div className="flex -space-x-3 ">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 overflow-hidden bg-blue-500"
                  >
                    <img
                      src={`/assets/avatar${i}.png`}
                      className="w-full h-full object-cover"
                      alt="user"
                    />
                  </div>
                ))}
              </div>

              {/* White Arrow Circle */}
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowRight className="text-blue-600 w-5 h-5" />
              </div>
            </div>

            {/* Bottom Row: Text */}
            <div className="mt-auto">
              <p className="text-white text-md font-thin leading-tight">
                Join with 5Kother students
              </p>
            </div>
          </Card>
        </div>
        <div className="relative top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent z-10" />
        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Term & conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Refund policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
          <p className="text-gray-600 order-2 md:order-1 text-[11px]">
            © Copyright 2024, All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
