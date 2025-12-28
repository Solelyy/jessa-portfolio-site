import searchIcon from "@/assets/icons/search-icon.svg"
export default function ResumeCard() {
    return (
        <main className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder p-8 rounded-2xl">
            <p className="text-xs opacity-50">2026 CV</p>
            <div className="flex justify-between">
                <p className="text-3xl">Resume</p>
                <img 
                src={searchIcon} 
                alt="Search icon"
                className="h-8"></img>
            </div>
        </main>
    );
}