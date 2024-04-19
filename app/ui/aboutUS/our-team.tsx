import { Linkedin } from "lucide-react";
import Image from "next/image";
import TeamCard from "./team-card";

export default function OurTeam() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold">Our Team</h1>
      <p className="text-sm text-gray-400 md:w-[30rem] text-center">
        Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est
        esse duis occaecat reprehenderit pariatur.
      </p>

      <div className="pt-4 flex gap-4 flex-wrap justify-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </main>
  );
}
