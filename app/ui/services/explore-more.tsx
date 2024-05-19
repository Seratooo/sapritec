import Image from "next/image";

export default function ExploreMore() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-16">
      <div className="flex gap-16 flex-col md:flex-row bg-black md:items-center rounded-md overflow-hidden">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold md:max-w-[23rem]">
            Não espere o futuro acontecer, molde-o com a tecnologia ao seu lado
          </h3>
          <p className="md:max-w-[23rem]">
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
