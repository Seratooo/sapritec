import Image from "next/image";
import { Rowdies } from "next/font/google";
import Link from "next/link";
import HeaderMenu from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import { AlarmClockCheck, CalendarCheck, GraduationCap } from "lucide-react";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});
export default function Page({ params }: { params: { id: string } }) {
  interface MyObjectType {
    [key: string]: {
      title: string;
      description: string;
      text: string;
      advantages: string[];
      modules: string[];
      hour: string;
      days: string;
      time: string;
    };
  }

  const data: MyObjectType = {
    "sap-mm": {
      title: "SAP Materials Management",
      description:
        "Solicite uma demonstração gratuita do SAP ERP hoje mesmo e veja como ele pode transformar sua empresa!",
      text: "O SAP MM (Materials Management, ou Gestão de Materiais) é um módulo no SAP ERP que fornece às empresas recursos de gerenciamento de materiais, estoque e depósito. O objetivo principal do SAP MM é garantir que os materiais sejam sempre mantidos em quantidades adequadas e sem faltas ou lacunas na cadeia de suprimentos da organização. Além disso, esse módulo também contribui para que os profissionais da cadeia de suprimentos e outros usuários SAP possam concluir a compra de mercadorias de maneira oportuna e econômica – com a capacidade de lidar com as mudanças do dia a dia nesses processos.",
      advantages: [
        "Gerenciamento de materiais",
        "Gerenciamento de processos de compras",
        "Gerenciamento de dados de materiais e fornecedores",
        "Gerenciamento de estoque",
        "Planejamento de necessidades de materiais",
        "Verificação de faturas",
        "Escalabilidade: O SAP ERP é uma solução escalável que pode crescer com o seu negócio.",
      ],
      modules: [
        "MM-PUR: Compras",
        "MM-IM: Gestão de Estoque",
        "MM-CBP: Planejamento baseado no consumo",
        "MM-IV: Verificação de fatura",
        "MM-EDI: Intercâmbio Eletrônico de Dados",
        "MM-IS: Sistema de Informação",
      ],
      hour: "25h",
      days: "Segunda a Sexta-Feira / Sábados",
      time: "9h às 13h / 13h às 17h",
    },
  };

  return (
    <>
      <HeaderMenu />
      <main className="flex items-center justify-center min-h-[55vh] md:min-h-[55vh] bg-[url('/assets/services/services.png')] md:bg-[url('/assets/services/services.png')] bg-left md:bg-top px-4 md:px-12 bg-cover">
        <div className="flex flex-col gap-12 items-center">
          <h1
            className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[55rem] 2xl:max-w-[58rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${rowdies.className}`}
          >
            {data[`${params.id}`].title}
          </h1>

          <p className="font-thin text-2xl 2xl:text-3xl text-center md:max-w-[65rem] 2xl:max-w-[75rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Não perca mais tempo, faça já a sua inscrição!
          </p>
          <Link
            href={`/trainings/${params.id}/#subscribe`}
            className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-md text-xl px-8 py-2 font-bold"
          >
            INSCREVER-SE
          </Link>
        </div>
      </main>
      <div className="bg-black px-4 pb-32">
        <div className="px-4 flex flex-col md:flex-row justify-center md:gap-x-16">
          <div className="space-y-8 pt-16 md:pt-28 max-w-[42rem]">
            <div className="space-y-4">
              <h3
                className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
              >
                Descrição
              </h3>
              <p className="text-md font-thin text-gray-400">
                {data[`${params.id}`].text}
              </p>
              <div className="flex flex-col gap-1">
                <p>
                  Carga Horária:{" "}
                  <span className="font-thin">
                    {" "}
                    {data[`${params.id}`].hour}
                  </span>
                </p>
                <div className="flex gap-1">
                  <CalendarCheck className="size-5" />
                  <p> {data[`${params.id}`].days}</p>
                </div>
                <div className="flex gap-1">
                  <AlarmClockCheck className="size-5" />
                  <p> {data[`${params.id}`].time}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3
                className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
              >
                Funcionalidades
              </h3>
              <ul className="text-md font-thin space-y-2 list-disc text-gray-400">
                {data[`${params.id}`].advantages.map((advantage) => (
                  <li>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="space-y-4 pt-20 md:pt-28 w-full max-w-96"
            id="subscribe"
          >
            <div className="space-y-4">
              <h3
                className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
              >
                Módulos
              </h3>
              <ul className="text-md font-thin space-y-2 list-disc text-gray-400">
                {data[`${params.id}`].modules.map((moduleName) => (
                  <li>{moduleName}</li>
                ))}
              </ul>
            </div>
            <GraduationCap className="size-20" />
            <form className="flex flex-col gap-4 w-full md:w-auto">
              <div className="">
                <input
                  type="text"
                  required
                  name=""
                  id=""
                  placeholder="Seu nome"
                  className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  name=""
                  id=""
                  placeholder="Email"
                  className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nº Telefone"
                  className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
                />
              </div>

              <div>
                <textarea
                  name=""
                  required
                  id=""
                  cols={30}
                  placeholder="Informações adicionais..."
                  rows={5}
                  className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
                ></textarea>
              </div>
              <button
                className="bg-sky-600 px-4 py-2 text-md rounded-md font-thin hover:bg-[#00152A] transition-all duration-300 shadow-2xl"
                type="submit"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-40 md:min-h-[80vh] bg-[url('/assets/services/services-bg.png')] bg-cover bg-center md:bg-top">
        <div className="flex gap-4 mt-8 flex-wrap md:flex-nowrap items-center justify-center">
          <div className="bg-[#00152A] rounded-md overflow-hidden shadow-lg">
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
          <div className="bg-[#00152A] rounded-md overflow-hidden shadow-lg">
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
          <div className="bg-[#00152A] rounded-md overflow-hidden shadow-lg">
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
      </div>
      <Footer />
    </>
  );
}
