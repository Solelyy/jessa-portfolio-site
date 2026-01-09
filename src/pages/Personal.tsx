import PersonalHero from "@/components/cards/PersonalHero";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";

export default function Personal () {
return (
    <main className="min-h-screen flex flex-col mt-10 mb-10 md:m-12">
       <motion.div
         variants={item}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, margin: "-100px" }}
       >
         <PersonalHero />
       </motion.div>
    </main>
);
};