"use client";

import Link from "next/link";
import type { Language } from "../page";

type WorkGridProps = {
  lang: Language;
};

const projects = [
  {
    id: 1,
    title: "Future Intelligence",
    image: "/images/work1.jpg",
    description:
      "Innovative AI technology creating smarter and more connected solutions.",
  },
  {
    id: 2,
    title: "Creative Vision",
    image: "/images/work2.jpg",
    description:
      "Modern digital experiences crafted with technology, creativity, and design.",
  },
  {
    id: 3,
    title: "Smart City Vision",
    image: "/images/work3.jpg",
    description:
      "Exploring modern digital lifestyles through immersive futuristic environments.",
  },
  {
    id: 4,
    title: "Tech Control Center",
    image: "/images/work4.jpg",
    description:
      "Modern futuristic interfaces built to power the next generation of technology.",
  },
  {
    id: 5,
    title: "Future Beyond",
    image: "/images/work5.jpg",
    description:
      "A visionary concept blending technology, motion, and futuristic exploration.",
  },
  {
    id: 6,
    title: "Digital Art Space",
    image: "/images/work6.jpg",
    description:
      "Interactive futuristic visuals crafted to inspire creativity and imagination.",
  },
  {
    id: 7,
    title: "Digital Future",
    image: "/images/work7.jpg",
    description:
      "Technology-driven concepts for next generation products.",
  },
  {
    id: 8,
    title: "Future Concepts",
    image: "/images/work8.jpg",
    description:
      "Creative 3D experiences shaping the next generation of digital innovation.",
  },
];

export default function Work({ lang }: WorkGridProps) {
  return (
    <section id="work" className="bg-black py-14 sm:py-18 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {projects.map((project) => (
            <Link
  key={project.id}
  href={project.id === 1 ? "/details" : "#"}
  className="group block"
>
              <div>
                <div className="h-[220px] overflow-hidden bg-gray-800 sm:h-[300px] md:h-[360px] lg:h-[330px] xl:h-[380px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-[20px] font-bold text-white sm:text-[22px] md:text-[24px]">
                  {project.title}
                </h3>

                <p className="mt-2 max-w-[520px] text-[14px] leading-[22px] text-white/80 sm:mt-3 sm:text-[15px] sm:leading-[24px]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-20 lg:mt-24">
          <div className="mb-5 flex justify-center gap-2 sm:mb-6 sm:gap-3">
            <span className="h-1 w-[30px] rounded-full bg-cyan-400 sm:w-[40px]" />
            <span className="h-1 w-[20px] rounded-full bg-red-400 sm:w-[25px]" />
            <span className="h-1 w-[55px] rounded-full bg-cyan-400 sm:w-[80px]" />
          </div>

          <p className="text-[22px] leading-[34px] text-white sm:text-[26px] sm:leading-[40px] md:text-[30px] md:leading-[46px]">
            {lang === "fr" ? (
              <>
                <span className="font-semibold text-red-400">
                  nous aimerions
                </span>{" "}
                voir votre projet
                <br className="hidden sm:block" />
                <span className="sm:ml-2">ajouté ici</span>
              </>
            ) : (
              <>
                <span className="font-semibold text-red-400">we’d love</span>{" "}
                to see your project
                <br className="hidden sm:block" />
                <span className="sm:ml-2">added here</span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}