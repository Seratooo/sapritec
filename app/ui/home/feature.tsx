import Image from "next/image";

export default function FeactureHome() {
  return (
    <div className="py-8 px-4 margin-auto m-auto flex flex-col items-center space-y-16 md:space-y-24">
      <div className="flex gap-4 md:gap-20 w-full items-center justify-center">
        <div className="flex flex-col space-y-4 w-[40%]">
          <h3 className="text-lg font-bold">SAP ERP</h3>
          <p className="text-sm text-gray-400">
            Com uma arquitetura altamente modular e flexível, o SAP ERP pode ser
            adaptado às necessidades específicas de qualquer organização. Sua
            capacidade de integração total permite uma comunicação contínua
            entre os diferentes departamentos, eliminando silos de informação e
            promovendo a colaboração eficaz.
          </p>
          <span className="flex gap-4">
            <button className="bg-[#609FEC] px-2 md:px-4 py-1 md:py-2 text-sm rounded-sm">
              Saiba mais
            </button>
          </span>
        </div>
        <div className="w-[60%]">
          <Image
            alt="Feature Image"
            src={`/assets/home/feature/sap.png`}
            className="rounded-md w-48 md:w-auto"
            width={727}
            height={400}
          />
        </div>
      </div>

      <div className="flex flex-row-reverse gap-4 md:gap-20 w-full items-center justify-center">
        <div className="flex flex-col space-y-4 w-[40%]">
          <h3 className="text-lg font-bold">SAP S/4HANA</h3>
          <p className="text-sm text-gray-400">
            Apresentamos o SAP S/4HANA, a próxima geração em gestão empresarial
            construída na poderosa plataforma SAP HANA. Esta solução
            revolucionária oferece processamento em tempo real e análises
            avançadas, capacitando as empresas a alcançar novos patamares de
            desempenho e eficácia operacional.
          </p>
          <span className="flex gap-4">
            <button className="bg-[#EB8E23] px-2 md:px-4 py-1 md:py-2 text-sm rounded-sm">
              Saiba mais
            </button>
          </span>
        </div>
        <div className="w-[60%]">
          <Image
            alt="Feature Image"
            src={`/assets/home/feature/sap4hana.png`}
            className="rounded-md w-48 md:w-auto"
            width={727}
            height={400}
          />
        </div>
      </div>

      <div className="flex gap-4 md:gap-20 w-full items-center justify-center">
        <div className="flex flex-col space-y-4 w-[40%]">
          <h3 className="text-lg font-bold">PRIMAVERA ERP</h3>
          <p className="text-sm text-gray-400">
            Esta plataforma permite uma visão holística das operações
            empresariais, capacitando as equipes a tomar decisões informadas e
            estratégicas. Com recursos avançados de relatórios e análises, o
            PRIMAVERA ERP permite uma compreensão profunda do desempenho
            organizacional
          </p>
          <span className="flex gap-4">
            <button className="bg-[#356FC1] px-2 md:px-4 py-1 md:py-2 text-sm rounded-sm">
              Saiba mais
            </button>
          </span>
        </div>
        <div className="w-[60%]">
          <Image
            alt="Feature Image"
            src={`/assets/home/feature/sap.png`}
            className="rounded-md w-48 md:w-auto"
            width={727}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
