import Image from "next/image";

export default function MainSection() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col relative rounded-md mt-0 h-[87vh] md:h-auto">
        <Image
          src={"/assets/kwonmore/Image 59.png"}
          width={1176}
          height={494}
          className="rounded-md h-full object-cover transition-all duration-700"
          alt="home"
        ></Image>
        <button className="bg-teal-600 shadow-xl px-4 py-2 rounded-full text-sm absolute bottom-24 left-2 md:left-3">
          Acompanhe as nossas redes
        </button>
        <h3 className="text-lg 2xl:text-3xl font-bold mb-4 mt-2 max-w-[36rem] absolute bottom-0 left-2 md:left-3">
          SAPRITEC, conectamos os nossos clientes ao mundo tecnológico!
        </h3>
      </div>
    </main>
  );
}
