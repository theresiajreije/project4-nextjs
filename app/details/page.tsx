import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DetailsPage() {
    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-black px-6 py-12 text-white sm:px-10 md:px-16 lg:px-[90px]">
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 text-[30px] font-bold text-cyan-400"
                >
                    <span className="text-[42px] font-light text-white">←</span>
                    back
                </Link>

                <div className="mt-12 ml-0 lg:ml-[115px]">
                    <h1 className="text-[28px] font-[700] leading-[34px] text-white">
                        Future Intelligence
                    </h1>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-[150px_170px_170px_170px_1fr] lg:gap-[42px]">

                        <div>
                            <p className="text-[18px] font-light leading-[22px] text-white/70">
                                client
                            </p>

                            <h3 className="mt-1 text-[20px] font-[500] leading-[24px] text-white">
                                Nexora Studio
                            </h3>

                            <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                        </div>

                        <div>
                            <p className="text-[18px] font-light leading-[22px] text-white/70">
                                website
                            </p>

                            <h3 className="mt-1 text-[20px] font-[500] leading-[24px] text-white">
                                Future AI
                            </h3>

                            <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                        </div>

                        <div>
                            <p className="text-[18px] font-light leading-[22px] text-white/70">
                                industry
                            </p>

                            <h3 className="mt-1 text-[20px] font-[500] leading-[24px] text-white">
                                Technology
                            </h3>

                            <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                        </div>

                        <div>
                            <p className="text-[18px] font-light leading-[22px] text-white/70">
                                service
                            </p>

                            <h3 className="mt-1 text-[20px] font-[500] leading-[24px] text-white">
                                UI/UX Design
                            </h3>

                            <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                        </div>

                        <div>
                            <p className="text-[18px] font-light leading-[22px] text-white/70">
                                features
                            </p>

                            <h3 className="mt-1 text-[20px] font-[500] leading-[24px] text-white">
                                Responsive Design | Modern Interface | AI Experience |
                                Interactive Layout
                            </h3>

                            <span className="mt-3 block h-[3px] w-[32px] bg-cyan-400" />
                        </div>
                    </div>

                    {/* FIRST IMAGE */}
                    <div className="mt-16 overflow-hidden lg:-ml-[115px]">
                        <img
                            src="/images/work1.jpg"
                            alt="Future Intelligence"
                            className="h-[260px] w-full object-cover sm:h-[420px] md:h-[550px] lg:h-[650px]"
                        />
                    </div>

                    {/* TEXT SECTION */}
                    <div className="mt-20">
                        <h2 className="max-w-[1150px] text-[24px] font-[700] leading-[34px] text-cyan-500 md:text-[30px] md:leading-[42px]">
                            How can we create a futuristic digital experience that combines
                            artificial intelligence, creativity, and innovation into one immersive
                            platform?
                        </h2>

                        <p className="mt-10 max-w-[1150px] text-[18px] font-light leading-[30px] text-white md:text-[22px] md:leading-[36px]">
                            Future Intelligence explores the connection between technology and human
                            imagination.
                            <br />
                            A modern digital concept designed to inspire users through interactive
                            visuals, smart experiences, and a futuristic interface that reflects the
                            next generation of innovation.
                        </p>

                        {/* SECOND IMAGE */}
                        <div className="mt-16 overflow-hidden lg:-ml-[115px]">
                            <img
                                src="/images/work1.jpg"
                                alt="Future Intelligence"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* POSTERS */}
                    <div className="mt-20 lg:-ml-[115px]">
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                            <img
                                src="/images/poster.jpg"
                                alt="Poster 1"
                                className="h-[620px] w-full object-cover"
                            />

                            <img
                                src="/images/poster.jpg"
                                alt="Poster 2"
                                className="h-[620px] w-full object-cover"
                            />

                            <img
                                src="/images/poster.jpg"
                                alt="Poster 3"
                                className="h-[620px] w-full object-cover"
                            />

                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}