import Image from "next/image";

export default function FeacturePageFeature() {
  return (
    <div className="py-8 px-4 margin-auto m-auto flex flex-col items-center space-y-16 md:space-y-24">
      <div className="flex gap-4 md:gap-32 w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Soluções analíticas</h3>
          <p className="text-sm text-gray-400 md:w-72">
            Na Sapritec, oferecemos serviços especializados em Data Science e
            Business Intelligence, uma ferramenta poderosa para desvendar os
            segredos ocultos nos dados. Em termos simples, Data Science é como
            uma lupa que amplia a compreensão dos dados, revelando padrões,
            tendências e insights valiosos.
          </p>
        </div>
        <Image
          alt="Feature Image"
          src={`/assets/services/analyticsSolutions.png`}
          className="rounded-md w-48 md:w-auto"
          width={727}
          height={400}
        />
      </div>

      <div className="flex flex-row-reverse gap-4 md:gap-32 w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Inteligência Artificial</h3>
          <p className="text-sm text-gray-400 md:w-72">
            Na Sapritec, oferecemos serviços especializados em Data Science, uma
            ferramenta poderosa para desvendar os segredos ocultos nos dados. Em
            termos simples, Data Science é como uma lupa que amplia a
            compreensão dos dados, revelando padrões, tendências e insights
            valiosos.
          </p>
        </div>
        <Image
          alt="Feature Image"
          src={`/assets/services/artificialInteligence.png  `}
          className="rounded-md w-48 md:w-auto"
          width={727}
          height={400}
        />
      </div>
    </div>
  );
}
