import Image from "next/image";
import Identity from "../ui/aboutUS/identity";
import JoinOurTeam from "../ui/aboutUS/joinOuTeam";
import MainSection from "../ui/aboutUS/main-section";
import OurTeam from "../ui/aboutUS/our-team";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <div className="mt-16 p-4 flex items-center justify-center">
        <div>
          <h3 className="text-3xl font-bold mb-16 md:mb-32">
            Pilares fundamentais:
          </h3>
          <div className="space-y-20">
            <div className="flex gap-16 flex-col md:flex-row ">
              <div className="flex gap-8">
                <div className="w-10 h-10 bg-[#00BBAA] hidden md:block"></div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Missão</h3>
                  <p className="text-md text-gray-400 max-w-[27rem] leading-[1.8]">
                    Nossa missão é capacitar empresas através de nossa
                    experiência incomparável em tecnologia SAP e nossa profunda
                    compreensão Data Science e Inteligência Artificial,
                    capacitamos nossos clientes a transformarem desafios em
                    oportunidades e alcançarem novos patamares de sucesso.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/aboutus/mission.png"}
                  width={588}
                  height={278}
                  alt="mission"
                ></Image>
              </div>
            </div>
            <div className="flex gap-16 flex-col md:flex-row ">
              <div className="flex gap-8">
                <div className="w-10 h-10 bg-[#0059D4] hidden md:block"></div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Visão</h3>
                  <p className="text-md text-gray-400 max-w-[27rem] leading-[1.8]">
                    Nossa visão na Sapritec é ser reconhecida como líder em
                    soluções de tecnologia da informação, impulsionando a
                    inovação e a transformação digital em todo o mundo. Buscamos
                    constantemente superar expectativas, moldar o futuro digital
                    e inspirar o sucesso em nossos clientes, colaboradores e
                    comunidades.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/aboutus/vision.png"}
                  width={588}
                  height={278}
                  alt="mission"
                ></Image>
              </div>
            </div>
            <div className="flex gap-16 flex-col md:flex-row ">
              <div className="flex gap-8">
                <div className="w-10 h-10 bg-[#E82E2E] hidden md:block"></div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Valores</h3>
                  <p className="text-md text-gray-400 max-w-[27rem] leading-[1.8]">
                    Na Sapritec, nossos valores são o alicerce de tudo o que
                    fazemos. Buscamos constantemente a excelência em nossas
                    entregas, impulsionados pela inovação e pela busca
                    incansável por soluções que transformem o mundo digital.
                    Agimos com integridade em todas as nossas interações,
                    cultivando uma cultura de colaboração e respeito mútuo.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/assets/aboutus/value.png"}
                  width={588}
                  height={278}
                  alt="mission"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinOurTeam />
      <Footer />
    </>
  );
}
