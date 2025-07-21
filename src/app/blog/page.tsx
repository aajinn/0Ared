import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const BLOG_DIR = path.join(process.cwd(), 'content');

function getBlogPosts() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      slug: file.replace(/\.md$/, ''),
      fileName: file,
    }));
}

export default function BlogIndex() {
  const posts = getBlogPosts();
  return (
    <main className="container mx-auto px-3 sm:px-6 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">Blog</h1>
      <ul className="space-y-3 sm:space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block text-blue-600 hover:underline text-base sm:text-lg px-2 py-3 rounded-lg transition-colors duration-200 hover:bg-blue-50 focus:bg-blue-100 focus:outline-none"
            >
              {post.slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 