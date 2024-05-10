"use client";
import { useState, useEffect } from "react";

export default function MainSection() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="py-4 px-8 sm:px-32 md:px-0">
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center flex-col h-[90vh] z-10 transition-transform duration-2000 transform translate-y-0"
          style={{
            transform: isScrollingDown ? "translateY(15%)" : "translateY(0)",
          }}
        >
          <h1 className="text-white text-3xl md:text-5xl 2xl:text-7xl font-bold mb-8 text-center max-w-screen-lg">
            <span className="text-sky-600">SAPRITEC,</span> a melhor solução
            tecnológica para a sua empresa!
          </h1>

          <p className="text-sm md:text-lg 2xl:text-2xl max-w-screen-md text-center py-8">
            Na Sapritec, estamos moldando o futuro digital com inovação e
            expertise incomparáveis. Nossa missão é clara: impulsionar o
            progresso através da excelência, da integridade e da colaboração.
          </p>
        </div>
      </div>
      <div className="-mt-[90vh] bg-[url('/assets/home/teclado.jpg')] bg-cover h-screen w-full hue-rotate-30 top-7 brightness-[.1] blur-sm"></div>
    </main>
  );
}
