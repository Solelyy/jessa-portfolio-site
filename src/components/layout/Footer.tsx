import githubLightMode from "@/assets/logos/github.svg";
import githubDarkMode from "@/assets/logos/github-darkmode.svg";
import linkedIn from "@/assets/logos/linkedin.svg";
import gmail from "@/assets/logos/gmail.svg";
import instagram from "@/assets/logos/instagram.svg";

export default function Footer () {
    const imgStyle = "h-8 w-auto object-contain";

    return (
        <footer className="border-t-2 border-lightBorder dark:border-darkBorder">
            <div className="container mx-auto text-center p-4">
                <div className="flex gap-4 mx-auto justify-center m-4">

                    <a
                    href="mailto:jessagozun.connect@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img 
                            src={gmail} 
                            alt="Gmail logo" 
                            className={imgStyle}
                        >
                        </img>
                    </a>

                    <a 
                    href="https://github.com/Solelyy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center">
                        <img 
                            src={githubDarkMode} 
                            alt="Github logo" 
                            className={`${imgStyle} hidden dark:block`}>
                        </img>
                        
                        <img 
                            src={githubLightMode} 
                            alt="Github logo" 
                            className={`${imgStyle} dark:hidden`}>
                        </img>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/jessa-nazarene-gozun-1955801b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img 
                            src={linkedIn} 
                            alt="Linked in logo" 
                            className={imgStyle}>
                        </img>
                    </a>

                    <a
                    href="https://www.instagram.com/t.solely?igsh=cXplcW4zdDhrajZ3"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img 
                            src={instagram} 
                            alt="Instagram logo" 
                            className={imgStyle}>
                        </img>
                    </a>
                </div>   
                
                &copy; 2025 Jessa Gozun. Built using React, see source code on 
                <span> <a href="https://github.com/Solelyy/jessa-portfolio-site" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent"
                >Github</a></span>.
            </div>
        </footer>
    );
}