"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Language } from "../page";

type WorkGridProps = {
  lang: Language;
};

type Project = {
  id: number;
  title: string;
  image: string;
  description: string | null;
  alias: string;
};

export default function Work({ lang }: WorkGridProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("https://hanzo.dxpshift.com/api/projects");
        const data = await res.json();

        if (data.success) {
          setProjects(data.data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const searchValue = search.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchValue) ||
      (project.description || "").toLowerCase().includes(searchValue)
    );
  });

  return (
    <section id="work" className="bg-black py-14 sm:py-18 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 md:px-10 lg:px-12">
        <div className="mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder={
                lang === "fr"
                  ? "Rechercher des projets..."
                  : "Search projects..."
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-transparent px-5 py-4 pr-14 text-white outline-none placeholder:text-white/50 focus:border-cyan-400"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition hover:text-white"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {loading ? (
          <p className="text-center text-white">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/details/${project.alias}`}
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
                      {project.description || "Hanzo Films project"}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-white/70">
                {lang === "fr" ? "Aucun projet trouvé." : "No projects found."}
              </p>
            )}
          </div>
        )}

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