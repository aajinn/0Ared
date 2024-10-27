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
    "src/app/projects/projects-data",
    `${project.slug}.md`
  ); // Adjusted path
  console.log(markdownPath);
  // Read the markdown file
  let markdownContent;
  try {
    markdownContent = fs.readFileSync(markdownPath, "utf-8");
  } catch (error) {
    return <div>Error loading project details.</div>;
  }

  return (
    <div className="flex">
      <div className="p-2">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-600 lg:p-10 text-3x1 ">{project.description}</p>

        <div className="mt-4 w-9/12 lg:p-10 lg:text-2xl p-1">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>{" "}
          {/* Use ReactMarkdown to render the markdown */}
        </div>
      </div>
    </div>
  );
}
