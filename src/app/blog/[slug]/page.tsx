import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { notFound } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return notFound();

  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-block text-sm text-gray-600 hover:text-gray-900 transition mb-8"
        >
          ← Back to all blog posts
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{`${post.date} • #${post.category.toLowerCase()}`}</p>

        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={500}
          className="rounded-lg mb-8 w-full object-cover"
        />

        <p className="text-lg text-gray-700">{post.excerpt}</p>
      </div>
    </MainLayout>
  );
}
