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

export default function Home() {
  return (
    <>
      <HeaderMenu />
      <main className="flex items-center justify-center h-[calc(100vh)] p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl 2xl:text-7xl font-bold text-center md:text-right">
            Seja bem vindo a<span className="text-sky-600"> SAPRITEC </span>
          </h1>
          <p className="text-md 2xl:text-xl hidden md:block">
            Criando o futuro e realizando sonhos tecnológicos!
          </p>
          <div className="flex flex-col-reverse gap-8 md:gap-4 md:flex-row items-center justify-center pt-4">
            <div className="space-y-4 md:space-y-8">
              <h3 className="font-bold text-sky-600 text-2xl md:text-3xl 2xl:text-5xl max-w-[30rem] leading-[1.1] 2xl:leading-[1.2]">
                SAPRITEC, a melhor solução tecnológica para a sua empresa
              </h3>
              <p className="text-md 2xl:text-xl max-w-[32rem] leading-[1.5] 2xl:leading-[1.5] text-gray-300">
                Na Sapritec, estamos moldando o futuro digital com inovação e
                expertise incomparáveis. <br /> Nossa missão é clara:
                impulsionar o progresso através da excelência, da integridade e
                da colaboração.
              </p>
              <p className="text-md 2xl:text-xl max-w-[32rem] leading-[1.5] 2xl:leading-[1.5] text-gray-300">
                Junte-se a nós na jornada rumo à excelência tecnológica e ao
                sucesso empresarial duradouro.
              </p>
            </div>
            <div className="flex items-center justify-start rounded-lg overflow-hidden">
              <Image
                src={"/assets/home/sapritec-home.png"}
                width={727}
                height={633}
                className="2xl:max-w-[727px]"
                alt="home iamge"
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-8 py-8 md:0 flex flex-col items-center space-y-4 justify-center bg-[#171A1F] ">
        <h3 className="text-md 2xl:text-xl font-bold text-center uppercase">
          Oferecemos o diferencial nos nossos produtos!
        </h3>
        <div className="flex gap-1 flex-wrap items-center justify-center">
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
          <Image
            src={"/assets/home/partners/product1.png"}
            width={164}
            height={124}
            alt="product"
          ></Image>
        </div>
      </div>
      <div className="mt-16 md:mt-32 p-4 flex flex-col items-center gap-16">
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">SAP ERP</h3>
            <p className="text-gray-300 max-w-[21rem]">
              Com uma arquitetura altamente modular e flexível, o SAP ERP pode
              ser adaptado às necessidades específicas de qualquer organização.
              Sua capacidade de integração total permite uma comunicação
              contínua entre os diferentes departamentos, eliminando silos de
              informação e promovendo a colaboração eficaz.
            </p>
            <button className="bg-[#609FEC] text-black px-4 py-2 rounded-md text-sm 2xl:text-md">
              Saiba mais
            </button>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={"/assets/home/feature/sap.png"}
              width={727}
              height={400}
              alt="service"
            ></Image>
          </div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row-reverse">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">SAP ERP</h3>
            <p className="text-gray-300 max-w-[21rem]">
              Com uma arquitetura altamente modular e flexível, o SAP ERP pode
              ser adaptado às necessidades específicas de qualquer organização.
              Sua capacidade de integração total permite uma comunicação
              contínua entre os diferentes departamentos, eliminando silos de
              informação e promovendo a colaboração eficaz.
            </p>
            <button className="bg-[#EB8E23] text-black px-4 py-2 rounded-md text-sm 2xl:text-md">
              Saiba mais
            </button>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={"/assets/home/feature/sap4hana.png"}
              width={727}
              height={400}
              alt="service"
            ></Image>
          </div>
        </div>
        <div className="flex gap-8 flex-col md:flex-row">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">SAP ERP</h3>
            <p className="text-gray-300 max-w-[21rem]">
              Com uma arquitetura altamente modular e flexível, o SAP ERP pode
              ser adaptado às necessidades específicas de qualquer organização.
              Sua capacidade de integração total permite uma comunicação
              contínua entre os diferentes departamentos, eliminando silos de
              informação e promovendo a colaboração eficaz.
            </p>
            <button className="bg-[#356FC1] text-black px-4 py-2 rounded-md text-sm 2xl:text-md">
              Saiba mais
            </button>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              src={"/assets/home/feature/primavera.png"}
              width={727}
              height={400}
              alt="service"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mt-16 p-4 flex flex-col items-center justify-center gap-8">
        <h3 className="text-3xl font-bold">Benefícios</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-[#171A1F] p-4 rounded-md flex flex-col items-center justify-center">
            <Image
              src={"/assets/home/integrations/icone1.png"}
              width={169}
              height={125}
              alt="Benefícip"
            ></Image>
            <p className="text-gray-300 text-md md:max-w-[18rem]">
              Invista no crescimento profissional e expanda suas habilidades,
              alcance novas oportunidades e conquiste o sucesso que você merece.
            </p>
          </div>
          <div className="bg-[#171A1F] p-4 rounded-md flex flex-col items-center justify-center">
            <Image
              src={"/assets/home/integrations/icone2.png"}
              width={140}
              height={129}
              alt="Benefícip"
            ></Image>
            <p className="text-gray-300 text-md md:max-w-[18rem]">
              Invista no crescimento profissional e expanda suas habilidades,
              alcance novas oportunidades e conquiste o sucesso que você merece.
            </p>
          </div>
          <div className="bg-[#171A1F] p-4 rounded-md flex flex-col items-center justify-center">
            <Image
              src={"/assets/home/integrations/icone3.png"}
              width={107}
              height={127}
              alt="Benefícip"
            ></Image>
            <p className="text-gray-300 text-md md:max-w-[18rem]">
              Invista no crescimento profissional e expanda suas habilidades,
              alcance novas oportunidades e conquiste o sucesso que você merece.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 p-4 flex items-center justify-center">
        <div className="bg-sky-600 flex flex-col md:flex-row rounded-lg overflow-hidden">
          <div className="flex flex-col justify-center items-start p-8 md:p-16 gap-4">
            <h3 className="text-3xl font-bold">Fale Connosco!</h3>
            <p className="text-md max-w-[24.5rem]">
              Queremos ajudá-lo a compreender melhor os nossos serviços, entre
              em contato conosco e saiba mais sobre os nossos serviços.
            </p>
            <button className="bg-white text-black px-4 py-2 text-sm rounded-md">
              Contactar
            </button>
          </div>
          <div>
            <Image
              src={"/assets/home/contactus.png"}
              width={588}
              height={384}
              alt="Contact us"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mt-16 p-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div>
            <Image
              src={"/assets/home/testimonios/jerico.png"}
              width={280}
              height={320}
              alt="Testimonio"
              className="rounded-lg"
            ></Image>
          </div>
          <div className="space-y-3">
            <div className="flex gap-0">
              <Star className="text-yellow-400 size-5" />
              <Star className="text-yellow-400 size-5" />
              <Star className="text-yellow-400 size-5" />
              <Star className="text-yellow-400 size-5" />
              <Star className="text-yellow-400 size-5" />
            </div>
            <p className="text-md text-gray-300 max-w-[39.5rem] leading-[1.6]">
              Trabalhar na Sapritec tem sido uma jornada incrível de aprendizado
              e crescimento profissional. Aqui, não apenas tenho a oportunidade
              de aplicar minhas habilidades e conhecimentos em projetos
              desafiadores, mas também recebo um apoio integral de uma equipe
              apaixonada e comprometida com o sucesso de cada membro.
            </p>
            <h3 className="text-md text-gray-300 font-bold">Jericó Calala</h3>
            <p className="text-gray-300 text-md">Designer</p>
          </div>
        </div>
      </div>

      <div className="mt-16 p-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold">Nossos treinamentos</h3>
          <p className="text-md text-gray-300 mt-2 max-w-[35rem] text-center">
            Os nossos treinamentos ajudam os vários profissionais a se
            destacarem no mercado, saiba mais sobre os nossos cursos e faça sua
            inscrição
          </p>
          <div className="flex gap-4 mt-8 flex-wrap md:flex-nowrap items-center justify-center">
            <div className="bg-[#171A1F] rounded-md overflow-hidden">
              <div>
                <Image
                  src={"/assets/cards/Image1.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-[#00BBAA] text-sm">Inscreva-se já</p>
                <h3 className="font-bold text-md">Aprenda Análise de Dados</h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-[#00BBAA] border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#171A1F] rounded-md overflow-hidden">
              <div>
                <Image
                  src={"/assets/cards/Image2.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-[#00BBAA] text-sm">Inscreva-se já</p>
                <h3 className="font-bold text-md">Aprenda SAP S/4HANA</h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-[#00BBAA] border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#171A1F] rounded-md overflow-hidden">
              <div>
                <Image
                  src={"/assets/cards/Image3.png"}
                  width={376}
                  height={256}
                  alt="Course"
                ></Image>
              </div>
              <div className="p-6">
                <p className="text-[#00BBAA] text-sm">Inscreva-se já</p>
                <h3 className="font-bold text-md">Aprenda Programação</h3>
                <div className="flex justify-between items-center mt-5">
                  <p className="text-sm text-gray-300">Carreira em alta!</p>
                  <button className="text-[#00BBAA] border border-gray-300 rounded-full px-4 py-2 text-sm">
                    Saber mais
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="text-md text-[#00BBAA] border border-[#00BBAA] rounded-md mt-8 px-4 py-2">
            Veja mais treinamentos
          </button>
        </div>
      </div>

      {/*<MainSection />
      <Identity />
      <Feactures />

      <Integrations />

      <Testimonios />
      <Coaching />
      <ContactForm />*/}
      <Footer />
    </>
  );
}
