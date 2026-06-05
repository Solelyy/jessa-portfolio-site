import myPic from "@/assets/images/myself.jpg";

export default function ProfileCard() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
        <h2 className="font-semibold text-xl sm:text-lg lg:text-3xl text-gray-900 dark:text-white">
          Hi, I'm <span className="text-accent">Jessa Gozun</span>
        </h2>
        <h2 className="text-accent/70 mt-2 text-base sm:text-lg lg:text-xl mb-3 font-medium">
          Aspiring Web Developer
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm passionate about building modern, scalable web applications and
          crafting intuitive user experiences. I continuously grow as a
          developer by working on real-world projects and deepening my knowledge
          of both frontend and backend development.
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
