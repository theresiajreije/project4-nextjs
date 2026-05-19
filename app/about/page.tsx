import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="bg-black text-white">
                <section className="relative min-h-screen overflow-hidden bg-black px-5 py-20">
  <div className="relative mx-auto flex max-w-[1400px] items-center justify-center pt-10">

    {/* Circle Border */}
    <div className="absolute left-[40px] top-[-40px] h-[500px] w-[500px] rounded-full border-[6px] border-cyan-500 opacity-90"></div>

    {/* Pattern Circle */}
    <div className="absolute left-[60px] top-[20px] h-[500px] w-[500px] rounded-full opacity-20 bg-[repeating-linear-gradient(45deg,#00bcd4_0px,#00bcd4_10px,transparent_10px,transparent_26px)]"></div>

    {/* Image */}
    <div className="relative z-10 w-[700px] -mt-[180px]">
      <img
        src="/images/about-image.jpg"
        alt="About"
        className="w-full h-[340px] object-cover"
      />
    </div>

    {/* Text Content */}
    <div className="relative z-20 max-w-[950px] text-center -ml-[360px] -mt-[90px]">
      
      <h1 className="text-white text-[38px] md:text-[48px] lg:text-[55px] font-black leading-[1.15] tracking-[-1px]">
        transforming ideas into
        <br />
        immersive digital
        <br />
        experiences that inspire
        <br />
        audiences.
        <span className="text-red-500">
          {" "}from creative branding
          <br />
          to innovative media
          <br />
          production solutions.
        </span>
      </h1>

      {/* Lines */}
      <div className="mt-10 flex justify-center gap-5">
        <span className="h-1 w-12 rounded-full bg-cyan-400"></span>
        <span className="h-1 w-6 rounded-full bg-red-400"></span>
        <span className="h-1 w-14 rounded-full bg-cyan-400"></span>
      </div>

    </div>
  </div>
</section>

                <section className="bg-black pt-6 pb-20 px-5 text-white">
                    <div className="mx-auto max-w-[1100px]">

                        <h2 className="text-[38px] font-thin leading-[0.95] tracking-[-1px] text-white md:text-[56px] lg:text-[74px]">
                            creativity drives
                            <br />
                            everything we build.
                        </h2>

                        <p className="mt-7 text-[18px] font-black leading-[1.15] text-white md:text-[28px] lg:text-[38px]">
                            delivering impactful digital experiences.
                        </p>

                        <p className="mt-2 text-[18px] font-black leading-[1.15] text-red-500 md:text-[28px] lg:text-[38px]">
                            shaping the future of innovation.
                        </p>

                    </div>
                </section>
                <section className="bg-black py-20 px-5 text-white">
                    <div className="max-w-[1200px] mx-auto">

                        <div className="flex flex-col items-center gap-4">

                            {[
                                "branding",
                                "strategy",
                                "creative",
                                "digital",
                                "production",
                                "campaigns",
                                "innovation",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-5"
                                >

                                    <span className="text-cyan-400 text-[22px] font-bold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h2
                                        className="text-[42px] md:text-[60px] lg:text-[82px] font-bold uppercase text-transparent transition duration-300 group-hover:text-white"
                                        style={{
                                            WebkitTextStroke: "1.5px white",
                                        }}
                                    >
                                        {item}
                                    </h2>

                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center gap-5">
                            <span className="h-1 w-16 rounded-full bg-cyan-400"></span>
                            <span className="h-1 w-28 rounded-full bg-red-500"></span>
                            <span className="h-1 w-16 rounded-full bg-cyan-400"></span>
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
                            <span className="text-red-500">
                                innovation team.
                            </span>
                        </h2>

                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}