import Image from "next/image";
import CardIntegrations from "../ui/cardIntegrations";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import MainSection from "../ui/integrations/main-section";
import Link from "next/link";
import { Rowdies } from "next/font/google";
import { GraduationCap } from "lucide-react";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});
export default function Page() {
  const Courses = [
    {
      CourseName: "SAP ECC",
      modules: [
        "SAP MM",
        "SAP SD",
        "SAP PI/PO",
        "SAP BW",
        "SAP FI",
        "SAP WM",
        "SAP PM",
        "SAP BASIS",
        "SAP PP",
        "SAP ABAP do Básico ao Intermédio",
        "SAP Supply Chain Logistics & Transportation",
        "Criação de Webservice para integração com SAP",
        "SAP ABAP AVANÇADO",
        "SAP HCM",
      ],
    },
    {
      CourseName: "SAP S/4HANA",
      modules: [
        "SAP S/4HANA MM",
        "SAP ACTIVATE",
        "Encerramento Financeiro No S/4HANA",
        "Contabilidade analítica no S/4HANA",
        "Contas a pagar no S/4HANA",
        "Contas a receber no S/4HANA",
        "Contabilidade Bancária no S/4HANA",
        "SAP S/4HANA FI Completo",
        "Administração da Qualidade no S/4HANA",
        "Migração dos Dados do ECC para o S/4HANA",
        "ABAP CLOUD",
        "SAP S/4HANA NO SD-VENDAS",
      ],
    },
  ];
  return (
    <>
      <HeaderMenu />
      <main className="flex items-center justify-center min-h-[95vh] md:min-h-[110vh] bg-[url('/assets/trainings/trainings.png')] md:bg-[url('/assets/trainings/trainings.png')] bg-left md:bg-top px-4 md:px-12 bg-cover">
        <div className="flex flex-col gap-12 items-center">
          <h1
            className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[45rem] 2xl:max-w-[48rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${rowdies.className}`}
          >
            NOSSOS TREINAMENTOS
          </h1>

          <p className="font-thin text-2xl 2xl:text-3xl text-center md:max-w-[65rem] 2xl:max-w-[75rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Abrangem desde consultoria estratégica até implementações de
            sistemas avançados, garantindo a satisfação dos nossos clientes.
          </p>
          <Link
            href="/trainings#trainings"
            className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-md text-xl px-8 py-2 font-bold"
          >
            RESERVAR UM TREINAMENTO
          </Link>
        </div>
      </main>
      <div className=" px-4 pt-28 pb-32 space-y-20" id="trainings">
        {Courses.map((course) => (
          <div className="max-w-[63rem] m-auto space-y-4">
            <h3
              className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
            >
              {course.CourseName}
            </h3>
            <div className="gap-4 flex flex-col md:flex-row flex-wrap justify-center md:justify-start ">
              {course.modules.map((moduleName) => (
                <Link
                  href={`/trainings/${moduleName
                    .replaceAll(" ", "-")
                    .toLowerCase()}`}
                  className="bg-[#00152A] w-full md:w-60 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[1px] border-[#00152A] hover:border-white transition-all duration-300"
                >
                  <div className="flex justify-center">
                    <GraduationCap className="size-12" />
                  </div>
                  <div>
                    <h3 className={`text-md text-center font-extralight`}>
                      {moduleName}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
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
