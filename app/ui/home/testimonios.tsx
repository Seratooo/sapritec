import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonios() {
  return (
    <div className="flex gap-24 items-center justify-center px-4 py-16">
      <Image
        src={`/assets/home/testimonios/Image 6.png`}
        width={280}
        height={320}
        alt="testimonios"
      />
      <div className="w-[40rem] space-y-8">
        <span className="flex gap-1">
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
        <p className="text-sm text-gray-100">
          "Aliqua cupidatat id duis irure sunt exercitation voluptate cillum.
          Consectetur ad ex do in reprehenderit est dolor elit et exercitation
          do ad. Consectetur ad ex do in reprehenderit est dolor elit et
          exercitation"
        </p>
        <div>
          <p className="font-bold text-sm">Full name</p>
          <p className="text-gray-100 text-sm">Job title</p>
        </div>
      </div>
    </div>
  );
}
