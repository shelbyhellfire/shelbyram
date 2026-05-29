export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </article>
  );
}
