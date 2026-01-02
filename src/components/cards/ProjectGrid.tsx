import ProjectCard from "./ProjectCard";
import codeCampus from "@/assets/images/codecampus.jpg";
import qcucafe from "@/assets/images/qcucafe.jpg";
import portfolio from "@/assets/images/portfoliosite.png";

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  projectLink: string;
  codeLink: string;
  techStack: string[];
  role: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Site",
    image: portfolio,
    description: "Designed and built my personal portfolio website using React, TypeScript, and Tailwind CSS to showcase my projects and skills. Focused on responsive, component-based UI design, reusable components, and light/dark mode support.",
    projectLink: "",
    codeLink: "https://github.com/Solelyy/jessa-portfolio-site",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    role: "Full-Stack Developer",
  },
  {
    id: 2,
    title: "CodeCampus: Gamified Coding Platform",
    image: codeCampus,
    description: "A gamified coding platform that helps students practice programming through structured activities, automated code evaluation, and leaderboards. I developed the backend REST API using Spring Boot, implemented JWT-based authentication with role-based access, and handled activity and submission management for instructors and students.",
    projectLink: "",
    codeLink: "https://github.com/Solelyy/CodeCampus-Springboot",
    techStack: ["Spring Boot", "Vanilla JS", "HTML", "CSS", "MySQL", "REST API"],
    role: "Full-Stack Developer",
  },
  {
    id: 3,
    title: "QCU Café Inventory & POS",
    image: qcucafe,
    description: " A point-of-sale system with integrated inventory management designed for a small school café. Built during my first year of college, the system automatically tracks sales and deducts inventory items, helping reduce manual stock monitoring and errors.",
    projectLink: "",
    codeLink: "https://github.com/Solelyy/QCUCafe",
    techStack: ["Java", "JavaFX", "CSS", "MySQL"],
    role: "Full-Stack Developer",
  },
];

export default function ProjectGrid() {
  return (
    <section className="mt-10">
      <p className="text-center text-lg opacity-40">
        My Projects
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
