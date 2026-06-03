"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/card";

const skills = [
  {
    category: "Frontend Development",
    items: [
      "React / Next.js",
      "TypeScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Styled Components",
    ],
  },
  {
    category: "Design Systems",
    items: [
      "Component Architecture",
      "Design Tokens",
      "Storybook",
      "Figma / Sketch",
      "Accessibility (WCAG)",
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git / GitHub",
      "NPM / Yarn",
      "Webpack / Vite",
      "Jest / Testing Library",
      "CI/CD",
    ],
  },
  {
    category: "UX Skills",
    items: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Design-Dev Collaboration",
    ],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a frontend prototyper and UX engineer who excels at the
            intersection of user experience and technical implementation. I
            rapidly bring ideas to life through interactive prototypes,
            understand what users truly need, and translate that into polished,
            production-ready code. Whether it's exploring new concepts or
            scaling design systems, I master the front of the frontend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} hover={false}>
              <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">What I Bring to Your Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Rapid Prototyping</h4>
              <p className="text-sm opacity-90">
                Transform concepts into interactive prototypes in days, not
                weeks
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">User-Centered Mindset</h4>
              <p className="text-sm opacity-90">
                I understand user needs and translate them into exceptional
                experiences
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">💎</div>
              <h4 className="font-semibold mb-2">Production Excellence</h4>
              <p className="text-sm opacity-90">
                From prototype to polished product with accessible, performant
                code
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
