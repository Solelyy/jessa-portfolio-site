import locationImage from "@/assets/images/location-image.png"
export default function LocationCard() {
    return (
         <main className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl">
            <img 
            src={locationImage} 
            alt="Location on the map"
            className="rounded-2xl" />
        </main>
    );
}