import Image from "next/image";

export default function CardIntegrations() {
  return (
    <div className="flex flex-col justify-center gap-4 w-[318px] h-[250px] p-8 bg-gray-900 rounded-md">
      <Image
        width={136}
        height={108}
        src={`/assets/home/integrations/Image 12.png`}
        alt="Integration Image"
      />
      <p>
        Est proident Lorem commodo esse consequat reprehenderit laborum laborum
        eiusmod. Sint laborum mo
      </p>
    </div>
  );
}
