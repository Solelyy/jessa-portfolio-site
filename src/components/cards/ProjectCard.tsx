import lookupBlack from "@/assets/icons/lookup.svg";
import lookupWhite from "@/assets/icons/lookupWhite.svg";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  projectLink: string;
  codeLink: string;
  techStack: string[];
  role: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  projectLink,
  codeLink,
  techStack,
  role,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl p-8 flex flex-col">
      
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
        <h3 className="text-accent font-bold text-md">
          {title}
        </h3>

        <p className="text-xs opacity-60 mt-1">{role}</p>

        <p className= {`mt-2 text-sm transition-all ${expanded ? "" : "line-clamp-3"} `}>
          {description}
        </p>

        {description.length > 120 && (
          <button onClick={() => setExpanded(!expanded)}
          className="mt-1 text-xs text-accent hover:underline self-start">
            {expanded ? "Show less" : "Show more"}
          </button>
        )}

        {/*Tech stack used*/}
        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map(tech => (
            <span
            key={tech}
            className="bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 text-sm">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent py-1 px-6 rounded-md text-white whitespace-nowrap inline-flex items-center gap-4 hover:opacity-90 transition"
          >
            Project
            <img
              src={lookupWhite}
              className="h-3 w-3 object-contain"
              alt={`${title} project link`}
            />
          </a>

          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-darkBg border border-lightBorder dark:border-darkBorder py-1 px-6 rounded-md text-black dark:text-white whitespace-nowrap inline-flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-darkBorder transition"
          >
            Code
            <img
              src={lookupBlack}
              className="h-3 w-3 object-contain dark:hidden"
              alt={`${title} project code link`}
            />

            <img
              src={lookupWhite}
              className="h-3 w-3 object-contain hidden dark:block"
              alt={`${title} project code link`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
