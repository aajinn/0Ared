import projects from "./projects"; // Import the projects data
import Layout from "./layout"; // Import the Layout component

export default function Projects() {
  return (
    <Layout>
      {" "}
      {/* Use the Layout component for centering */}
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border rounded-lg p-4 bg-gray-100 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <a
              className="text-blue-500 hover:underline  block mt-2"
              href={project.link}
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
