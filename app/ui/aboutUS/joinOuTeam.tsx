import Image from "next/image";

export default function JoinOurTeam() {
  return (
    <div className="mt-16 p-4 flex items-center justify-center">
      <div className="bg-gray-800 flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex flex-col justify-center items-start p-8 md:p-16 gap-4">
          <h3 className="text-3xl font-bold">Porquê escolher a Sapritec?</h3>
          <p className="text-md max-w-[24.5rem]">
            Somos uma empresa referência em treinamento e consultoria nos mais
            diversos produtos tecnológicos e garantimos a qualidade exigida no
            mercado de trabalho.
          </p>
          <button className="bg-sky-600 px-4 py-2 text-sm rounded-md">
            Ver mais
          </button>
        </div>
        <div>
          <Image
            src={"/assets/aboutus/knowmore.png"}
            width={588}
            height={384}
            alt="get started"
          ></Image>
        </div>
      </div>
    </div>
  );
}
