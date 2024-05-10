import Image from "next/image";

export default function JoinOurTeam() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div className="space-y-4 flex flex-col md:flex-row bg-gray-800 items-center rounded-md overflow-hidden">
        <div className="md:w-[36rem] p-8 space-y-4">
          <h3 className="text-4xl font-bold">Porquê escolher a Sapritec?</h3>
          <p className="md:w-[28rem]">
            Somos uma empresa referência em treinamento e consultoria nos mais
            diversos produtos tecnológicos e garantimos a qualidade exigida no
            mercado de trabalho
          </p>
          <button className="bg-sky-600  p-4 rounded-md">Ver mais</button>
        </div>
        <Image
          src={`/assets/aboutus/knowmore.png`}
          width={588}
          height={384}
          className="mt-0"
          alt="get started"
        />
      </div>
    </div>
  );
}
