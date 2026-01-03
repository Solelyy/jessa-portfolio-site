import SocialLinks from "@/components/cards/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t-2 border-lightBorder dark:border-darkBorder">
      <div className="container mx-auto text-center p-4">
        
        <SocialLinks className="justify-center my-4" />

        <p>
          &copy; 2025 Jessa Gozun. Built using React —{" "}
          <a
            href="https://github.com/Solelyy/jessa-portfolio-site"
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}
