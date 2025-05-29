// src/components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="no-underline text-inherit">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        {/* Image */}
        <div className="md:w-2/5 w-full p-6 flex items-center justify-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={300}
            className="w-full max-w-[400px] h-auto object-cover rounded-md"
          />
        </div>

        {/* Text */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500">{post.date}</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.excerpt}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <Image
              src="/images/avatar-lauren.png"
              alt="Lauren"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="font-medium text-gray-800">Lauren</span>
            <span>• #{post.category.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
