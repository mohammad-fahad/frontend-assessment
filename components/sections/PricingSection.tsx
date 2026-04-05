"use client";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

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
                {" "}
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77733 0.284763L12.2773 2.9381L12.3413 2.9801L12.4033 3.0321L12.474 3.08143C12.724 3.26873 12.9302 3.50834 13.078 3.78354C13.2258 4.05874 13.3118 4.36289 13.33 4.67476L13.3333 4.81076V9.66676C13.3333 10.4501 12.9047 11.1708 12.2513 11.5288L7.71533 14.3968C7.062 14.7554 6.27133 14.7554 5.582 14.3754L1.11867 11.5508C0.780667 11.3656 0.498563 11.0931 0.301793 10.7617C0.105023 10.4303 0.000800044 10.0522 0 9.66676V4.8101C0 4.07276 0.38 3.39143 0.984 3.00676L5.61733 0.274763C6.284 -0.0932374 7.09333 -0.0932374 7.77733 0.284763ZM6.66667 4.66543C6.48986 4.66543 6.32029 4.73567 6.19526 4.86069C6.07024 4.98572 6 5.15528 6 5.3321V6.66543H4.66667C4.50338 6.66545 4.34577 6.7254 4.22375 6.83391C4.10173 6.94241 4.02377 7.09193 4.00467 7.2541L4 7.3321C4 7.50891 4.07024 7.67848 4.19526 7.8035C4.32029 7.92852 4.48986 7.99876 4.66667 7.99876H6V9.3321C6.00002 9.49539 6.05997 9.65299 6.16848 9.77501C6.27698 9.89703 6.4265 9.97499 6.58867 9.9941L6.66667 9.99876C6.84348 9.99876 7.01305 9.92853 7.13807 9.8035C7.26309 9.67848 7.33333 9.50891 7.33333 9.3321V7.99876H8.66667C8.82996 7.99874 8.98756 7.93879 9.10958 7.83029C9.2316 7.72178 9.30956 7.57226 9.32867 7.4101L9.33333 7.3321C9.33333 7.15529 9.26309 6.98572 9.13807 6.86069C9.01305 6.73567 8.84348 6.66543 8.66667 6.66543H7.33333V5.3321C7.33331 5.16881 7.27336 5.0112 7.16486 4.88918C7.05635 4.76716 6.90683 4.6892 6.74467 4.6701L6.66667 4.66543Z"
                    fill="white"
                  />
                </svg>
                Bonus: 1:1 coaching session to boost focus.
              </li>
              <li className="flex items-center gap-4 text-gray-300 text-sm">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.77733 0.284763L12.2773 2.9381L12.3413 2.9801L12.4033 3.0321L12.474 3.08143C12.724 3.26873 12.9302 3.50834 13.078 3.78354C13.2258 4.05874 13.3118 4.36289 13.33 4.67476L13.3333 4.81076V9.66676C13.3333 10.4501 12.9047 11.1708 12.2513 11.5288L7.71533 14.3968C7.062 14.7554 6.27133 14.7554 5.582 14.3754L1.11867 11.5508C0.780667 11.3656 0.498563 11.0931 0.301793 10.7617C0.105023 10.4303 0.000800044 10.0522 0 9.66676V4.8101C0 4.07276 0.38 3.39143 0.984 3.00676L5.61733 0.274763C6.284 -0.0932374 7.09333 -0.0932374 7.77733 0.284763ZM6.66667 4.66543C6.48986 4.66543 6.32029 4.73567 6.19526 4.86069C6.07024 4.98572 6 5.15528 6 5.3321V6.66543H4.66667C4.50338 6.66545 4.34577 6.7254 4.22375 6.83391C4.10173 6.94241 4.02377 7.09193 4.00467 7.2541L4 7.3321C4 7.50891 4.07024 7.67848 4.19526 7.8035C4.32029 7.92852 4.48986 7.99876 4.66667 7.99876H6V9.3321C6.00002 9.49539 6.05997 9.65299 6.16848 9.77501C6.27698 9.89703 6.4265 9.97499 6.58867 9.9941L6.66667 9.99876C6.84348 9.99876 7.01305 9.92853 7.13807 9.8035C7.26309 9.67848 7.33333 9.50891 7.33333 9.3321V7.99876H8.66667C8.82996 7.99874 8.98756 7.93879 9.10958 7.83029C9.2316 7.72178 9.30956 7.57226 9.32867 7.4101L9.33333 7.3321C9.33333 7.15529 9.26309 6.98572 9.13807 6.86069C9.01305 6.73567 8.84348 6.66543 8.66667 6.66543H7.33333V5.3321C7.33331 5.16881 7.27336 5.0112 7.16486 4.88918C7.05635 4.76716 6.90683 4.6892 6.74467 4.6701L6.66667 4.66543Z"
                    fill="white"
                  />
                </svg>
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
                  <span
                    className="relative text-gray-600 text-2xl font-medium ml-2 
    after:content-[''] after:absolute after:left-[-10%] after:right-[-10%] 
    after:top-1/2 after:h-[2px] after:bg-red-500 after:rotate-[-15deg] 
    after:rounded-full"
                  >
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

              <ul className="space-y-5 mb-10 flex-grow ">
                {[
                  "8h of videos - Step-by-step deep work strategies.",
                  "Templates in Notion - Stay on track effortlessly.",
                  "Live Q&As - Expert guidance & accountability.",
                  "Exclusive Community - Connect with others.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-gray-400 text-sm leading-snug"
                  >
                    <Image
                      src="/assets/done-icon.png"
                      alt="Check"
                      width={60}
                      height={60}
                      className="shrink-0"
                      priority
                    />
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
