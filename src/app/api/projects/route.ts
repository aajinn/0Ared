import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const projectsDir = path.join(process.cwd(), 'projects');

async function ensureProjectsDir() {
  try {
    await fs.mkdir(projectsDir, { recursive: true });
  } catch (error) {
    console.error('Error creating projects directory:', error);
    throw error;
  }
}

export async function GET() {
  try {
    await ensureProjectsDir();
    
    const files = await fs.readdir(projectsDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const projects = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(projectsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        
        if (match) {
          const frontmatter = match[1];
          const body = match[2];
          const titleMatch = frontmatter.match(/title:\s*"?([^"\n]+)"?/);
          const slugMatch = frontmatter.match(/slug:\s*([^\s\n]+)/);
          const dateMatch = frontmatter.match(/date:\s*([^\s\n]+)/);
          const techMatch = frontmatter.match(/tech:\s*"?([^"\n]+)"?/);
          const liveUrlMatch = frontmatter.match(/liveUrl:\s*"?([^"\n]+)"?/);
          const githubMatch = frontmatter.match(/github:\s*"?([^"\n]+)"?/);
          
          return {
            title: titleMatch ? titleMatch[1] : file.replace(/\.md$/, ''),
            slug: slugMatch ? slugMatch[1] : file.replace(/\.md$/, ''),
            date: dateMatch ? dateMatch[1] : new Date().toISOString(),
            tech: techMatch ? techMatch[1] : '',
            liveUrl: liveUrlMatch ? liveUrlMatch[1] : '',
            github: githubMatch ? githubMatch[1] : '',
            content: body.trim()
          };
        }
        
        return {
          title: file.replace(/\.md$/, ''),
          slug: file.replace(/\.md$/, ''),
          date: new Date().toISOString(),
          tech: '',
          liveUrl: '',
          github: '',
          content: content.trim()
        };
      })
    );
    
    return NextResponse.json(projects);
    
  } catch (error) {
    console.error('Error reading projects:', error);
    return NextResponse.json(
      { error: 'Failed to read projects' },
      { status: 500 }
    );
  }
}