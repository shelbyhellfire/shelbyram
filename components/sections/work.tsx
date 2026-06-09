"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card } from "../ui/card";
import { Lightbox } from "../ui/lightbox";

const projects = [
  {
    title: "When Does My Kid Dance?",
    description:
      "Parent-focused dance competition schedule app solving the chaos of tracking multiple performers with smart search and color-coded results.",
    image: "/projects/dance-app.jpg",
    tags: ["Next.js", "React", "UX Design", "Mobile-First"],
    link: "/case-studies/when-does-my-kid-dance",
  },
  {
    title: "Enterprise Angular Design System",
    description:
      "Enterprise-grade Angular design system with automated design token pipeline, 50+ Material Design 3 components, and 1000+ utility classes serving financial institution applications.",
    image: "/projects/design-system.jpg",
    tags: ["Angular", "Material Design 3", "Design Tokens", "Storybook"],
    link: "/case-studies/uxdc-design-system",
  },
  {
    title: "Enterprise USWDS Design System",
    description:
      "React component library extending USWDS with 60+ production-ready components, dual theme architecture, and full WCAG 2.1 AA compliance for financial institution.",
    image: "/projects/design-system.jpg",
    tags: ["React", "TypeScript", "USWDS", "Accessibility"],
    link: "/case-studies/mpls-design-system",
  },
  {
    title: "Enterprise React Component Library",
    description:
      "Comprehensive React component library with 50+ accessible components built on USWDS standards, serving thousands of users across enterprise applications.",
    image: "/projects/component-library.jpg",
    tags: ["React", "TypeScript", "Storybook", "USWDS"],
    link: "/case-studies/trim-design-system",
  },
  {
    title: "Hire a Hubby MN",
    description:
      "Professional home maintenance website with conversion-focused design, trust-building UX, and seamless booking integration.",
    image: "/projects/hire-a-hubby.jpg",
    tags: ["Next.js", "Web Design", "Conversion Optimization", "Mobile-First"],
    link: "/case-studies/hire-a-hubby",
  },
  {
    title: "Moppin Mollie Logo Design",
    description:
      "Brand identity and logo design for Moppin Mollie cleaning service, featuring playful hand-lettering and a memorable mop illustration that conveys professionalism and approachability.",
    image: "/logo-mmollie.png",
    tags: ["Logo Design", "Brand Identity", "Graphic Design", "Illustration"],
    link: "#",
    isLightbox: true,
  },
];

export function Work() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const handleProjectClick = (
    e: React.MouseEvent,
    project: (typeof projects)[0],
  ) => {
    if (project.isLightbox) {
      e.preventDefault();
      setSelectedProject(project);
      setLightboxOpen(true);
    }
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in design systems,
            component libraries, and user-centered development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.link}
              scroll={false}
              onClick={(e) => handleProjectClick(e, project)}
            >
              <Card className="h-full cursor-pointer p-0">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>
                      {project.isLightbox ? "View Logo" : "Read Case Study"}
                    </span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={selectedProject?.image || ""}
        imageAlt={selectedProject?.title || ""}
        title={selectedProject?.title}
        description={selectedProject?.description}
      />
    </section>
  );
}
