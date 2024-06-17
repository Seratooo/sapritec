import Image from "next/image";
import { Rowdies } from "next/font/google";
import Link from "next/link";
import HeaderMenu from "@/app/ui/header";
import Footer from "@/app/ui/footer";
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
      image: string;
    };
  }

  const data: MyObjectType = {
    "sap-erp": {
      title: "SAP ENTERPRISE",
      description:
        "Solicite uma demonstração gratuita do SAP ERP hoje mesmo e veja como ele pode transformar sua empresa!",
      text: "O SAP ERP é um sistema de gestão empresarial completo que ajuda as empresas a otimizar seus processos, aumentar a produtividade e tomar decisões mais inteligentes. Com módulos integrados para finanças, contabilidade, produção, cadeia de suprimentos, recursos humanos e muito mais, o SAP ERP oferece uma visão holística da sua empresa e permite que você gerencie todos os seus departamentos de forma eficiente.",
      advantages: [
        "Maior eficiência operacional: O SAP ERP automatiza tarefas manuais e integra seus processos de negócios, liberando tempo para que você se concentre em atividades mais estratégicas.",
        "Melhor visibilidade: O SAP ERP fornece uma visão holística da sua empresa em tempo real, permitindo que você tome decisões mais informadas com base em dados precisos.",
        "Maior produtividade: O SAP ERP ajuda a aumentar a produtividade dos seus funcionários, reduzindo erros e otimizando seus fluxos de trabalho.",
        "Melhoria na tomada de decisões: O SAP ERP oferece ferramentas de análise avançadas que permitem que você identifique tendências e tome decisões mais inteligentes sobre o futuro do seu negócio.",
        "Redução de custos: O SAP ERP pode ajudá-lo a reduzir custos em diversas áreas, como compras, estoque e logística.",
        "Maior conformidade: O SAP ERP ajuda você a cumprir as leis e regulamentações relevantes ao seu setor.",
        "Escalabilidade: O SAP ERP é uma solução escalável que pode crescer com o seu negócio.",
      ],
      image: "/assets/services/sap-service.jpg",
    },
    "sap-hanna": {
      title: "SAP S/4HANA",
      description:
        "Solicite uma demonstração gratuita do SAP S/4HANA hoje mesmo e veja como ele pode transformar sua empresa!",
      text: "O SAP S/4HANA é um sistema de gestão empresarial (ERP) de última geração que oferece uma experiência de usuário inovadora, inteligência integrada e desempenho inigualável. Baseado na revolucionária plataforma de banco de dados in-memory SAP HANA, o SAP S/4HANA permite que as empresas tomem decisões mais rápidas e inteligentes, melhorem a eficiência operacional e se adaptem rapidamente às mudanças do mercado.",
      advantages: [
        "Simplificar seus processos de negócios: O SAP S/4HANA oferece uma interface de usuário intuitiva e fácil de usar que simplifica seus processos de negócios e aumenta a produtividade dos seus funcionários.",
        "Obter insights em tempo real: O SAP S/4HANA fornece acesso instantâneo a dados em tempo real, permitindo que você tome decisões mais informadas e estratégicas.",
        "Melhorar a agilidade: O SAP S/4HANA permite que você se adapte rapidamente às mudanças do mercado e aproveite novas oportunidades de negócios.",
        "Reduzir custos: O SAP S/4HANA pode ajudá-lo a reduzir custos em diversas áreas, como TI, compras e logística.",
        "Aumentar a lucratividade: O SAP S/4HANA pode ajudá-lo a aumentar a lucratividade do seu negócio, otimizando seus processos e tomando decisões mais inteligentes.",
      ],
      image: "/assets/services/hana-service.png",
    },
    primavera: {
      title: "PRIMAVERA",
      description:
        "Descubra o poder da consultoria Primavera para alavancar o crescimento e a eficiência da sua empresa. ",
      text: "Na SAPRITEC, entendemos que cada empresa é única, com desafios e objetivos próprios. Nossa abordagem de consultoria é focada em resultados, trabalhando lado a lado com sua equipe para identificar oportunidades de crescimento e eficiência. Desde a análise inicial até a implementação prática das soluções, estamos comprometidos em fornecer suporte excepcional e resultados mensuráveis. O software Primavera é uma solução robusta e integrada de gestão empresarial que se destaca pela sua capacidade de otimizar processos e aumentar a eficiência operacional em empresas de diversos setores",
      advantages: [
        "Estratégias Sob Medida: Desenvolvemos estratégias adaptadas às necessidades específicas da sua empresa, garantindo resultados tangíveis.",
        "Otimização de Processos: Identificamos oportunidades para otimizar processos e reduzir custos operacionais.",
        "Experiência e Expertise: Contamos com uma equipe de consultores experientes e qualificados, prontos para enfrentar os desafios do seu setor.",
        "Acompanhamento Personalizado: Oferecemos suporte contínuo e acompanhamento para garantir a implementação eficaz das soluções propostas.",
      ],
      image: "/assets/services/primavera-service.jpg",
    },
    as400: {
      title: "AS400",
      description: "",
      text: "",
      advantages: ["", ""],
      image: "",
    },
    "artificial-intelligence": {
      title: "INTELIGÊNCIA ARTIFICIAL",
      description: "",
      text: "",
      advantages: ["", ""],
      image: "",
    },
    "software-dev": {
      title: "DESENVOLVIMENTO DE SOFTWARE",
      description: "",
      text: "",
      advantages: ["", ""],
      image: "",
    },
  };

  return (
    <>
      <HeaderMenu />
      <main className="flex items-center justify-center min-h-[55vh] md:min-h-[55vh] bg-[url('/assets/services/services.png')] md:bg-[url('/assets/services/services.png')] bg-left md:bg-top px-4 md:px-12 bg-cover">
        <div className="flex flex-col gap-12 items-center">
          <h1
            className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[35rem] 2xl:max-w-[38rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${rowdies.className}`}
          >
            {data[`${params.id}`].title}
          </h1>

          <p className="font-thin text-2xl 2xl:text-3xl text-center md:max-w-[65rem] 2xl:max-w-[75rem] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            {data[`${params.id}`].description}
          </p>
          <Link
            href={`/services/${params.id}/#service`}
            className="bg-white text-[#00152A] transition-all duration-300 hover:bg-sky-600 hover:text-white rounded-md text-xl px-8 py-2 font-bold"
          >
            SOLICITAR AGORA
          </Link>
        </div>
      </main>
      <div className="bg-black px-4 pb-32">
        <div className="px-4 flex flex-col md:flex-row items-center justify-center md:gap-x-16">
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
            </div>
            <div className="space-y-4">
              <h3
                className={`text-2xl 2xl:text-3xl uppercase ${rowdies.className}`}
              >
                Vantagens
              </h3>
              <ul className="text-md font-thin space-y-2 list-disc text-gray-400">
                {data[`${params.id}`].advantages.map((advantage) => (
                  <li>{advantage}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 pt-20 md:pt-28" id="service">
            <Image
              src={data[`${params.id}`].image}
              width={527}
              height={300}
              className="rounded-md"
              alt="service"
            ></Image>
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
                  placeholder="..."
                  rows={5}
                  className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
                ></textarea>
              </div>
              <button
                className="bg-sky-600 px-4 py-2 text-md rounded-md font-thin hover:bg-[#00152A] transition-all duration-300 shadow-2xl"
                type="submit"
              >
                SOLICITAR {data[`${params.id}`].title}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-40 bg-[url('/assets/services/services-bg.png')] bg-cover bg-center md:bg-top">
        <div className="max-w-[58rem] m-auto gap-4 flex flex-col md:flex-row flex-wrap justify-center ">
          <Link
            href="/services/sap-erp"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
          <Link
            href="/services/sap-hanna"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
          <Link
            href="/services/primavera"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
          <Link
            href="/services/as400"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
          <Link
            href="/services/artificial-intelligence"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
          <Link
            href="/services/software-dev"
            className="bg-[#00152A] w-full md:w-72 flex flex-col p-4 rounded-lg shadow-2xl space-y-4 cursor-pointer border-[3px] border-[#00152A] hover:border-sky-500 transition-all duration-300"
          >
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
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
