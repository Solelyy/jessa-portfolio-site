import LocationCard from "@/components/cards/LocationCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ProjectGrid from "@/components/cards/ProjectGrid";
import ResumeCard from "@/components/cards/ResumeCard";
import TechStack from "@/components/cards/TechStack";

import { motion } from "framer-motion";
import { item } from "@/lib/animations";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 mt-10 mb-10 md:m-12">

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
        <motion.div
          className="w-full lg:w-3/5"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          <ProfileCard />
        </motion.div>

        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ResumeCard />
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
          >
            <LocationCard />
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        <TechStack />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        <ProjectGrid />
      </motion.div>

    </main>
  );
}
