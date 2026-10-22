import React, { useState } from 'react';
import { PROJECTS, Project } from './siteData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ScrollReveal, RevealVariant } from './ScrollReveal';

interface WorkPageProps {
  navigate: (route: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tags = ['All', 'Meta Ads', 'Development', 'E-Commerce', 'SaaS Platform', 'Hospitality', 'Growth System'];

  const filteredProjects = selectedTag === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tag === selectedTag || p.category.toLowerCase().includes(selectedTag.toLowerCase()));

  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-12">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // PORTFOLIO &bull; CASE STUDIES
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
              Selected Works
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-xs sm:text-sm text-median-taupe/80 max-w-xl font-normal leading-relaxed">
              Explore our proven digital growth architectures across performance Meta Ads, bespoke modern web engineering, and high-retention video production.
            </p>
          </ScrollReveal>

          {/* Filter Pills */}
          <ScrollReveal variant="fade-up" delay={240}>
            <div className="flex flex-wrap items-center gap-2 pt-8">
              {tags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    data-cursor="pointer"
                    className={`px-4 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                      isActive
                        ? 'bg-black text-white shadow-md'
                        : 'bg-median-cream text-median-taupe border border-median-taupe/30 hover:border-black hover:text-black'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => {
            const variants: RevealVariant[] = [
              'curtain-expand',
              'card-lift',
              'zoom-rotate',
              'horizontal-slide-left',
              'counter-pop',
              'horizontal-slide-right',
            ];
            const variant = variants[idx % variants.length];

            return (
              <ScrollReveal
                key={proj.id}
                variant={variant}
                delay={(idx % 3) * 120}
                duration={900}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedProject(proj)}
                  data-cursor="work"
                  className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-median-taupe/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 h-full"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-median-taupe/10">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold uppercase text-median-taupe font-mono shadow-sm">
                        {proj.tag}
                      </span>
                      {proj.metrics && (
                        <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-sm text-[10px] font-bold uppercase text-white font-mono shadow-sm">
                          {proj.metrics.split('•')[0]}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-median-taupe/70 block mb-1 font-mono">
                        {proj.category}
                      </span>
                      <h3 className="font-oswald text-2xl font-bold uppercase text-black group-hover:text-median-taupe transition-colors mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-median-taupe/80 line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-median-taupe/15 flex items-center justify-between text-xs font-semibold text-median-taupe mt-4">
                      <span className="font-mono">{proj.client}</span>
                      <span className="font-mono text-black font-bold">{proj.year}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
      />
    </div>
  );
};
