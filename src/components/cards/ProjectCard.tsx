import { TvMinimalPlay, Globe, FolderCode } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  demoLink?: string;
  projectLink?: string;
  codeLink: string;
  techStack: string[];
  role: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  demoLink,
  projectLink,
  codeLink,
  techStack,
  role,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const style = demoLink
    ? "bg-white dark:bg-darkBg border border-lightBorder dark:border-darkBorder py-1 px-4 rounded-md text-black dark:text-white whitespace-nowrap inline-flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-darkBorder transition"
    : "bg-accent py-1 px-4 rounded-md text-white whitespace-nowrap flex items-center justify-between gap-4 hover:opacity-90 transition";

  return (
    <div className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl p-8 flex flex-col card-shadow">
      {/* Image */}
      <div className="border border-lightBorder dark:border-darkBorder h-48 rounded-md overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-accent font-bold text-md">{title}</h3>

        <p className="text-sm opacity-60 mt-1">{role}</p>

        <p
          className={`mt-2 text-sm transition-all ${expanded ? "" : "line-clamp-3"} `}
        >
          {description}
        </p>

        {description.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-xs text-accent hover:underline self-start"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

        {/*Tech stack used*/}
        <div className="flex flex-wrap gap-2 mt-5 mb-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 text-sm">
          {demoLink && (
            <Link
              to={demoLink}
              className="bg-accent py-1 px-4 rounded-md text-white whitespace-nowrap flex items-center justify-between gap-4 hover:opacity-90 transition"
            >
              <TvMinimalPlay size={15} />
              Watch Demo
            </Link>
          )}

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={style}
            >
              <Globe size={15} />
              View Website
            </a>
          )}

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-darkBg border border-lightBorder dark:border-darkBorder py-1 px-4 rounded-md text-black dark:text-white whitespace-nowrap inline-flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-darkBorder transition"
          >
            <FolderCode size={15} />
            See Code
          </a>
        </div>
      </div>
    </div>
  );
}
