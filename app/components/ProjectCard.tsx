// app/components/ProjectCard.tsx
"use client";

import { useState } from "react";

type Member = {
  name: string;
  role: string; // e.g. "Chair"
};

type ProjectCardProps = {
  title: string;
  description: string;
  members: Member[];
  imageUrl: string;
};

export default function ProjectCard({
  title,
  description,
  members,
  imageUrl,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(true);

  // Show only first 3 when collapsed
  const visibleMembers = expanded ? members : members.slice(0, 3);

  return (
    <section className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-slate-50 shadow-lg">
      {/* Header image */}
      <div
        className="h-40 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex h-full items-center bg-black/50 px-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-100/80">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Member list */}
      <div className="bg-slate-100 px-8 py-5 text-slate-900">
        <div
          className={`grid gap-6 md:grid-cols-3 overflow-hidden transition-all ease-out duration-500 ${
            expanded ? "max-h-[500px]" : "max-h-[110px]"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {visibleMembers.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 transition-opacity duration-300"
            >
              <div className="h-10 w-10 rounded-full bg-slate-700" />
              <div className="text-sm leading-tight">
                <div>{m.name}</div>
                <button className="text-xs font-semibold text-slate-700 underline">
                  {m.role}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-4 flex justify-end">
          <button
            className="text-sm font-semibold text-slate-700 underline transition-colors duration-300 hover:text-slate-900"
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Show less..." : "Load more..."}
          </button>
        </div>
      </div>
    </section>
  );
}
