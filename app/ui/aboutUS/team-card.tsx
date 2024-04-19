import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="w-[276px] h-[402px] bg-gray-800 rounded-md overflow-hidden">
      <Image
        src={`/assets/team/Container 60.png`}
        width={276}
        height={192}
        alt="team"
      />
      <div className="p-4 flex flex-col items-center gap-1">
        <p className="text-sm font-bold">Antoni Hurst</p>
        <p className="text-sm text-teal-400">Professional title</p>
        <p className="text-sm text-center py-4 text-gray-300">
          Commodo qui nulla ipsum ea cupidatat sit aliquip dolor.
        </p>
        <div>
          <Linkedin />
        </div>
      </div>
    </div>
  );
}
