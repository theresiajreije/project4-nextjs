"use client";


import { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function AboutPage() {
  const services = [
    {
      title: "branding",
      text: "Building strong visual identities that reflect the brand personality and connect with the target audience.",
    },
    {
      title: "strategy",
      text: "Creating clear plans that guide each project from the first idea to the final digital experience.",
    },
    {
      title: "creative",
      text: "Turning ideas into unique concepts, visuals, and experiences that attract and inspire audiences.",
    },
    {
      title: "digital",
      text: "Designing modern digital solutions for websites, platforms, and online brand presence.",
    },
    {
      title: "production",
      text: "Producing high-quality media content that supports campaigns and strengthens communication.",
    },
    {
      title: "campaigns",
      text: "Developing creative campaigns that help brands reach people in a meaningful and memorable way.",
    },
    {
      title: "innovation",
      text: "Using new ideas and technologies to create fresh, impactful, and future-focused solutions.",
    },
  ];

  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <div className="fixed left-8 top-1/2 z-50 h-[170px] w-[8px] -translate-y-1/2 rounded-full bg-[#d9d9d9]">
          <div
            className="w-full rounded-full bg-red-500 transition-all duration-200"
            style={{ height: `${Math.min(scrollProgress, 100)}%` }}
          ></div>
        </div>
        <section className="relative min-h-[720px] overflow-hidden bg-black px-5 pt-20 pb-24">
          <div className="relative mx-auto flex max-w-[1400px] items-center justify-center pt-10">
            <div className="absolute left-[40px] top-[-40px] h-[500px] w-[500px] rounded-full border-[6px] border-cyan-500 opacity-90"></div>

            <div className="absolute left-[60px] top-[20px] h-[500px] w-[500px] rounded-full opacity-20 bg-[repeating-linear-gradient(45deg,#00bcd4_0px,#00bcd4_10px,transparent_10px,transparent_26px)]"></div>

            <div className="relative z-10 w-[700px] -mt-[120px]">
              <img
                src="/images/about-image.jpg"
                alt="About"
                className="h-[340px] w-full object-cover"
              />
            </div>

            <div className="relative z-20 -ml-[360px] -mt-[70px] max-w-[950px] text-center">
              <h1 className="text-[38px] font-black leading-[1.15] tracking-[-1px] text-white md:text-[48px] lg:text-[55px]">
                transforming ideas into
                <br />
                immersive digital
                <br />
                experiences that inspire
                <br />
                audiences.
                <span className="text-red-500">
                  {" "}
                  from <span className="whitespace-nowrap">creative branding</span>
                  <br />
                  to innovative media
                  <br />
                  production solutions.
                </span>
              </h1>

              <div className="mt-10 flex justify-center gap-5">
                <span className="h-1 w-12 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-6 rounded-full bg-red-400"></span>
                <span className="h-1 w-14 rounded-full bg-cyan-400"></span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-5 pt-7 pb-20 text-white">
          <div className="mx-auto max-w-[1100px] text-center">
            <h2 className="mx-auto text-[38px] font-thin leading-[0.95] tracking-[-1px] text-white md:text-[56px] lg:text-[74px]">
              creativity drives
              <br />
              everything we build.
            </h2>

            <p className=" mx-auto mt-7 text-[18px] font-black leading-[1.15] text-white md:text-[28px] lg:text-[38px]">
              delivering impactful digital experiences.
            </p>

            <p className="mx-auto mt-2 text-[18px] font-black leading-[1.15] text-red-500 md:text-[28px] lg:text-[38px]">
              shaping the future of innovation.
            </p>
          </div>
        </section>

        <section className="bg-black px-4 py-20 text-white">
          <div className="mx-auto max-w-[1200px] text-center">
            <div className="flex flex-col items-center gap-10">
              {services.map((item, index) => {
                const isActive = selectedService?.title === item.title;

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className="group flex items-start gap-5 text-center"
                  >
                    <span
                      className={`mt-4 text-[22px] font-bold transition-colors duration-300 ${isActive ? "text-red-500" : "text-blue-500"
                        } group-hover:text-red-500`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h2
                        className={`text-[42px] font-black uppercase leading-none transition duration-300 md:text-[70px] lg:text-[110px] ${isActive
                          ? "text-white"
                          : "text-transparent group-hover:text-white"
                          }`}
                        style={{
                          WebkitTextStroke: "1.5px white",
                        }}
                      >
                        {item.title}
                      </h2>

                      {isActive && (
                        <p className="mx-auto mt-6 max-w-[850px] text-[18px] normal-case leading-[1.5] text-white md:text-[26px]">
                          {item.text}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-black px-5 py-20 text-center text-white">
          <div className="mx-auto max-w-[1000px]">
            <p className="text-[16px] leading-[1.7] text-white md:text-[22px]">
              <span className="font-bold text-red-500">N.B.</span>{" "}
              we are building innovative digital experiences
              <br />
              designed to transform ideas into reality.
            </p>

            <h2 className="mt-8 text-[28px] font-black leading-[1.3] text-white md:text-[40px] lg:text-[52px]">
              until then, meet our
              <br />
              creative vision and{" "}
              <span className="text-red-500">innovation team.</span>
            </h2>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}