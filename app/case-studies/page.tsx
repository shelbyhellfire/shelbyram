import { Card } from "@/components/ui/card";
import Link from "next/link";

const caseStudies = [
  {
    title: "When Does My Kid Dance?",
    slug: "when-does-my-kid-dance",
    description:
      "Building a parent-focused dance competition app that solves real-world scheduling chaos.",
    date: "2024",
    readTime: "12 min read",
    tags: ["UX Design", "Next.js", "Problem Solving"],
  },
  {
    title: "Enterprise Design System",
    slug: "enterprise-design-system",
    description:
      "How I built a comprehensive design system serving 200+ developers across multiple products.",
    date: "2024",
    readTime: "10 min read",
    tags: ["Design Systems", "React", "Storybook"],
  },
  {
    title: "E-commerce Component Library",
    slug: "ecommerce-components",
    description:
      "Creating a reusable component library that reduced development time by 40%.",
    date: "2023",
    readTime: "8 min read",
    tags: ["Component Library", "Next.js", "Tailwind"],
  },
  {
    title: "SaaS Dashboard Redesign",
    slug: "saas-dashboard",
    description:
      "Redesigning a complex dashboard that improved user satisfaction by 60%.",
    date: "2023",
    readTime: "12 min read",
    tags: ["UX Research", "React", "Data Visualization"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Deep dives into my process, challenges, and solutions for building
            design systems and component libraries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <Card className="h-full cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {study.date}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {study.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3">{study.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
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
    </div>
  );
}
