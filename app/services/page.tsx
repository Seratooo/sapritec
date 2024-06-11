import ExploreMore from "../ui/services/explore-more";
import FeacturePageFeature from "../ui/services/feature";
import MainSection from "../ui/services/main-section";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import Image from "next/image";
import { Rowdies } from "next/font/google";
import Link from "next/link";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});
export default function Page() {
  return (
    <>
      <HeaderMenu />
      <main className="flex items-center justify-center min-h-[95vh] md:min-h-[110vh] bg-[url('/assets/services/services.png')] md:bg-[url('/assets/services/services.png')] bg-left md:bg-top px-4 md:px-12 bg-cover">
        <div className="flex flex-col gap-12 items-center">
          <h1
            className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[35rem] 2xl:max-w-[38rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${rowdies.className}`}
          >
            NOSSOS SERVIÇOS
          </h1>

          <p className="text-2xl 2xl:text-3xl text-center md:max-w-[65rem] 2xl:max-w-[75rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Abrangem desde consultoria estratégica até implementações de
            sistemas avançados, garantindo a satisfação dos nossos clientes.
          </p>
          <button className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-sm text-xl px-8 py-2 font-bold">
            SOLICITAR AGORA
          </button>
        </div>
      </main>
      <div className="bg-gradient-to-b from-[#004564] to-black px-4 pt-20 pb-32">
        <div className="max-w-[58rem] m-auto gap-4 flex flex-col md:flex-row flex-wrap justify-center ">
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service1.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                SAP ERP
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service2.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                SAP S 4/HANA
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service3.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                PRIMAVERA
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service4.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                AS400
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service5.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                INTELIGÊNCIA ARTIFICIAL
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
          <div className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300">
            <div>
              <Image
                src={"/assets/services/service6.png"}
                alt="service"
                className="w-full md:w-auto"
                width={265}
                height={141}
              ></Image>
            </div>
            <div>
              <h3
                className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
              >
                SOFTWARE
              </h3>
              <p className="text-md font-thin text-gray-300 md:max-w-[16rem] text-center">
                Nossa missão é capacitar empresas através de nossa experiência..
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-40 bg-[url('/assets/services/services-bg.png')] bg-cover bg-center md:bg-top">
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <div className="flex flex-col gap-8 md:items-start">
            <h3
              className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[28rem] 2xl:max-w-[32rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${rowdies.className}`}
            >
              ENTRE EM CONTACTO CONNOSCO AGORA MESMO!
            </h3>
            <Link
              href="/contacts"
              className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-md text-md px-8 py-2 font-bold"
            >
              Fale connosco!
            </Link>
          </div>
          <Image
            src={`/assets/contact.png`}
            width={615}
            height={454}
            className="mt-0 border-[3px] border-sky-500 rounded-lg"
            alt="get started"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
