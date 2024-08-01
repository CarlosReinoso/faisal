import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    imageUrl: "/projects/project1.jpg",
    location: "Area",
    category: "Investment",
  },
  {
    imageUrl: "/projects/project2.jpg",
    location: "",
    category: "Development",
  },
  {
    imageUrl: "/projects/project3.jpg",
    location: "Ilford",
    category: "Residential",
  },
  {
    imageUrl: "/projects/project4.jpg",
    location: "Kennington, Central London",
    category: "Development",
  },
  {
    imageUrl: "/projects/project5.jpg",
    location: "Chadwell Heath",
    category: "Residential",
  },
  {
    imageUrl: "/projects/project6.jpg",
    location: "Dagenham",
    category: "Residential",
  },
];

export default function ProjectsSection() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            location={project.location}
            area={project.area}
            category={project.category}
          />
        ))}
      </div>
    </div>
  );
}
