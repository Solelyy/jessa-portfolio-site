import myPic from "@/assets/images/myself.jpg"

export default function ProfileCard() {
    const goToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <main className="flex flex-col md:flex-row justify-center h-full gap-6 lg:gap-10 items-center p-6 sm:p-8 lg:p-10 bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl card-shadow">
             {/* Image container */}
            <div className="relative flex items-center justify-center shrink-0">
                <img
                    src={myPic}
                    alt="My picture"
                    className="h-54 w-54 sm:h-56 sm:w-56 lg:h-72 lg:w-52 object-cover rounded-xl shadow-md shrink-0"
                />
            </div>

            <div className="text-center md:text-left max-w-md lg:max-w-lg">
                <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-accent">Jessa Gozun</span>
                </h2>
                <h2 className="text-accent/70 text-base sm:text-lg lg:text-xl mb-3 font-medium">
                    Aspiring Junior Full-Stack Developer
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm pursuing BS Information Technology at Quezon City University. I build responsive
                    web applications with React and TypeScript, and backend services using Spring Boot. Willing to learn new stack and open for opportunities.
                </p>

                <button 
                    onClick={() => goToProjects()}
                    className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2 rounded-lg mt-5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                >
                    View Projects
                </button>        
            </div>
        </main>
    );
}
