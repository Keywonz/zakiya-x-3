import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '💳',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'WebRTC'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Premiere Pro', 'After Effects', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips programming dan best practices untuk developer Indonesia.',
    tags: ['Instagram', 'TikTok', 'YouTube Shorts'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  // Inisialisasi Embla dengan Loop dan Autoplay 3 detik
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"  
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects & Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div 
                  key={project.title} 
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <span className="text-6xl">{project.image}</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        {project.isContent && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                            Content
                          </span>
                        )}
                        <h3 className="font-display text-lg font-bold truncate">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2 h-10">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-secondary text-secondary-foreground font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-4">
                        {project.github && (
                          <Button variant="outline" size="sm" className="rounded-full h-8 text-xs" asChild>
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm" className="rounded-full h-8 text-xs" asChild>
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.youtube && (
                          <Button size="sm" className="rounded-full h-8 text-xs" asChild>
                            <a href={project.youtube} target="_blank" rel="noreferrer">
                              <Play className="h-3 w-3 mr-1" />
                              Watch
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors"
              onClick={scrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}