import Image from "next/image";
import Container from "../ui/Container";
import { PromoBadge } from "../ui/PromoBadge";
import { H1 } from "../ui/Typography";

export function ProblemSection() {
  const promoText = (
    <>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <span className="pl-2  text-gray-300 font-thin ">
        Are Distractions Holding You Back?
      </span>
    </>
  );

  const problemText2 = (
    <>
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <span className="pl-2  text-gray-300 font-thin ">No Worries</span>
    </>
  );

  return (
    <section className="py-16 bg-black text-center">
      <Container>
        <div className="mt-6">
          <PromoBadge>{promoText}</PromoBadge>
        </div>
        <div className="py-16">
          <H1>
            If you struggle to focus, feel overwhelmed
            <br className="hidden md:block" /> by end
            <span className="text-gray-600">
              less tasks, or procrastinate instead
              <br className="hidden md:block" /> of making progress, you're not
              alone.
            </span>
          </H1>
        </div>

        <div className="flex justify-center space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className=" overflow-hidden bg-gray-800 ">
              <img
                src={`/assets/avatar${i}.png`}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-2 p-3 md:p-6 rounded-[40px] items-stretch mt-20">
          <div className="relative hidden md:flex aspect-auto lg:aspect-auto min-h-[80vh] rounded-[32px] overflow-hidden">
            <Image
              src="/assets/problem-image.png"
              alt="Man working on laptop"
              fill
              sizes="100%"
              className="object-top object-cover shadow-lg"
              priority
            />
          </div>

          <div className="relative flex flex-col justify-between p-6 md:p-10 lg:p-12 bg-[#080B12] rounded-[32px] border border-white/5 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 w-full mb-20">
              <PromoBadge>{problemText2}</PromoBadge>

              <div className="flex flex-col items-start sm:items-end gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0B0F17] overflow-hidden bg-zinc-800"
                    >
                      <Image
                        src={`/assets/small-avatar${i}.png`}
                        alt="student"
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-zinc-500 font-medium">
                  Join with 5K other students
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-end min-h-[400px] md:h-[36vh] w-full">
              <div className="max-w-md text-start">
                <p className="text-lg md:text-xl text-zinc-400 mb-6 md:mb-12 leading-relaxed font-light">
                  The ability to concentrate <br className="hidden md:block" />
                  deeply is the ultimate <br className="hidden md:block" />
                  productivity hack.
                </p>
                <h1 className="text-2xl md:text-4xl  text-white leading-tight">
                  And fortunately it's <br className="hidden md:block" /> a
                  skill you can train <br className="hidden md:block" /> &
                  develop.
                </h1>
              </div>

              <div className="relative md:absolute md:bottom-10 md:right-10 flex flex-row md:flex-col gap-3 h-auto">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-20 md:w-20 md:h-24 rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <Image
                      src={`/assets/problem-right${i}.png`}
                      alt="preview"
                      className="w-full h-full object-cover"
                      width={80}
                      height={100}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
