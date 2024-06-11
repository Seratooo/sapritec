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
import Identity from "./ui/aboutUS/identity";
import Feactures, { Coaching } from "./ui/services/feature";
import { Star } from "lucide-react";
import { Rowdies } from "next/font/google";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeaderMenu />

      <main className="flex items-center min-h-[100vh] md:min-h-[110vh] h-screen bg-[url('/assets/home/sapritec-home-mobile.jpg')] md:bg-[url('/assets/home/sapritec-home.png')] bg-center md:bg-top px-4 md:px-12 py-4 bg-cover">
        <div className="flex flex-col gap-16 items-center md:items-start">
          <h1
            className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[35rem] 2xl:max-w-[38rem] ${rowdies.className}`}
          >
            SAPRITEC, a melhor solução tecnológica para sua empresa
          </h1>
          <div className="flex gap-2 items-center">
            <p className="text-xl bg-white text-[#00152A] px-4 py-2 font-bold rounded-sm">
              INOVAÇÃO
            </p>
            <p
              className={`text-4xl py-2 font-bold rounded-sm text-white ${rowdies.className}`}
            >
              +
            </p>
            <p className="text-xl bg-white text-[#00152A] px-4 py-2 font-bold rounded-sm">
              FUTURO
            </p>
          </div>
          <p className="text-2xl 2xl:text-3xl text-center md:text-left md:max-w-[35rem] 2xl:max-w-[40rem]">
            Junte-se a nós na jornada rumo à excelência tecnológica e ao sucesso
            empresarial duradouro
          </p>
        </div>
      </main>
      <div className="py-16 md:0 flex flex-col items-center space-y-8 justify-center bg-[#00152A] snap-always snap-start">
        <h3
          className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
        >
          Nossos produtos
        </h3>
        <div className="flex flex-wrap gap-12 items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/assets/home/products/product1.png"}
              width={239}
              height={125}
              alt="product"
            ></Image>
            <h3 className="text-sm text-center font-thin">
              SAP ERP, SAP4/HANA, SAP MM, SAP FI
            </h3>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/assets/home/products/product2.png"}
              width={129}
              height={125}
              alt="product"
            ></Image>
            <h3 className="text-sm text-center font-thin">
              INTELIGÊNCIA ARTIFICIAL
            </h3>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/assets/home/products/product3.png"}
              width={125}
              height={125}
              alt="product"
            ></Image>
            <h3 className="text-sm text-center font-thin">PRIMAVERA ERP</h3>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/assets/home/products/product4.png"}
              width={207}
              height={125}
              alt="product"
            ></Image>
            <h3 className="text-sm text-center font-thin">PLATAFORMA AS400</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Image
              src={"/assets/home/products/product5.png"}
              width={139}
              height={125}
              alt="product"
            ></Image>
            <h3 className="text-sm text-center max-w-48 font-thin">
              DESENVOLVIMENTO DE SOFTWARE
            </h3>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-32 p-4 flex flex-col items-center gap-16">
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <div className="space-y-4">
            <h3
              className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
            >
              SAP ERP
            </h3>
            <p className="text-gray-300 max-w-[21rem] text-md font-thin">
              Com uma arquitetura altamente modular e flexível, o SAP ERP pode
              ser adaptado às necessidades específicas de qualquer organização.
              Sua capacidade de integração total permite uma comunicação
              contínua entre os diferentes departamentos, eliminando silos de
              informação e promovendo a colaboração eficaz.
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/home/feature/sap-erp.png"}
              width={477}
              height={454}
              alt="service"
            ></Image>
            <hr className="w-[90%] mt-3 m-auto border-gray-900 block md:hidden" />
          </div>
        </div>
        <div className="flex gap-8 items-center flex-col md:flex-row-reverse">
          <div className="space-y-4">
            <h3
              className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
            >
              SAP S/4HANA
            </h3>
            <p className="text-gray-300 max-w-[21rem] text-md font-thin">
              Apresentamos o SAP S/4HANA, a próxima geração em gestão
              empresarial construída na poderosa plataforma SAP HANA. Esta
              solução revolucionária oferece processamento em tempo real e
              análises avançadas, capacitando as empresas a alcançar novos
              patamares de desempenho e eficácia operacional.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={"/assets/home/feature/sap4hana.png"}
              width={443}
              height={308}
              alt="service"
            ></Image>
            <hr className="w-[90%] mt-3 m-auto border-gray-900 block md:hidden" />
          </div>
        </div>
        <div className="flex gap-8 items-center flex-col md:flex-row">
          <div className="space-y-4">
            <h3
              className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
            >
              PRIMAVERA ERP
            </h3>
            <p className="text-gray-300 max-w-[21rem] text-md font-thin">
              Esta plataforma permite uma visão holística das operações
              empresariais, capacitando as equipes a tomar decisões informadas e
              estratégicas. Com recursos avançados de relatórios e análises, o
              PRIMAVERA ERP permite uma compreensão profunda do desempenho
              organizacional.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={"/assets/home/feature/primavera.png"}
              width={498}
              height={329}
              alt="service"
            ></Image>
            <hr className="w-[90%] mt-3 m-auto border-gray-900 block md:hidden" />
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 bg-[#00152A] flex flex-col items-center justify-center py-28 gap-8">
        <h3
          className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
        >
          + Serviços Sapritec
        </h3>
        <p className="text-xl 2xl:text-2xl text-center max-w-[50rem] font-thin">
          Além dos serviços acima, a SAPRITEC oferece mais soluções ligadas a
          tecnologia. Clique no botão abaixo para conferir...
        </p>
        <button className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-sm text-md px-6 py-2 font-bold">
          Saber mais
        </button>
      </div>

      <div className="my-20 p-4 flex flex-col gap-20 items-center justify-center snap-always snap-start">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div>
            <Image
              src={"/assets/home/testimonios/jerico.png"}
              width={200}
              height={320}
              alt="Testimonio"
              className="rounded-lg"
            ></Image>
          </div>
          <div className="space-y-3">
            <div className="flex gap-0">
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
            </div>
            <p className="text-md text-gray-300 max-w-[35rem] leading-[1.6] font-thin">
              Trabalhar na Sapritec tem sido uma jornada incrível de aprendizado
              e crescimento profissional. Aqui, não apenas tenho a oportunidade
              de aplicar minhas habilidades e conhecimentos em projetos
              desafiadores, mas também recebo um apoio integral de uma equipe
              apaixonada e comprometida com o sucesso de cada membro.
            </p>
            <h3 className="text-md font-bold">Jericó Calala</h3>
            <p className="text-gray-300 text-md font-thin">Designer</p>
          </div>
        </div>
        <hr className="w-[90%] mt-3 m-auto border-gray-900" />
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-20">
          <div>
            <Image
              src={"/assets/home/testimonios/jerico.png"}
              width={200}
              height={320}
              alt="Testimonio"
              className="rounded-lg"
            ></Image>
          </div>
          <div className="space-y-3">
            <div className="flex gap-0">
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
              <Star className="text-yellow-400 size-7" />
            </div>
            <p className="text-md text-gray-300 max-w-[35rem] leading-[1.6] font-thin">
              Trabalhar na Sapritec tem sido uma jornada incrível de aprendizado
              e crescimento profissional. Aqui, não apenas tenho a oportunidade
              de aplicar minhas habilidades e conhecimentos em projetos
              desafiadores, mas também recebo um apoio integral de uma equipe
              apaixonada e comprometida com o sucesso de cada membro.
            </p>
            <h3 className="text-md font-bold">Jericó Calala</h3>
            <p className="text-gray-300 text-md font-thin">Designer</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 flex items-center justify-center bg-[#00152A]">
        <div className="flex flex-col items-center">
          <h3
            className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
          >
            Nossos treinamentos
          </h3>
          <div className="flex gap-4 mt-8 flex-wrap md:flex-nowrap items-center justify-center">
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div>
                <Image
                  src={"/assets/cards/Image1.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-sm font-thin">Inscreva-se já</p>
                <h3 className={`text-xl ${rowdies.className}`}>
                  Análise de Dados para negócio
                </h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-sky-400 border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div>
                <Image
                  src={"/assets/cards/Image2.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-sm font-thin">Inscreva-se já</p>
                <h3 className={`text-xl ${rowdies.className}`}>
                  Treinamento SAP S/4HANA
                </h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-sky-400 border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-md overflow-hidden shadow-lg">
              <div>
                <Image
                  src={"/assets/cards/Image3.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-sm font-thin">Inscreva-se já</p>
                <h3 className={`text-xl ${rowdies.className}`}>
                  Programação para iniciantes
                </h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-sky-400 border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-sm text-md px-6 py-2 font-bold mt-8">
            Mais treinamentos
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
