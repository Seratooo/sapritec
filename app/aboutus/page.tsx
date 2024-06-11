import Image from "next/image";
import Identity from "../ui/aboutUS/identity";
import JoinOurTeam from "../ui/aboutUS/joinOuTeam";
import MainSection from "../ui/aboutUS/main-section";
import OurTeam from "../ui/aboutUS/our-team";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import { Rowdies } from "next/font/google";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <div className="mt-16 p-4 flex items-center justify-center">
        <div>
          <div className="space-y-28">
            <div className="flex items-center gap-4 md:gap-16 flex-col md:flex-row ">
              <div className="space-y-4">
                <h3
                  className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
                >
                  Missão
                </h3>
                <p className="text-md font-thin text-gray-300 max-w-[30rem] leading-[1.8]">
                  Nossa missão é capacitar empresas através de nossa experiência
                  incomparável em tecnologia SAP e nossa profunda compreensão
                  Data Science e Inteligência Artificial, capacitamos nossos
                  clientes a transformarem desafios em oportunidades e
                  alcançarem novos patamares de sucesso.
                </p>
              </div>
              <div className="rounded-md overflow-hidden">
                <Image
                  src={"/assets/aboutus/mission.png"}
                  width={530}
                  height={385}
                  alt="mission"
                ></Image>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-16 flex-col md:flex-row-reverse ">
              <div className="space-y-4">
                <h3
                  className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
                >
                  Visão
                </h3>
                <p className="text-md font-thin text-gray-300 max-w-[30rem] leading-[1.8]">
                  Nossa visão na Sapritec é ser reconhecida como líder em
                  soluções de tecnologia da informação, impulsionando a inovação
                  e a transformação digital em todo o mundo. Buscamos
                  constantemente superar expectativas, moldar o futuro digital e
                  inspirar o sucesso em nossos clientes, colaboradores e
                  comunidades.
                </p>
              </div>
              <div className="rounded-md overflow-hidden border-[3px] border-sky-500">
                <Image
                  src={"/assets/aboutus/vision.png"}
                  width={530}
                  height={329}
                  alt="mission"
                ></Image>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-16 flex-col md:flex-row ">
              <div className="space-y-4">
                <h3
                  className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
                >
                  Valores
                </h3>
                <p className="text-md font-thin text-gray-300 max-w-[30rem] leading-[1.8]">
                  Na Sapritec, nossos valores são o alicerce de tudo o que
                  fazemos. Buscamos constantemente a excelência em nossas
                  entregas, impulsionados pela inovação e pela busca incansável
                  por soluções que transformem o mundo digital. Agimos com
                  integridade em todas as nossas interações, cultivando uma
                  cultura de colaboração e respeito mútuo.
                </p>
              </div>
              <div className="rounded-md overflow-hidden">
                <Image
                  src={"/assets/aboutus/value.png"}
                  width={530}
                  height={371}
                  alt="mission"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 px-4 bg-[#00152A] flex flex-col items-center justify-center py-28 gap-8">
        <h3
          className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
        >
          PORQUÊ A SAPRITEC ?
        </h3>
        <p className="text-xl 2xl:text-2xl text-center max-w-[50rem] font-thin">
          Somos uma empresa referência em treinamento e consultoria nos mais
          diversos produtos tecnológicos e garantimos a qualidade exigida no
          mercado de trabalho!
        </p>
        <button className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-sm text-md px-6 py-2 font-bold">
          Fale connosco!
        </button>
      </div>
      <Footer />
    </>
  );
}
