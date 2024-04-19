import Image from "next/image";

export default function ExploreMore() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div className="space-y-4 flex flex-col md:flex-row bg-teal-600 items-center rounded-md overflow-hidden">
        <div className="md:w-[36rem] p-8 space-y-4">
          <h3 className="text-4xl font-bold">Explore more</h3>
          <p className="md:w-[28rem]">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <button className="bg-white text-gray-900 p-4 rounded-md">
            Request a demo
          </button>
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
