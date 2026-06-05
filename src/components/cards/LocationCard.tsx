import { MapPin } from "lucide-react";

export default function LocationCard() {
  return (
    <div className="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl overflow-hidden card-shadow">
      {/* Location Header */}
      <div className="flex items-center gap-3 p-6 pb-4 border-b border-lightBorder dark:border-darkBorder">
        <MapPin size={20} className="text-accent shrink-0" />
        <span className="font-semibold text-lg">Quezon City, Philippines</span>
      </div>

      {/* Map Container */}
      <div className="overflow-hidden">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437.078384705352!2d121.02201159367463!3d14.697340228522197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b127a3ab5e71%3A0xf3288aa894218d9d!2sBagbag%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1767534273360!5m2!1sen!2sph"
          className="block w-full h-64"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
