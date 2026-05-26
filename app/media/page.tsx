"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronDown, Play } from "lucide-react";

import "swiper/css";

const reviewSlides = [
  {
    id: 1,
    stars: "★★★★★",
    count: "(1.2k)",
    text: "Their creative vision and modern web solutions helped our company build a stronger digital identity online.",
    author: "-Creative Studio",
  },
  {
    id: 2,
    stars: "★★★★★",
    count: "(950)",
    text: "The user experience feels smooth, interactive, and professional across every device and screen size.",
    author: "-Digital Agency",
  },
  {
    id: 3,
    stars: "★★★★★",
    count: "(1.4k)",
    text: "From branding to development, every detail was designed with innovation and creativity in mind.",
    author: "-Tech Company",
  },
  {
    id: 4,
    stars: "★★★★★",
    count: "(870)",
    text: "The animations, transitions, and visual storytelling created a memorable experience for our audience.",
    author: "-Media Team",
  },
  {
    id: 5,
    stars: "★★★★★",
    count: "(1.1k)",
    text: "Their modern design approach transformed our platform into a more engaging and professional product.",
    author: "-Startup Vision",
  },
  {
    id: 6,
    stars: "★★★★★",
    count: "(980)",
    text: "We appreciated the attention to detail, responsive layouts, and high-quality development standards.",
    author: "-Creative Network",
  },
  {
    id: 7,
    stars: "★★★★★",
    count: "(1.3k)",
    text: "The final result perfectly reflected our brand identity while keeping the interface simple and elegant.",
    author: "-Innovation Hub",
  },
];

const projectSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://cdn.coverr.co/videos/coverr-programming-at-night-1563743476054?download=1080p",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://cdn.coverr.co/videos/coverr-team-working-together-5176/1080p.mp4",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://cdn.coverr.co/videos/coverr-man-working-on-his-computer-5177/1080p.mp4",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    video:
      "https://cdn.coverr.co/videos/coverr-modern-office-workspace-1567609644657?download=1080p",
  },
];

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

function Pagination({
  current,
  total,
  onPrev,
  onNext,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mx-auto flex h-[70px] max-w-[460px] items-center justify-center gap-4">
      <button
        type="button"
        onClick={onPrev}
        className="w-[28px] text-[36px] leading-none text-[#18d1d0]"
      >
        ‹
      </button>

      <span className="w-[54px] text-right text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(current)}
      </span>

      <div className="h-[4px] flex-1 bg-[#cdd6da]">
        <div
          className="h-full bg-[#18d1d0] transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      <span className="w-[54px] text-[36px] font-light leading-none text-[#0c4f70]">
        {formatNumber(total)}
      </span>

      <button
        type="button"
        onClick={onNext}
        className="w-[28px] text-[36px] leading-none text-[#18d1d0]"
      >
        ›
      </button>
    </div>
  );
}

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"reviews" | "projects">("reviews");
  const [activeReview, setActiveReview] = useState(3);
  const [activeProject, setActiveProject] = useState(2);
  const [playingProject, setPlayingProject] = useState<number | null>(null);

  const reviewSwiperRef = useRef<any>(null);
  const projectSwiperRef = useRef<any>(null);

  useEffect(() => {
    const swiper = reviewSwiperRef.current;

    if (activeTab === "reviews" && swiper) {
      swiper.slideToLoop(2, 0);
      setActiveReview(3);
    }
  }, [activeTab]);

  useEffect(() => {
    const swiper = projectSwiperRef.current;

    if (activeTab === "projects" && swiper) {
      swiper.slideToLoop(1, 0);
      setActiveProject(2);
      setPlayingProject(null);
    }
  }, [activeTab]);

  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="bg-[#dbe5e9] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1650px]">
          <div className="mx-auto mb-16 flex w-full max-w-[820px] overflow-hidden rounded-[14px]">
            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`flex flex-1 items-center justify-between px-7 py-5 text-left text-[19px] font-semibold leading-7 ${
                activeTab === "reviews"
                  ? "bg-[#1bcfcd] text-white"
                  : "bg-[#07546d] text-white"
              }`}
            >
              <span>What clients say about our work</span>
              {activeTab === "reviews" && <ChevronDown size={24} />}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("projects")}
              className={`flex flex-1 items-center justify-between px-7 py-5 text-left text-[19px] font-semibold leading-7 ${
                activeTab === "projects"
                  ? "bg-[#1bcfcd] text-white"
                  : "bg-[#07546d] text-white"
              }`}
            >
              <span>Creative moments from our projects</span>
              {activeTab === "projects" && <ChevronDown size={24} />}
            </button>
          </div>

          {activeTab === "reviews" && (
            <div>
              <div className="min-h-[560px]">
                <Swiper
                  loop={true}
                  centeredSlides={true}
                  initialSlide={2}
                  slidesPerView={1.15}
                  spaceBetween={18}
                  speed={700}
                  watchSlidesProgress={true}
                  onSwiper={(swiper) => {
                    reviewSwiperRef.current = swiper;
                    setActiveReview(swiper.realIndex + 1);
                  }}
                  onSlideChange={(swiper) => {
                    setActiveReview(swiper.realIndex + 1);
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 18,
                      centeredSlides: true,
                    },
                    1200: {
                      slidesPerView: 5,
                      spaceBetween: 18,
                      centeredSlides: true,
                    },
                  }}
                >
                  {reviewSlides.map((item, index) => {
                    const isActive = activeReview === index + 1;

                    return (
                      <SwiperSlide
                        key={item.id}
                        className="!flex !h-auto items-center justify-center"
                      >
                        <div className="flex h-[485px] w-full items-center justify-center">
                          <div
                            className={`flex h-[380px] w-full max-w-[260px] flex-col justify-between rounded-[18px] px-6 py-8 transition-all duration-300 ease-out ${
                              isActive
                                ? "h-[485px] max-w-[310px] bg-[#07546d] text-white"
                                : "bg-[#f4f4f4] text-[#1b6f89]"
                            }`}
                          >
                            <div>
                              <div className="mb-8 flex items-center gap-2 text-[14px]">
                                <span className="tracking-[0.2em] text-[#16cfd0]">
                                  {item.stars}
                                </span>

                                <span className="text-[#16cfd0]">
                                  {item.count}
                                </span>
                              </div>

                              <p
                                className={
                                  isActive
                                    ? "text-[21px] font-semibold leading-[1.55]"
                                    : "text-[18px] leading-[1.7]"
                                }
                              >
                                {item.text}
                              </p>
                            </div>

                            <p className="font-semibold">{item.author}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>

              <div className="mt-6">
                <Pagination
                  current={activeReview}
                  total={reviewSlides.length}
                  onPrev={() => reviewSwiperRef.current?.slidePrev()}
                  onNext={() => reviewSwiperRef.current?.slideNext()}
                />
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="grid items-start gap-12 lg:grid-cols-[360px_minmax(0,1fr)]">
              <div className="hidden lg:block">
                <h2 className="text-[76px] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-[#c6d5db]">
                  Creative
                  <br />
                  digital
                  <br />
                  moments
                  <br />
                  for you!
                </h2>
              </div>

              <div>
                <div className="min-h-[620px]">
                  <Swiper
                    loop={true}
                    centeredSlides={true}
                    initialSlide={1}
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={700}
                    watchSlidesProgress={true}
                    onSwiper={(swiper) => {
                      projectSwiperRef.current = swiper;
                      setActiveProject(swiper.realIndex + 1);
                    }}
                    onSlideChange={(swiper) => {
                      setActiveProject(swiper.realIndex + 1);
                      setPlayingProject(null);
                    }}
                  >
                    {projectSlides.map((item) => {
                      const isPlaying = playingProject === item.id;

                      return (
                        <SwiperSlide
                          key={item.id}
                          className="!flex !h-auto items-center justify-center"
                        >
                          <div className="flex h-[560px] w-full items-center justify-center">
                            <div className="relative h-[560px] w-full max-w-[520px] overflow-hidden rounded-[20px]">
                              {isPlaying ? (
                                <video
                                  src={item.video}
                                  controls
                                  autoPlay
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <>
                                  <img
                                    src={item.image}
                                    alt={`Project ${item.id}`}
                                    className="h-full w-full object-cover"
                                  />

                                  <div className="pointer-events-none absolute bottom-4 right-4 z-20">
                                    <button
                                      type="button"
                                      onClick={() => setPlayingProject(item.id)}
                                      className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f0dfc4] text-[#0c4f70] shadow-md"
                                    >
                                      <Play
                                        size={22}
                                        className="ml-[2px]"
                                        fill="currentColor"
                                      />
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <div className="mt-8 flex h-[80px] items-center justify-center">
                  <button
                    type="button"
                    className="rounded-[4px] bg-[#17bfe0] px-8 py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-white"
                  >
                    View our projects
                  </button>
                </div>

                <div className="mt-4">
                  <Pagination
                    current={activeProject}
                    total={projectSlides.length}
                    onPrev={() => projectSwiperRef.current?.slidePrev()}
                    onNext={() => projectSwiperRef.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}