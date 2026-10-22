import React from 'react';
import { BlogPost } from './siteData';

interface ArticleReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-median-taupe/20 animate-fade-in my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          data-cursor="pointer"
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-median-taupe/30 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-md"
        >
          ✕
        </button>

        <div className="overflow-y-auto flex-1 p-8 sm:p-12 md:p-16 space-y-8">
          {/* Header Metadata */}
          <div>
            <div className="flex items-center gap-3 text-xs font-bold font-mono uppercase text-median-taupe mb-4">
              <span className="px-3 py-1 rounded-full bg-median-cream border border-median-taupe/30">
                {post.category}
              </span>
              <span>&bull;</span>
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-oswald text-3xl sm:text-5xl font-bold uppercase text-black leading-tight tracking-tight">
              {post.title}
            </h1>
          </div>

          {/* Author Badge */}
          <div className="flex items-center gap-4 py-4 border-y border-median-taupe/15">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-median-taupe/30"
            />
            <div>
              <span className="font-oswald text-base font-bold uppercase text-black block">
                {post.author.name}
              </span>
              <span className="text-xs text-median-taupe uppercase font-semibold">
                {post.author.role} &bull; NCloud Digital
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-median-taupe/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Text Content */}
          <div className="space-y-6 text-sm sm:text-base text-median-taupe/90 font-normal leading-relaxed pt-4">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="first-letter:font-oswald first-letter:text-3xl first-letter:font-bold first-letter:float-left first-letter:mr-2">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer note */}
          <div className="p-6 rounded-2xl bg-median-cream border border-median-taupe/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase font-semibold text-black">
              Want to scale your digital pipeline with NCloud Digital?
            </span>
            <a
              href="https://wa.me/94760967884"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full bg-median-taupe hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Direct WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
