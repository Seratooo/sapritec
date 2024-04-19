import Image from "next/image";

export default function Integrations() {
  return (
    <div className="flex justify-center flex-col items-center py-24 px-4 space-y-8">
      <h3 className="font-bold text-4xl">Integrations</h3>
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="flex flex-col justify-center gap-4 w-[318px] h-[250px] p-8 bg-gray-900 rounded-md">
          <Image
            width={136}
            height={108}
            src={`/assets/home/integrations/Image 12.png`}
            alt="Integration Image"
          />
          <p>
            Est proident Lorem commodo esse consequat reprehenderit laborum
            laborum eiusmod. Sint laborum mo
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 w-[318px] h-[250px] p-8 bg-gray-900 rounded-md">
          <Image
            width={108}
            height={109}
            src={`/assets/home/integrations/Image 13.png`}
            alt="Integration Image"
          />
          <p>
            Est proident Lorem commodo esse consequat reprehenderit laborum
            laborum eiusmod. Sint laborum mo
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 w-[318px] h-[250px] p-8 bg-gray-900 rounded-md">
          <Image
            width={220}
            height={76}
            src={`/assets/home/integrations/Image 14.png`}
            alt="Integration Image"
          />
          <p>
            Est proident Lorem commodo esse consequat reprehenderit laborum
            laborum eiusmod. Sint laborum mo
          </p>
        </div>
      </div>
    </div>
  );
}
