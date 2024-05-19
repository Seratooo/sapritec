import Image from "next/image";
import CardHome from "../home/cardHome";

export default function AllPosts() {
  return (
    <div className="mt-16 p-4 flex flex-col justify-center items-center">
      <div className="max-w-[73rem] space-y-8">
        <h3 className="text-3xl font-bold">Nossas publicações</h3>
        <div className="flex gap-4 flex-wrap">
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
        </div>
      </div>
    </div>
  );
}
