"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

const projects = [
  {
    title: "When Does My Kid Dance?",
    description:
      "A parent-focused dance competition schedule app solving the chaos of tracking multiple performers with smart search and color-coded results.",
    image: "/projects/dance-app.jpg",
    tags: ["Next.js", "React", "UX Design", "Mobile-First"],
    link: "/case-studies/when-does-my-kid-dance",
  },
  {
    title: "Enterprise Design System",
    description:
      "Built a comprehensive design system with 50+ components, serving 200+ developers across multiple products.",
    image: "/projects/design-system.jpg",
    tags: ["React", "TypeScript", "Storybook", "Design Tokens"],
    link: "/case-studies/enterprise-design-system",
  },
  {
    title: "E-commerce Component Library",
    description:
      "Created a reusable component library that reduced development time by 40% and improved consistency.",
    image: "/projects/component-library.jpg",
    tags: ["Next.js", "Tailwind", "Accessibility", "Performance"],
    link: "/case-studies/ecommerce-components",
  },
  {
    title: "SaaS Dashboard Redesign",
    description:
      "Redesigned and rebuilt a complex dashboard, improving user satisfaction by 60% and reducing support tickets.",
    image: "/projects/dashboard.jpg",
    tags: ["React", "D3.js", "UX Research", "Responsive Design"],
    link: "/case-studies/saas-dashboard",
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
            <Link key={project.title} href={project.link}>
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
