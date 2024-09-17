import fs from "fs";
import path from "path";
import projects from "../projects";
import ReactMarkdown from "react-markdown"; // Import react-markdown

export default async function ProjectPage({
  params,
}: {
  params: { projectName: string };
}) {
  console.log(params.projectName);
  const project = projects.find((p) => p.slug === params.projectName);
  console.log(project);
  if (!project) {
    return <div>Project not found</div>;
  }

  // Construct the markdown file path
  const markdownPath = path.join(
    process.cwd(),
    "app/projects/projects-data",
    `${project.slug}.md`
  ); // Adjusted path

  // Read the markdown file
  let markdownContent;
  try {
    markdownContent = fs.readFileSync(markdownPath, "utf-8");
  } catch (error) {
    return <div>Error loading project details.</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="p-6 w-9/12">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-600">{project.description}</p>

        <div className="mt-4 w-9/12">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>{" "}
          {/* Use ReactMarkdown to render the markdown */}
        </div>
      </div>
    </div>
  );
}
