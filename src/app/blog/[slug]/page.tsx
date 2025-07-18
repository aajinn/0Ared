import fs from 'fs';
import path from 'path';
import Description from '@/src/components/Description';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

const BLOG_DIR = path.join(process.cwd(), 'content');

function getPostContent(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const content = getPostContent(params.slug);
  if (!content) {
    return <div className="container mx-auto px-6 py-12"><h1>404 - Blog post not found</h1></div>;
  }
  // Extract the first Markdown heading as the title
  const match = content.match(/^#\s+(.+)$/m);
  const title = match ? match[1] : params.slug.replace(/-/g, ' ');
  const body = match ? content.replace(match[0], '') : content;
  return (
    <main className="flex justify-center">
      <article className="prose prose-xl md:prose-2xl max-w-2xl w-full bg-white/90 rounded-lg shadow-lg p-8 my-12">
        <Link href="/blog" className="inline-block mb-6 text-blue-600 hover:underline">← Back to Blog</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900">{title}</h1>
        <Description markdownContent={body} />
      </article>
    </main>
  );
} 