import { useEffect, useState } from "react";
import searchIcon from "@/assets/icons/search-icon.svg";

const RESUME_PATH = "/Jessa_Gozun_Resume.pdf";

export default function ResumeCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const openResume = () => {
        setError(false);
        setIsOpen(true);
  };

  //disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden")
  }, [isOpen]);

  return (
    <>
      {/* Resume Card */}
      <main className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder p-6 md:p-4 rounded-2xl h-full card-shadow">
        <p className="text-xs opacity-50">2026 CV</p>
        <div className="flex justify-between items-center">
          <p className="text-3xl">Resume</p>
          <img
            src={searchIcon}
            alt="Search icon"
            className="h-8 cursor-pointer"
            onClick={openResume}
          />
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={() => setIsOpen(false)}>
          
          <div className="bg-white dark:bg-darkCard w-11/12 md:w-4/5 lg:w-3/5 h-4/5 rounded-2xl overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              aria-label="Close resume"
              className="absolute top-4 right-4 text-black dark:text-white,hover:text-accent hover:text-accent text-xl font-bold z-10"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* PDF */}
            {!error && (
              <iframe
                src={RESUME_PATH}
                title="Jessa Gozun Resume"
                className="w-full h-full"
                onLoad={(e) => {
                  const doc = e.currentTarget.contentDocument;
                  if (doc?.contentType === "text/html") {
                    setError(true);
                  }
                }}
              />
            )}

            {/* Fallback */}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Resume not found
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
