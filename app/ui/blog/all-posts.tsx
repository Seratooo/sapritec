import Image from "next/image";
import CardHome from "../home/cardHome";

export default function AllPosts() {
  return (
    <div className="px-4 py-16 flex flex-col justify-center gap-8">
      <h3 className="text-4xl font-bold">Nossas publicações</h3>
      <div className="self-center flex gap-8 flex-wrap md:w-[80rem] m-auto items-center justify-center">
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
    </div>
  );
}
