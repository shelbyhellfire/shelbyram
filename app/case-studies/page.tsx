import { Card } from "@/components/ui/card";
import Link from "next/link";

const caseStudies = [
  {
    title: "Hire a Hubby MN",
    slug: "hire-a-hubby",
    description:
      "Creating a conversion-focused website for a home maintenance business with trust-building design.",
    date: "2024",
    readTime: "15 min read",
    tags: ["Web Design", "Conversion UX", "Next.js"],
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              scroll={false}
            >
              <Card className="h-full cursor-pointer p-0">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {study.title.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                      {study.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Read Case Study</span>
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
    </div>
  );
}
