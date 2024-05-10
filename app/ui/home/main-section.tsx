import { ChevronsDown } from "lucide-react";
import Image from "next/image";

export default function MainSection() {
  return (
    <main className="py-4 px-8 sm:px-32 md:px-0">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col h-[90vh] z-10">
          <h1 className="text-white text-3xl md:text-5xl 2xl:text-7xl font-bold mb-8 text-center max-w-screen-lg">
            <span className="text-sky-600">SAPRITEC,</span> a melhor solução
            tecnológica para a sua empresa!
          </h1>

          <p className="text-sm md:text-lg 2xl:text-2xl max-w-screen-md text-center py-8">
            Na Sapritec, estamos moldando o futuro digital com inovação e
            expertise incomparáveis. Nossa missão é clara: impulsionar o
            progresso através da excelência, da integridade e da colaboração.
          </p>
          <ChevronsDown size={60} className="animate-bounce" />
        </div>
      </div>
      <div className="-mt-[90vh] bg-[url('/assets/home/teclado.jpg')] bg-cover h-screen w-full hue-rotate-30 top-7 brightness-[.1] blur-sm"></div>
    </main>
  );
}
