import Image from "next/image";

export default function ExploreMore() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 mt-24">
      <div className="space-y-4 flex flex-col md:flex-row bg-black items-center rounded-md overflow-hidden">
        <div className="md:w-[36rem] p-8 space-y-4">
          <h3 className="text-4xl font-bold">
            Não espere o futuro acontecer, molde-o com a tecnologia ao seu lado
          </h3>
          <p className="md:w-[28rem]">
            Junte-se à revolução tecnológica e transforme sua empresa hoje
            mesmo. Veja o vídeo ao lado
          </p>
        </div>
        <Image
          src={`/assets/getStarted.png`}
          width={588}
          height={384}
          className="mt-0"
          alt="get started"
        />
      </div>
    </div>
  );
}
