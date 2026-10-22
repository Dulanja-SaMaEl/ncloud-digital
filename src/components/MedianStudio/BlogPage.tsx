import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from './siteData';
import { ArticleReaderModal } from './ArticleReaderModal';
import { ScrollReveal } from './ScrollReveal';

interface BlogPageProps {
  navigate: (route: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="pt-28 pb-24 bg-white text-median-taupe min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="py-12 border-b border-median-taupe/20 mb-16">
          <ScrollReveal variant="badge-drop">
            <span className="text-xs font-bold tracking-widest uppercase text-median-taupe/70 block mb-2 font-mono">
              // STUDIO RESEARCH &bull; FIELD NOTES
            </span>
          </ScrollReveal>
          <ScrollReveal variant="split-mask" delay={100}>
            <h1 className="font-oswald text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
              Knowledge &amp; Strategies
            </h1>
          </ScrollReveal>
          <ScrollReveal variant="blur-focus" delay={180}>
            <p className="text-xs sm:text-sm text-median-taupe/80 max-w-xl font-normal leading-relaxed">
              Technical breakdowns, conversion psychology principles, and performance advertising insights directly from our engineering team.
            </p>
          </ScrollReveal>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              variant={idx % 2 === 0 ? 'horizontal-slide-right' : 'horizontal-slide-left'}
              delay={idx * 140}
              className="h-full"
            >
              <div
                onClick={() => setSelectedPost(post)}
                data-cursor="work"
                className="group cursor-pointer rounded-2xl bg-white border border-median-taupe/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-median-taupe/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold font-mono uppercase text-median-taupe shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-median-taupe/70 mb-2">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-oswald text-2xl font-bold uppercase text-black group-hover:text-median-taupe transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-median-taupe/80 leading-relaxed font-normal mb-6">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-median-taupe/15 flex items-center justify-between text-xs font-bold text-black uppercase font-mono">
                    <span>Read Full Breakdown</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ArticleReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
};
