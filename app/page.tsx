import ProjectCard from "./components/ProjectCard";
import projects from "@/data/ProjectCard.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-8 py-12 text-slate-50">
      <h1 className="mb-6 text-xl font-semibold text-violet-300">
        Project Card
      </h1>

      <div className="space-y-8 rounded-2xl border border-dashed border-violet-400/70 bg-slate-900/60 p-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}
