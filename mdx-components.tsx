import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-4">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-black p-6 rounded-lg overflow-x-auto mb-6 border border-gray-800">
        <code className="text-white text-sm font-mono block leading-relaxed">
          {children}
        </code>
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
