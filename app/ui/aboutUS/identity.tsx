"use client";
import { Gem, Target, View } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Identity(): JSX.Element {
  const [firstInView, setFirstInView] = useState(false);
  const [secondInView, setSecondInView] = useState(false);
  const [thirdInView, setThirdInView] = useState(false);

  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === firstRef.current) {
              setFirstInView(true);
            } else if (entry.target === secondRef.current) {
              setSecondInView(true);
            } else if (entry.target === thirdRef.current) {
              setThirdInView(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(firstRef.current!);
    observer.observe(secondRef.current!);
    observer.observe(thirdRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="md:bg-white" id="aboutus">
      <div className="pt-28 bg-black"></div>
      <div className="md:h-screen flex flex-col md:flex-row justify-between items-start">
        <div
          ref={firstRef}
          className={`animated-div ${
            firstInView ? "slide-in" : ""
          } bg-black h-full px-4 sm:px-16 gap-8 flex flex-col items-center justify-center w-full md:w-[30%] pb-4`}
        >
          <p className="text-4xl 2xl:text-7xl font-bold text-white">Missão</p>
          <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
            Nossa missão é capacitar empresas através de nossa experiência
            incomparável em tecnologia SAP e nossa profunda compreensão Data
            Science e Inteligência Artificial, capacitamos nossos clientes a
            transformarem desafios em oportunidades e alcançarem novos patamares
            de sucesso.
          </p>
          <Target className="size-16 2xl:size-24" />
        </div>
        <div
          ref={secondRef}
          className={`animated-div ${
            secondInView ? "slide-in" : ""
          } bg-sky-900 md:bg-black md:h-[80vh] flex flex-col gap-8 px-4 sm:px-20 justify-center items-center w-full md:w-[35%] pb-4 py-4 my-4 md:my-0 md:py-4`}
        >
          <p className="text-4xl 2xl:text-7xl font-bold text-white">Visão</p>

          <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
            Nossa visão na Sapritec é ser reconhecida como líder em soluções de
            tecnologia da informação, impulsionando a inovação e a transformação
            digital em todo o mundo. Buscamos constantemente superar
            expectativas, moldar o futuro digital e inspirar o sucesso em nossos
            clientes, colaboradores e comunidades.
          </p>
          <View className="size-16 2xl:size-24" />
        </div>
        <div
          ref={thirdRef}
          className={`animated-div ${
            thirdInView ? "slide-in" : ""
          } bg-black md:h-[70vh] flex flex-col gap-8 pb-4 px-4 sm:px-20 justify-center items-center w-full md:w-[35%]`}
        >
          <p className="text-4xl 2xl:text-7xl font-bold text-white">Valores</p>

          <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
            Na Sapritec, nossos valores são o alicerce de tudo o que fazemos.
            Buscamos constantemente a excelência em nossas entregas,
            impulsionados pela inovação e pela busca incansável por soluções que
            transformem o mundo digital. Agimos com integridade em todas as
            nossas interações, cultivando uma cultura de colaboração e respeito
            mútuo.
          </p>
          <Gem className="size-16 2xl:size-24" />
        </div>
      </div>
    </div>
  );
}
