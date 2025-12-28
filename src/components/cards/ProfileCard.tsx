import myPic from "@/assets/images/myself.jpg"
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
    const navigate = useNavigate();
    return (
        <main className="flex h-full gap-4 items-center p-8 bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl">
        <img
            src={myPic}
            alt="My picture"
            className="h-70 w-50 object-cover rounded-md"
        />

        <div>
            <h2 className="font-bold text-2xl">Hi, I'm Jessa Gozun!</h2>
            <h2 className="text-accent font-bold text-lg mb-3">
            Junior Full-Stack Developer
            </h2>
            <p>
            I’m pursuing BS Information Technology at Quezon City University. I build responsive
            web applications with React and TypeScript, and backend services using Spring Boot.
            </p>

            <button 
            onClick={() => navigate("/projects")}
            className="bg-accent text-white p-2 rounded-md mt-4 h-full w-1/2 ">View Projects</button>        
        </div>
        </main>
    );
}
