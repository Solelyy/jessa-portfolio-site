import LocationCard from "@/components/cards/LocationCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ResumeCard from "@/components/cards/ResumeCard";
import TechStack from "@/components/cards/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-12">
      {/*Profile Section */}
      <div className="flex flex-col lg:flex-row lg:items-stetch gap-4">
        {/* Left: Profile */}
        <div className="w-full lg:w-3/5 items-stretch">
          <ProfileCard />
        </div>

        {/* Right: Resume + Location */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <ResumeCard />
          <LocationCard />
        </div>
      </div>

      {/*Tech Stack Section */}
      <div>
        <TechStack />
      </div>
      
    </main>
  );
}
