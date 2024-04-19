import Image from "next/image";

export default function CardHome() {
  return (
    <div className="bg-gray-900 w-[376px] h-[446px] rounded-md overflow-hidden">
      <Image
        src={`/assets/cards/Image 2.png`}
        width={376}
        height={256}
        alt="Card Image"
      />
      <div className="p-8 space-y-4">
        <p className="text-xs text-teal-400">Do consectetur</p>
        <h4 className="text-2xl font-bold">
          Aliqua irure tempor Lorem occaecat volup
        </h4>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-100">Dec 22, 2022</p>
          <span className="border-[1px] p-2 text-xs text-gray-400 rounded-full border-gray-400">
            5 min read
          </span>
        </div>
      </div>
    </div>
  );
}
