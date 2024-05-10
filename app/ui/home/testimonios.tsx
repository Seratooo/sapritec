"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
export default function Testimonios() {
  const [firstInView, setFirstInView] = useState(false);

  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === firstRef.current) {
              setFirstInView(true);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(firstRef.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={firstRef}
      className={`animated-div ${
        firstInView ? "slide-in" : ""
      } flex flex-col md:flex-row gap-4 md:gap-24 items-center justify-center px-12 md:px-4 pt-16 pb-48`}
    >
      <Image
        src={`/assets/home/testimonios/jerico.png`}
        width={280}
        height={320}
        alt="testimonios"
        className="rounded-full md:rounded-none w-56 h-56 md:w-auto object-cover"
      />
      <div className="w-full md:w-[40rem] space-y-4 md:space-y-8">
        <span className="flex gap-1 justify-center md:justify-start">
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
          <Star className="text-yellow-400" />
        </span>
        <p className="text-md 2xl:text-xl text-gray-100 text-center md:text-left">
          Trabalhar na Sapritec tem sido uma jornada incrível de aprendizado e
          crescimento profissional. Aqui, não apenas tenho a oportunidade de
          aplicar minhas habilidades e conhecimentos em projetos desafiadores,
          mas também recebo um apoio integral de uma equipe apaixonada e
          comprometida com o sucesso de cada membro.
        </p>
        <div>
          <p className="font-bold text-lg 2xl:text-3xl text-center md:text-left">
            Jericó Calala
          </p>
          <p className="text-gray-100 text-sm 2xl:text-xl text-center md:text-left">
            Designer
          </p>
        </div>
      </div>
    </div>
  );
}
