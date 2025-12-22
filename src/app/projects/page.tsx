import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const PROJECTS_DIR = path.join(process.cwd(), 'projects');

function getProjects() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }
  
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(PROJECTS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      // Normalize line endings
      const normalizedContent = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      const match = normalizedContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
      
      if (match) {
        const frontmatter = match[1];
        const titleMatch = frontmatter.match(/title:\s*"?([^"\n]+)"?/);
        const techMatch = frontmatter.match(/tech:\s*"?([^"\n]+)"?/);
        const liveUrlMatch = frontmatter.match(/liveUrl:\s*"?([^"\n]+)"?/);
        const githubMatch = frontmatter.match(/github:\s*"?([^"\n]+)"?/);
        
        return {
          slug: file.replace(/\.md$/, ''),
          title: titleMatch ? titleMatch[1] : file.replace(/\.md$/, ''),
          tech: techMatch ? techMatch[1] : '',
          liveUrl: liveUrlMatch ? liveUrlMatch[1] : '',
          github: githubMatch ? githubMatch[1] : '',
        };
      }
      
      return {
        slug: file.replace(/\.md$/, ''),
        title: file.replace(/\.md$/, ''),
        tech: '',
        liveUrl: '',
        github: '',
      };
    });
}

export default function ProjectsIndex() {
  const projects = getProjects();
  
  return (
    <main className="container mx-auto px-3 sm:px-6 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">Projects</h1>
      
      {projects.length === 0 ? (
        <p className="text-gray-600 text-center">No projects found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {project.title}
                </Link>
              </h2>
              
              {project.tech && (
                <div className="mb-4">
                  {project.tech.split(',').map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex gap-3 mt-4">
                {project.liveUrl && project.liveUrl.trim() !== '' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm bg-gray-300 text-gray-500 px-3 py-1 rounded cursor-not-allowed">
                    Live Demo
                  </span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}