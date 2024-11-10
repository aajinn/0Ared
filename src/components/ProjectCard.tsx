export default function ProjectCard({ projectName }) {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: `3px 4px 57px 24px ${getRandomColor()}, 0 4px 8px ${getRandomColor()}`,
        textAlign: "center",
        width: "300px",
        height: "00px",
      }}
      className="hover:backdrop-blur-md"
    >
      <h1>{projectName}</h1>
    </div>
  );
}
