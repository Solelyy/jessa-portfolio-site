import { motion } from "framer-motion";
import reactLogo from "@/assets/logos/react.svg";
import typeScriptLogo from "@/assets/logos/typescript.png";
import jsLogo from "@/assets/logos/js.png";
import javaLogo from "@/assets/logos/java.png";
import mysqlLogo from "@/assets/logos/mysql.svg";
import gitLogo from "@/assets/logos/git.png";
import gitHubDark from "@/assets/logos/github-darkmode.svg";
import gitHubLight from "@/assets/logos/github.svg";
import html from "@/assets/logos/html.png";
import css from "@/assets/logos/css.png";
import figma from "@/assets/logos/figma.png";
import vscode from "@/assets/logos/vscode.svg";
import intellij from "@/assets/logos/intellij.svg";
import tailwind from "@/assets/logos/tailwindcss.svg";
import springboot from "@/assets/logos/springboot.svg";

type NormalTech = { type: "normal"; name: string; src: string };
type GithubTech = { type: "github"; name: string; srcDark: string; srcLight: string };
type Tech = NormalTech | GithubTech;

const techs: Tech[] = [
  { type: "normal", name: "React", src: reactLogo },
  { type: "normal", name: "TypeScript", src: typeScriptLogo },
  { type: "normal", name: "JavaScript", src: jsLogo },
  { type: "normal", name: "Java", src: javaLogo },
  { type: "normal", name: "Spring Boot", src: springboot },
  { type: "normal", name: "Tailwind CSS", src: tailwind },
  { type: "normal", name: "HTML", src: html },
  { type: "normal", name: "CSS", src: css },
  { type: "normal", name: "MySQL", src: mysqlLogo },
  { type: "normal", name: "Git", src: gitLogo },
  { type: "normal", name: "Figma", src: figma },
  { type: "normal", name: "VS Code", src: vscode },
  { type: "normal", name: "IntelliJ", src: intellij },
  { type: "github", name: "GitHub", srcLight: gitHubLight, srcDark: gitHubDark },
];

export default function TechStack() {
  const imgStyle = "h-12 w-12 object-contain inline-block will-change-transform";

  return (
    <div className="flex flex-col mt-4">
      <p className="text-center text-lg opacity-40 text-accent">Tech Stack and Tools</p>

      <div className="relative bg-white dark:bg-darkCard border border-white dark:border-darkBg rounded-2xl h-32 w-full mt-4 overflow-hidden">
        {/* Marquee wrapper */}
        <div className="whitespace-nowrap animate-marquee">
          {[...techs, ...techs].map((tech, index) => (
            <motion.div
              key={index}
              className="relative group inline-block mr-10"
              whileHover={{ scale: 1.2 }}
            >
              {tech.type === "normal" && <img src={tech.src} alt={tech.name} className={imgStyle} />}
              {tech.type === "github" && (
                <>
                  <img src={tech.srcDark} alt={tech.name} className={`${imgStyle} hidden dark:block`} />
                  <img src={tech.srcLight} alt={tech.name} className={`${imgStyle} dark:hidden`} />
                </>
              )}
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2
                text-xs px-2 py-1 rounded-md
                bg-white dark:bg-darkCard
                text-black dark:text-white
                opacity-0 group-hover:opacity-100 transition
                whitespace-nowrap pointer-events-none">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
