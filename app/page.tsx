import { Gem, Target, View } from "lucide-react";
import Footer from "./ui/footer";
import HeaderMenu from "./ui/header";
import FeactureHome from "./ui/home/feature";
import GetSarted from "./ui/home/get-started";
import Integrations from "./ui/home/integrations";
import LatestUpdates from "./ui/home/latestUpdates";
import MainSection from "./ui/home/main-section";
import Partners from "./ui/home/partners";
import Testimonios from "./ui/home/testimonios";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactForm from "./ui/blog/contact-form";

export default function Home() {
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
  const coaching = [
    { name: "Análise de dados" },
    { name: "Programação" },
    { name: "Inteligência artificial" },
  ];
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <div className="md:bg-white" id="aboutus">
        <div className="pt-28 bg-black"></div>
        <div className="md:h-screen flex flex-col md:flex-row justify-between items-start">
          <div className="bg-black h-full px-4 sm:px-16 gap-8 flex flex-col items-center justify-center w-full md:w-[30%] pb-4">
            <p className="text-4xl 2xl:text-7xl font-bold text-white">Missão</p>
            <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
              Nossa missão é capacitar empresas através de nossa experiência
              incomparável em tecnologia SAP e nossa profunda compreensão Data
              Science e Inteligência Artificial, capacitamos nossos clientes a
              transformarem desafios em oportunidades e alcançarem novos
              patamares de sucesso.
            </p>
            <Target className="size-16 2xl:size-24" />
          </div>
          <div className="bg-sky-900 md:bg-black md:h-[80vh] flex flex-col gap-8 px-4 sm:px-20 justify-center items-center w-full md:w-[35%] pb-4 py-4 my-4 md:my-0 md:py-4">
            <p className="text-4xl 2xl:text-7xl font-bold text-white">Visão</p>

            <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
              Nossa visão na Sapritec é ser reconhecida como líder em soluções
              de tecnologia da informação, impulsionando a inovação e a
              transformação digital em todo o mundo. Buscamos constantemente
              superar expectativas, moldar o futuro digital e inspirar o sucesso
              em nossos clientes, colaboradores e comunidades.
            </p>
            <View className="size-16 2xl:size-24" />
          </div>
          <div className="bg-black md:h-[65vh] flex flex-col gap-8 pb-4 px-4 sm:px-20 justify-center items-center w-full md:w-[35%]">
            <p className="text-4xl 2xl:text-7xl font-bold text-white">
              Valores
            </p>

            <p className="md:pl-12 text-white text-md md:text-xs 2xl:text-2xl text-center 2xl:leading-10">
              Na Sapritec, nossos valores são o alicerce de tudo o que fazemos.
              Buscamos constantemente a excelência em nossas entregas,
              impulsionados pela inovação e pela busca incansável por soluções
              que transformem o mundo digital. Agimos com integridade em todas
              as nossas interações, cultivando uma cultura de colaboração e
              respeito mútuo.
            </p>
            <Gem className="size-16 2xl:size-24" />
          </div>
        </div>
      </div>
      <div
        className="bg-white sm:h-screen w-full flex items-center pt-16 sm:pt-16 sm:pb-16"
        id="services"
      >
        <Carousel className="w-full flex flex-col md:flex-row md:justify-between h-full z-0 gap-1">
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
                className="margin-0 p-0 z-0 bg-slate-400 md:bg-transparent"
              >
                <div className="flex flex-col gap-4 bg-slate-400 px-10 py-12 md:border z-0">
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

      <Integrations />

      <Testimonios />
      <div
        className="bg-white md:h-[100vh] w-full flex items-center"
        id="coaching"
      >
        <Carousel className="w-full flex flex-col-reverse md:flex-row-reverse md:justify-between h-full z-0">
          <div className="flex flex-col px-8 md:px-0 md:pl-16 gap-16 md:self-center md:w-[50%]">
            <p className="text-2xl 2xl:text-5xl font-bold text-black leading-[1.4]">
              Os nossos treinamentos ajudam os vários profissionais a se
              destacarem no mercado, saiba mais sobre os nossos cursos e faça
              sua inscrição...
            </p>
            <div className="flex gap-4">
              <CarouselPrevious className="text-white bg-black size-10 sticky" />
              <CarouselNext className="text-white bg-black size-10 sticky" />
            </div>
          </div>

          <CarouselContent className="sm:w-[51%] max-w-7xl z-0">
            {coaching.map((coach, index) => (
              <CarouselItem key={index} className="margin-0 p-0 z-0">
                <div className="flex flex-col gap-4 bg-black px-10 py-48 z-0">
                  <h3 className="font-bold  text-4xl 2xl:text-7xl text-white">
                    {coach.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
