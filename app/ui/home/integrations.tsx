import { ListPlus, TrendingUp, UserRoundCheck } from "lucide-react";
import Image from "next/image";

export default function Integrations() {
  return (
    <div className="flex flex-col 2xl:flex-row-reverse  justify-between items-center px-4 py-12 sm:px-12 sm:py-12 2xl:p-36 space-y-8">
      <h3 className="font-bold text-4xl 2xl:text-7xl">Benefícios</h3>
      <div className="flex gap-4 flex-wrap justify-center items-start">
        <div className="flex flex-col justify-center items-center gap-4 md:w-[318px] p-8 bg-sky-800 bounce-in transition-all duration-300 cursor-pointer hover:bg-sky-700">
          <TrendingUp className="size-20 md:size-32" />
          <p className="text-md 2xl:text-2xl text-white 2xl:leading-10">
            Invista no crescimento profissional e expanda suas habilidades,
            alcance novas oportunidades e conquiste o sucesso que você merece!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:w-[318px] p-8 bg-sky-800 bounce-in transition-all duration-300 cursor-pointer hover:bg-sky-700">
          <ListPlus className="size-20 md:size-32" />
          <p className="text-md 2xl:text-2xl text-white 2xl:leading-10">
            Acesso a uma vasta gama de recursos e ferramentas de desenvolvimento
            pessoal para impulsionar seu crescimento.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:w-[318px] p-8 bg-sky-800 bounce-in transition-all duration-300 cursor-pointer hover:bg-sky-700">
          <UserRoundCheck className="size-20 md:size-32" />
          <p className="text-md 2xl:text-2xl text-white 2xl:leading-10">
            Conte com uma equipe dedicada para orientação, suporte e incentivo
            em cada passo do seu crescimento profissional.
          </p>
        </div>
      </div>
    </div>
  );
}
