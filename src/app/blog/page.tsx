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
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline text-lg">
              {post.slug.replace(/-/g, ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 