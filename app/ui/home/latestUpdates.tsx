import CardHome from "./cardHome";

export default function LatestUpdates() {
  return (
    <div className="px-4 py-8 flex flex-col items-center justify-center space-y-4">
      <h3 className="text-4xl font-bold">Nossos treinamentos</h3>
      <p className="text-gray-100 md:w-[39rem] text-center">
        Os nossos treinamentos ajudam os vários profissionais a se destacarem no
        mercado, saiba mais sobre os nossos cursos e faça sua inscrição
      </p>
      <div className="flex gap-4 py-4 flex-wrap items-center justify-center">
        <CardHome />
        <CardHome />
        <CardHome />
      </div>
      <button className="text-sm text-teal-400 border-[1px] border-teal-400 p-2 rounded-md ">
        Veja mais treinamentos
      </button>
    </div>
  );
}
