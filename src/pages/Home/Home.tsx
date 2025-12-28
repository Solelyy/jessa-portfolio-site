import LocationCard from "@/components/cards/LocationCard";
import ProfileCard from "@/components/cards/ProfileCard";
import ResumeCard from "@/components/cards/ResumeCard";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-stetch gap-4 m-12">
      
      {/* Left: Profile */}
      <div className="w-full lg:w-3/5 items-stretch">
        <ProfileCard />
      </div>

      {/* Right: Resume + Location */}
      <div className="w-full lg:w-2/5 flex flex-col gap-4">
        <ResumeCard />
        <LocationCard />
      </div>

    </section>
  );
}
