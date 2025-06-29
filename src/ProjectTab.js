function ProjectTab({ title, description, githubLink }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
}
