import Image from "next/image";

export default function MainSection() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold">
        Feature name
        <span className="text-teal-400"> Highlighted name</span>
      </h1>
      <p className="text-sm text-gray-400 w-[30rem] text-center">
        Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est
        esse duis occaecat reprehenderit pariatur.
      </p>

      <div className="pt-4">
        <Image
          src={`/assets/home/mainImage.png`}
          width={1176}
          height={600}
          className="select-none rounded-md"
          alt="Home Image"
        />
      </div>
    </main>
  );
}
