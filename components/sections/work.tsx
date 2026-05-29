"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

const projects = [
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
    title: "When Does My Kid Dance?",
    description:
      "Parent-focused dance competition schedule app solving the chaos of tracking multiple performers with smart search and color-coded results.",
    image: "/projects/dance-app.jpg",
    tags: ["Next.js", "React", "UX Design", "Mobile-First"],
    link: "/case-studies/when-does-my-kid-dance",
  },
];

export function Work() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.link} scroll={false}>
              <Card className="h-full cursor-pointer">
                <div className="relative h-48 mb-4 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-lg overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    📱
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  Read Case Study
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
