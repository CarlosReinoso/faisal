import ProjectCard from "../components/ProjectCard";
import MarkdownContent from "./common/MarkdownContent";

const projects = [
  {
    imageUrl: "/projects/project1.jpg",
    location: "Kennington, Central London",
    category: "Development",
    conversion: "Commercial to Residential - In Progress",
  },
  {
    imageUrl: "/projects/project2.jpg",
    location: "Dagenham",
    category: "Development",
    conversion: "Residential - Completed",
  },
  {
    imageUrl: "/projects/project3.jpg",
    location: "Ilford",
    category: "Development",
    conversion: "Residential - Completed",
  },
  {
    imageUrl: "/projects/project4.jpg",
    location: "Braintree",
    category: "Investment",
    conversion: "Commercial to Residential - Completed",
  },
  {
    imageUrl: "/projects/project5.jpg",
    location: "Chadwell Heath",
    category: "Residential",
    conversion: "Residential - Completed",
  },
  {
    imageUrl: "/projects/project6.jpg",
    location: "Stafford",
    category: "Investment",
    conversion: "Commercial to Residential - In Progress",
  },
];

export default function ProjectsSection() {
  return (
    <div>
      <div className="min-h-screen text-white p-8">
        <div className={"text-center"}>
          <MarkdownContent markdownFilePath="ProjectsSectionTitle.md" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              location={project.location}
              area={project.area}
              category={project.category}
              conversion={project.conversion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
