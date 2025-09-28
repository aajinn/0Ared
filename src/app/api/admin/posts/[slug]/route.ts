import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { isAuthenticated } from '@/src/lib/auth';

const contentDir = path.join(process.cwd(), 'content');

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

// Helper function to find file by slug
async function findFileBySlug(slug: string): Promise<string | null> {
  try {
    const files = await fs.readdir(contentDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    for (const file of markdownFiles) {
      const filePath = path.join(contentDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const parsed = parseFrontmatter(content);
      
      // Check if slug matches or if filename matches
      if (parsed.slug === slug || file.replace(/\.md$/, '') === slug) {
        return file;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error finding file by slug:', error);
    return null;
  }
}

// GET /api/admin/posts/[slug] - Get specific blog post
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check authentication
    if (!isAuthenticated()) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    const fileName = await findFileBySlug(slug);
    
    if (!fileName) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const filePath = path.join(contentDir, fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsed = parseFrontmatter(fileContent);
    
    // Get file stats for additional metadata
    const stats = await fs.stat(filePath);
    
    return NextResponse.json({
      ...parsed,
      filename: fileName,
      slug: parsed.slug || fileName.replace(/\.md$/, ''),
      title: parsed.title || fileName.replace(/\.md$/, '').replace(/-/g, ' '),
      updatedAt: stats.mtime.toISOString(),
      size: stats.size
    });
    
  } catch (error) {
    console.error('Error reading blog post:', error);
    return NextResponse.json(
      { error: 'Failed to read blog post' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/posts/[slug] - Update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check authentication
    if (!isAuthenticated()) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { slug } = params;
    const body = await request.json();
    const { title, content, newSlug, status, tags, excerpt } = body;
    
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    const currentFileName = await findFileBySlug(slug);
    
    if (!currentFileName) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const currentFilePath = path.join(contentDir, currentFileName);
    
    // Read current file to preserve date if not provided
    const currentContent = await fs.readFile(currentFilePath, 'utf-8');
    const currentParsed = parseFrontmatter(currentContent);
    
    // Use new slug or keep current one
    const finalSlug = newSlug || slug;
    const newFileName = `${finalSlug}.md`;
    const newFilePath = path.join(contentDir, newFileName);
    
    // If slug changed, check if new file already exists
    if (finalSlug !== slug) {
      try {
        await fs.access(newFilePath);
        return NextResponse.json(
          { error: 'A blog post with this slug already exists' },
          { status: 409 }
        );
      } catch {
        // File doesn't exist, which is what we want
      }
    }
    
    // Create frontmatter and content
    const frontmatter = createFrontmatter({
      title,
      slug: finalSlug,
      date: currentParsed.date, // Preserve original date
      status,
      tags,
      excerpt
    });
    
    const fullContent = frontmatter + content;
    
    // Write to new file
    await fs.writeFile(newFilePath, fullContent, 'utf-8');
    
    // If slug changed, delete old file
    if (finalSlug !== slug && currentFilePath !== newFilePath) {
      await fs.unlink(currentFilePath);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully',
      slug: finalSlug,
      filename: newFileName
    });
    
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/posts/[slug] - Delete blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Check authentication
    if (!isAuthenticated()) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const { slug } = params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    const fileName = await findFileBySlug(slug);
    
    if (!fileName) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    const filePath = path.join(contentDir, fileName);
    await fs.unlink(filePath);
    
    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
      slug
    });
    
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}