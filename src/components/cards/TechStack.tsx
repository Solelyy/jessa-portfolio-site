import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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

const techs = [
  { name: "React", src: reactLogo },
  { name: "TypeScript", src: typeScriptLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "Java", src: javaLogo },
  { name: "Spring Boot", src: springboot },
  { name: "Tailwind CSS", src: tailwind },
  { name: "HTML", src: html },
  { name: "CSS", src: css },
  { name: "MySQL", src: mysqlLogo },
  { name: "Git", src: gitLogo },
  { name: "Figma", src: figma },
  { name: "VS Code", src: vscode },
  { name: "IntelliJ", src: intellij },
];

export default function TechStack() {
  const controls = useAnimation();
  const imgStyle = "h-12 w-12 object-contain shrink-0";

  const startMarquee = (duration: number) => {
    controls.start({
      x: "-50%",
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startMarquee(20);
  }, []);

  return (
    <div className="flex flex-col mt-4">
      <p className="text-center text-lg opacity-40">Tech Stack and Tools</p>

      <div className="relative bg-white dark:bg-darkCard border border-white dark:border-darkBg rounded-2xl h-32 w-full mt-4 overflow-hidden flex items-center">
        <motion.div
          className="flex gap-10 items-center w-max"
          animate={controls}
          onHoverStart={() => startMarquee(60)}
          onHoverEnd={() => startMarquee(20)}
        >
          {/* Tech logos */}
          {[...techs, ...techs].map((tech, index) => (
            <motion.div
              key={index}
              className="relative group flex items-center"
              whileHover={{ scale: 1.2 }}
            >
              <img src={tech.src} alt={tech.name} className={imgStyle} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2
                text-xs px-2 py-1 rounded-md bg-white dark:bg-darkCard text-black dark:text-white
                opacity-0 group-hover:opacity-100 transition
                whitespace-nowrap pointer-events-none"
              >
                {tech.name}
              </span>
            </motion.div>
          ))}

          {/* GitHub special case for dark/light */}
          <motion.div className="relative group flex items-center">
            <img
              src={gitHubDark}
              alt="GitHub"
              className="h-12 w-12 object-contain shrink-0 hidden dark:block"
            />
            <img
              src={gitHubLight}
              alt="GitHub"
              className="h-12 w-12 object-contain shrink-0 dark:hidden"
            />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2
              text-xs px-2 py-1 rounded-md bg-black text-white
              opacity-0 group-hover:opacity-100 transition
              whitespace-nowrap pointer-events-none"
            >
              GitHub
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
