import React from 'react';
import { Project } from './siteData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-median-taupe/20 animate-fade-in my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          data-cursor="pointer"
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-median-taupe/30 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-md"
        >
          ✕
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] w-full bg-median-taupe/10 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold font-mono uppercase text-median-taupe shadow">
                {project.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-xs font-bold font-mono uppercase text-white shadow">
                {project.year}
              </span>
              {project.metrics && (
                <span className="px-3 py-1 rounded-full bg-cyan-400 text-black text-xs font-bold font-mono uppercase shadow">
                  {project.metrics}
                </span>
              )}
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Header info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-median-taupe/70 block mb-2">
                CLIENT: {project.client} &bull; {project.category}
              </span>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-black tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-median-taupe/90 font-normal leading-relaxed mt-4 max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Deliverables tags */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-black block mb-3 font-mono">
                Scope of Work &amp; Deliverables
              </span>
              <div className="flex flex-wrap gap-2">
                {project.deliverables.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-median-cream border border-median-taupe/30 text-xs font-semibold text-black uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-median-taupe/15">
              <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-2">
                <span className="font-oswald text-lg font-bold uppercase text-black block">
                  The Strategic Challenge
                </span>
                <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 space-y-2">
                <span className="font-oswald text-lg font-bold uppercase text-black block">
                  The NCloud Engineering Solution
                </span>
                <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Client Testimonial (if present) */}
            {project.quote && (
              <div className="p-8 rounded-2xl bg-black text-white space-y-4">
                <p className="font-oswald text-xl sm:text-2xl font-light italic leading-snug">
                  &ldquo;{project.quote.text}&rdquo;
                </p>
                <span className="text-xs uppercase tracking-wider text-median-taupe font-mono block">
                  — {project.quote.author}
                </span>
              </div>
            )}

            {/* Next Project Nav footer */}
            <div className="pt-8 border-t border-median-taupe/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-median-taupe uppercase font-semibold">
                Explore More Case Studies
              </span>

              <button
                onClick={() => onSelectProject(nextProject)}
                data-cursor="pointer"
                className="group flex items-center gap-3 text-black font-oswald text-xl font-bold uppercase hover:text-median-taupe transition-colors"
              >
                <span>Next Case Study: {nextProject.title}</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
