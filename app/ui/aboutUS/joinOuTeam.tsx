import Image from "next/image";

export default function JoinOurTeam() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <div className="space-y-4 flex flex-col md:flex-row bg-gray-800 items-center rounded-md overflow-hidden">
        <div className="md:w-[36rem] p-8 space-y-4">
          <h3 className="text-4xl font-bold">Join our team</h3>
          <p className="md:w-[28rem]">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <button className="bg-teal-600  p-4 rounded-md">
            Explore careers
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
