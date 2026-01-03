import githubLightMode from "@/assets/logos/github.svg";
import githubDarkMode from "@/assets/logos/github-darkmode.svg";
import linkedIn from "@/assets/logos/linkedin.svg";
import gmail from "@/assets/logos/gmail.svg";
import instagram from "@/assets/logos/instagram.svg";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({
  className = "",
  iconClassName = "h-8 w-auto object-contain",
}: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a href="mailto:jessagozun.connect@gmail.com">
        <img src={gmail} alt="Gmail" className={iconClassName} />
      </a>

      <a href="https://github.com/Solelyy" target="_blank" rel="noreferrer">
        <img
          src={githubDarkMode}
          alt="GitHub"
          className={`${iconClassName} hidden dark:block`}
        />
        <img
          src={githubLightMode}
          alt="GitHub"
          className={`${iconClassName} dark:hidden`}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/jessa-nazarene-gozun-1955801b2/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedIn} alt="LinkedIn" className={iconClassName} />
      </a>

      <a
        href="https://www.instagram.com/t.solely"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="Instagram" className={iconClassName} />
      </a>
    </div>
  );
}
