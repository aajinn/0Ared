import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { isAuthenticated } from '@/src/lib/auth';

const contentDir = path.join(process.cwd(), 'content');

// Ensure content directory exists
async function ensureContentDir() {
  try {
    await fs.mkdir(contentDir, { recursive: true });
  } catch (error) {
    console.error('Error creating content directory:', error);
    throw error;
  }
}

// Helper function to parse frontmatter from markdown content
function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = match[1];
    const body = match[2];
    
    // Parse frontmatter fields
    const titleMatch = frontmatter.match(/title:\s*"?([^"\n]+)"?/);
    const slugMatch = frontmatter.match(/slug:\s*([^\s\n]+)/);
    const dateMatch = frontmatter.match(/date:\s*([^\s\n]+)/);
    const statusMatch = frontmatter.match(/status:\s*([^\s\n]+)/);
    const tagsMatch = frontmatter.match(/tags:\s*\[(.*?)\]/);
    const excerptMatch = frontmatter.match(/excerpt:\s*"?([^"\n]+)"?/);
    
    return {
      title: titleMatch ? titleMatch[1] : '',
      slug: slugMatch ? slugMatch[1] : '',
      date: dateMatch ? dateMatch[1] : new Date().toISOString(),
      status: statusMatch ? statusMatch[1] : 'published',
      tags: tagsMatch ? tagsMatch[1].split(',').map(tag => tag.trim().replace(/"/g, '')) : [],
      excerpt: excerptMatch ? excerptMatch[1] : '',
      content: body.trim()
    };
  }
  
  // If no frontmatter, treat entire content as body
  return {
    title: '',
    slug: '',
    date: new Date().toISOString(),
    status: 'published',
    tags: [],
    excerpt: '',
    content: content.trim()
  };
}

// Helper function to create frontmatter string
function createFrontmatter(data: {
  title: string;
  slug: string;
  date?: string;
  status?: string;
  tags?: string[];
  excerpt?: string;
}) {
  const frontmatter = [
    '---',
    `title: "${data.title}"`,
    `slug: ${data.slug}`,
    `date: ${data.date || new Date().toISOString()}`,
    `status: ${data.status || 'published'}`,
  ];
  
  if (data.tags && data.tags.length > 0) {
    frontmatter.push(`tags: [${data.tags.map(tag => `"${tag}"`).join(', ')}]`);
  }
  
  if (data.excerpt) {
    frontmatter.push(`excerpt: "${data.excerpt}"`);
  }
  
  frontmatter.push('---', '');
  
  return frontmatter.join('\n');
}

// GET /api/admin/posts - List all blog posts
export async function GET() {
  try {
    // Check authentication
    if (!isAuthenticated()) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    await ensureContentDir();
    
    const files = await fs.readdir(contentDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    // Read each file and extract frontmatter
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(contentDir, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const parsed = parseFrontmatter(fileContent);
        
        // Get file stats for additional metadata
        const stats = await fs.stat(filePath);
        
        return {
          ...parsed,
          filename: file,
          slug: parsed.slug || file.replace(/\.md$/, ''),
          title: parsed.title || file.replace(/\.md$/, '').replace(/-/g, ' '),
          updatedAt: stats.mtime.toISOString(),
          size: stats.size
        };
      })
    );
    
    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return NextResponse.json({
      posts,
      total: posts.length
    });
    
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to read blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/admin/posts - Create new blog post
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!isAuthenticated()) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, content, slug, status, tags, excerpt } = body;
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    await ensureContentDir();
    
    // Generate slug if not provided
    const postSlug = slug || title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();

    const fileName = `${postSlug}.md`;
    const filePath = path.join(contentDir, fileName);
    
    // Check if file already exists
    try {
      await fs.access(filePath);
      return NextResponse.json(
        { error: 'A blog post with this slug already exists' },
        { status: 409 }
      );
    } catch {
      // File doesn't exist, which is what we want
    }
    
    // Create frontmatter and content
    const frontmatter = createFrontmatter({
      title,
      slug: postSlug,
      status,
      tags,
      excerpt
    });
    
    const fullContent = frontmatter + content;
    
    await fs.writeFile(filePath, fullContent, 'utf-8');
    
    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      slug: postSlug,
      filename: fileName
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}