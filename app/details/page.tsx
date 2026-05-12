import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DetailsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black px-5 py-10 text-white sm:px-8 md:px-12 lg:px-[90px]">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[22px] font-bold text-cyan-400 sm:text-[26px] md:text-[30px]"
          >
            <span className="text-[34px] font-light text-white sm:text-[42px]">
              ←
            </span>
            back
          </Link>

          <div className="mt-10">
            <h1 className="text-[26px] font-bold leading-[34px] sm:text-[30px] md:text-[34px]">
              Future Intelligence
            </h1>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-[150px_170px_170px_170px_1fr] lg:gap-[42px]">
              {[
                ["client", "Nexora Studio"],
                ["website", "Future AI"],
                ["industry", "Technology"],
                ["service", "UI/UX Design"],
                [
                  "features",
                  "Responsive Design | Modern Interface | AI Experience | Interactive Layout",
                ],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[16px] font-light text-white/70 md:text-[18px]">
                    {label}
                  </p>

                  <h3 className="mt-1 text-[18px] font-medium leading-[24px] md:text-[20px]">
                    {value}
                  </h3>

                  <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                </div>
              ))}
            </div>

            <div className="mt-12 overflow-hidden rounded-[20px]">
              <Image
                src="/images/work1.jpg"
                alt="Future Intelligence"
                width={1600}
                height={900}
                className="h-[260px] w-full object-cover sm:h-[420px] md:h-[550px] lg:h-[650px]"
              />
            </div>

            <div className="mt-14 md:mt-20">
              <h2 className="max-w-[1150px] text-[22px] font-bold leading-[32px] text-cyan-500 sm:text-[26px] md:text-[30px] md:leading-[42px]">
                How can we create a futuristic digital experience that combines
                artificial intelligence, creativity, and innovation into one
                immersive platform?
              </h2>

              <p className="mt-6 max-w-[1150px] text-[16px] font-light leading-[28px] text-white sm:text-[18px] md:text-[22px] md:leading-[36px]">
                Future Intelligence explores the connection between technology
                and human imagination.
                <br />
                A modern digital concept designed to inspire users through
                interactive visuals, smart experiences, and a futuristic
                interface that reflects the next generation of innovation.
              </p>

              <div className="mt-12 overflow-hidden rounded-[20px]">
                <Image
                  src="/images/work1.jpg"
                  alt="Future Intelligence"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-14">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Image
                    key={item}
                    src="/images/poster.jpg"
                    alt={`Poster ${item}`}
                    width={600}
                    height={800}
                    className="h-[420px] w-full rounded-[20px] object-cover sm:h-[520px] lg:h-[620px]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-[20px]">
              <Image
                src="/images/Ai-Human.jpg"
                alt="Future Intelligence Robot"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="mt-20 mb-14 flex flex-col items-center">
              <h2 className="text-[18px] font-extrabold text-white md:text-[24px]">
                discover next
              </h2>
              <span className="mt-2 block h-[6px] w-[55px] rounded-full bg-red-500" />
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src="/images/image.jpg"
                  alt="Creative Technology"
                  width={1100}
                  height={650}
                  className="h-[260px] w-full max-w-[1100px] rounded-[20px] object-cover sm:h-[420px] md:h-[520px]"
                />
              </div>

              <div className="mx-auto mt-8 max-w-[1100px] text-left">
                <h2 className="text-[22px] font-extrabold leading-[32px] text-white sm:text-[28px] md:text-[32px] md:leading-[42px]">
                  Future Digital Experience
                </h2>

                <p className="mt-2 max-w-[1000px] text-[16px] font-light leading-[28px] text-white md:text-[21px] md:leading-[36px]">
                  We create immersive digital experiences through futuristic
                  visuals, innovation, and interactive technology.
                </p>

                <button className="mt-8 text-[18px] font-bold text-cyan-400 transition hover:text-cyan-300">
                  read more
                </button>

                <span className="mt-2 block h-[6px] w-[50px] rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}