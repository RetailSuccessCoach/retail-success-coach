export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-4xl mx-auto py-16 px-4 prose prose-lg text-gray-800">
      {children}
    </article>
  );
}
