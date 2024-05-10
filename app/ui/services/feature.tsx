"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
export default function Feactures() {
  const services = [
    {
      Name: "SAP",
      description: `Com uma arquitetura altamente modular e flexível, o SAP ERP pode ser adaptado às necessidades específicas de qualquer organização. Sua capacidade de integração total permite uma comunicação contínua entre os diferentes departamentos, eliminando silos de informação e promovendo a colaboração eficaz.`,
    },
    {
      Name: "PRIMAVERA ERP",
      description: `Esta plataforma permite uma visão holística das operações empresariais, capacitando as equipes a tomar decisões informadas e estratégicas. Com recursos avançados de relatórios e análises, o PRIMAVERA ERP permite uma compreensão profunda do desempenho organizacional`,
    },
    {
      Name: "SAP S/4HANA",
      description: `Apresentamos o SAP S/4HANA, a próxima geração em gestão empresarial construída na poderosa plataforma SAP HANA. Esta solução revolucionária oferece processamento em tempo real e análises avançadas, capacitando as empresas a alcançar novos patamares de desempenho e eficácia operacional.`,
    },
    {
      Name: "Soluções analíticas",
      description: `Na Sapritec, oferecemos serviços especializados em Data Science e Business Intelligence, uma ferramenta poderosa para desvendar os segredos ocultos nos dados. Em termos simples, Data Science é como uma lupa que amplia a compreensão dos dados, revelando padrões, tendências e insights valiosos.`,
    },
    {
      Name: "Inteligência Artificial",
      description: `Na Sapritec, oferecemos serviços especializados em Data Science, uma ferramenta poderosa para desvendar os segredos ocultos nos dados. Em termos simples, Data Science é como uma lupa que amplia a compreensão dos dados, revelando padrões, tendências e insights valiosos.`,
    },
    {
      Name: "Plataformas AS 400",
      description: `O AS/400, também conhecido como IBM i, é uma plataforma de computação que oferece uma ampla gama de serviços para empresas. Ele serve como uma base sólida para operações empresariais, fornecendo recursos essenciais para várias funções.`,
    },
    {
      Name: "Desenvolvimento de Software",
      description: `O desenvolvimento de software para criar soluções tecnológicas que impulsionem seus negócios, automatizem processos, melhorem a eficiência operacional, atendam às necessidades dos clientes e permaneçam competitivas no mercado.`,
    },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div
      className="bg-white sm:h-screen w-full flex items-center pt-16 sm:pt-16 sm:pb-16"
      id="services"
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full flex flex-col md:flex-row md:justify-between h-full z-0 gap-1"
      >
        <div className="flex flex-col pl-4 sm:pl-16 gap-16 self-center md:w-[50%]">
          <p className="text-2xl 2xl:text-5xl font-bold text-black leading-[1.4]">
            Nossos serviços abrangem desde consultoria estratégica até
            implementações de sistemas avançados...
          </p>
          <div className="flex gap-4">
            <CarouselPrevious className="text-white bg-black size-10 sticky" />
            <CarouselNext className="text-white bg-black size-10 sticky" />
          </div>
        </div>

        <CarouselContent className="sm:w-[60%] max-w-7xl z-0 m-0 p-0">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="margin-0 p-0 z-0 bg-sky-300 md:bg-transparent"
            >
              <div className="flex flex-col gap-4 bg-sky-300 px-10 py-12 md:border z-0">
                <h3 className="font-bold text-4xl 2xl:text-7xl text-black">
                  {service.Name}
                </h3>
                <div>
                  <p className="text-md 2xl:text-2xl text-black">
                    {service.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function Coaching() {
  const coaching = [
    { name: "Análise de dados" },
    { name: "Programação" },
    { name: "Inteligência artificial" },
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div
      className="bg-white md:h-[100vh] w-full flex items-center"
      id="coaching"
    >
      <Carousel
        plugins={[plugin.current]}
        className="w-full flex flex-col-reverse md:flex-row-reverse md:justify-between h-full z-0"
      >
        <div className="flex flex-col pt-4 md:pt-0 px-8 md:px-0 md:pl-16 gap-16 md:self-center md:w-[50%]">
          <p className="text-2xl 2xl:text-5xl font-bold text-black leading-[1.4]">
            Os nossos treinamentos ajudam os vários profissionais a se
            destacarem no mercado, saiba mais sobre os nossos cursos e faça sua
            inscrição...
          </p>
          <div className="flex gap-4">
            <CarouselPrevious className="text-white bg-black size-10 sticky" />
            <CarouselNext className="text-white bg-black size-10 sticky" />
          </div>
        </div>

        <CarouselContent className="sm:w-[51%] max-w-7xl z-0">
          {coaching.map((coach, index) => (
            <CarouselItem key={index} className="margin-0 p-0 z-0">
              <div className="flex flex-col gap-4 bg-sky-300 sm:bg-black px-10 py-48 z-0">
                <h3 className="font-bold  text-4xl 2xl:text-7xl text-black sm:text-white">
                  {coach.name}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
