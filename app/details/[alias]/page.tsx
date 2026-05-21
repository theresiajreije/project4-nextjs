import Link from "next/link";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

type Project = {
  id: number;
  title: string;
  image: string;
  vimeo_id?: string | null;
  description?: string | null;
  text?: string | null;
  client?: string | null;
  director?: string | null;
  directors?: string | null;
  cinematographer?: string | null;
  agency?: string | null;
  alias: string;
};

async function getProjects() {
  const res = await fetch("https://hanzo.dxpshift.com/api/projects", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.data as Project[];
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const allProjects = await getProjects();

  const project = allProjects.find((item) => item.alias === alias);

  const currentIndex = allProjects.findIndex((item) => item.alias === alias);

  const nextProject =
    currentIndex >= 0 && currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="bg-black py-40 text-center text-white">
          <h1 className="text-3xl font-bold">Project not found</h1>

          <Link href="/" className="mt-6 inline-block underline">
            Back to home
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const descriptionText =
    project.description || project.text || "No description available.";

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <section className="mx-auto max-w-[1400px] px-5 py-24">
          <Link
            href="/"
            className="mb-10 inline-block text-white/70 hover:text-white"
          >
            ← Back
          </Link>

          <div className="mb-16 overflow-hidden">
            {project.vimeo_id ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://player.vimeo.com/video/${project.vimeo_id}?title=0&byline=0&portrait=0`}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                />
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            )}
          </div>

          <h1 className="mb-16 text-center text-[28px] font-light md:text-[40px]">
            {project.title}
          </h1>

          <div className="grid gap-16 lg:grid-cols-2">
            <div className="max-w-[760px]">
              <div className="mb-10 h-[4px] w-20 bg-white"></div>

              <p className="text-[20px] leading-[1.8] text-white">
                {descriptionText}
              </p>
            </div>

            <div>
              <div className="border-b border-white/10 py-6">
                CLIENT: <span>{project.client || "N/A"}</span>
              </div>

              <div className="border-b border-white/10 py-6">
                DIRECTOR:{" "}
                <span>{project.director || project.directors || "N/A"}</span>
              </div>

              <div className="border-b border-white/10 py-6">
                DP: <span>{project.cinematographer || "N/A"}</span>
              </div>

              <div className="border-b border-white/10 py-6">
                AGENCY: <span>{project.agency || "N/A"}</span>
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-end">
            {nextProject && (
              <Link
                href={`/details/${nextProject.alias}`}
                className="rounded border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
              >
                Next →
              </Link>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}