import Matrix from "@/src/components/Matrix";
import projects from "./projects"; // Import the projects data

import Link from "next/link";

export default function Projects() {
  return (
    <div className="py-8 text-center">
      <Matrix />
      {/* Use the Layout component for centering */}
      <h2 className="text-2xl font-bold mb-4 p-3">Projects</h2>
      <ul className="flex flex-col items-center w-full">
        {" "}
        {/* Center the list container */}
        {projects.map((project) => (
          <li
            key={project.slug}
            className="rounded-lg p-4 text-left w-full max-w-md" // Added max-w-md to limit the width of the list items
          >
            <Link
              className="text-xl font-semibold text-blue-500 hover:underline"
              href={project.link}
              prefetch={true}
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-gray-500">more</p>
    </div>
  );
}
