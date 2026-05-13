import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

type Project = {
  id: number;
  title: string;
  image: string;
  vimeo_id: string;
  description: string | null;
  text: string | null;
  client: string | null;
  directors: string | null;
  cinematographer: string | null;
  agency: string | null;
  alias: string;
};

async function getProject(alias: string) {
  const res = await fetch("https://hanzo.dxpshift.com/api/projects", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.data.find(
    (item: Project) => item.alias === alias
  );
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const project = await getProject(alias);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="bg-black py-40 text-center text-white">
          Project not found
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <section className="mx-auto max-w-[1200px] px-5 py-24">
          <h1 className="mb-8 text-5xl font-bold">
            {project.title}
          </h1>

          {project.vimeo_id && (
            <div className="mb-10 aspect-video overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeo_id}`}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          )}

          <img
            src={project.image}
            alt={project.title}
            className="mb-10 w-full"
          />

          {project.text && (
            <p className="max-w-[900px] whitespace-pre-line text-lg leading-8 text-white/80">
              {project.text}
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}