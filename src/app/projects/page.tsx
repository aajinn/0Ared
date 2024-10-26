import projects from "./projects"; // Import the projects data
import Layout from "./layout"; // Import the Layout component
import Link from "next/link";

export default function Projects() {
  return (
    <Layout>
      {" "}
      {/* Use the Layout component for centering */}
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 ">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg p-4" // Removed border and hover effect
          >
            <Link
              className="text-xl font-semibold text-blue-500 hover:underline" // Made name a clickable link
              href={project.link}
              prefetch={true}
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
