import Image from "next/image";

export default function CardHome() {
  return (
    <div className="bg-[#171A1F] rounded-md overflow-hidden">
      <Image
        src={`/assets/cards/Image 2.png`}
        width={376}
        height={256}
        alt="Card Image"
        className="w-full"
      />
      <div className="px-8 py-6 space-y-4">
        <p className="text-xs text-teal-400">Sapritec</p>
        <h4 className="text-2xl font-bold md:max-w-[19rem]">
          Como ser um especialista SAP de sucesso?
        </h4>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">Carreira em alta!</p>
          <span className="px-6 py-1 text-xs bg-teal-400 rounded-full">
            Ler
          </span>
        </div>
      </div>
    </div>
  );
}
