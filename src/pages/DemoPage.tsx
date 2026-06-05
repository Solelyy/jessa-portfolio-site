import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  console.log("DemoPage rendered");

  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      slug: "fwd",
      title: "FWD Employee Portal (Coming soon)",
      video: "/videos/fwd-demo.mp4",
    },
    {
      id: 2,
      slug: "monetra",
      title: "Monetra: Simple Banking System",
      video: "/videos/monetra-demo.mp4",
    },
    {
      id: 3,
      slug: "codecampus",
      title: "CodeCampus: Gamified Coding Platform (Coming soon)",
      video: "/videos/codecampus-demo.mp4",
    },
    {
      id: 4,
      slug: "qcucafe",
      title: "QCU Café Inventory & POS (Coming soon))",
      video: "/videos/qcucafe-demo.mp4",
    },
  ];

  const project = projects.find((project) => project.slug === projectId);

  console.log(project);

  if (!project) {
    return <h1>Demo not found.</h1>;
  }
  return (
    <main className="w-full">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-24 md:pb-24">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-accent hover:opacity-80 transition"
        >
          <ArrowLeft size={20} />
          <span className="text-lg font-medium">Back</span>
        </button>

        {/* Title Section */}
        <div className="mb-5">
          <h1 className="text-lg md:text-xl font-semibold mb-2">
            {project.title}
          </h1>
        </div>

        {/* Video Container */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video
            controls
            controlsList="nodownload"
            autoPlay
            muted
            className="w-full h-auto block"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
