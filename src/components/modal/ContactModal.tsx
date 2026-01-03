import SocialLinks from "../cards/SocialLinks";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal (
  {isOpen, onClose}: ContactModalProps
) {
  if (!isOpen) return null;

  return (
    /* Overlay */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      
      {/* Modal box */}
      <div className="bg-white dark:bg-darkCard rounded-2xl p-8 w-[90%] max-w-md relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close contact modal"
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-accent"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">
          Let’s connect!
        </h2>

        <SocialLinks className="justify-center"/>
      </div>
    </div>
  );
}
