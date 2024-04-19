import Image from "next/image";

export default function LatestPosts() {
  return (
    <div className="flex flex-col justify-center px-4 py-16 gap-16 m-auto">
      <h3 className="text-4xl font-bold">Latest posts</h3>
      <div className="flex flex-col gap-16 self-center">
        <div className="flex -space-x-2">
          <Image
            src={"/assets/posts/Container 107.png"}
            width={588}
            height={314}
            className="w-[50%]"
            alt="post"
          />
          <div className="p-10 border-l-0 border rounded-lg border-gray-600">
            <span className="text-teal-400 text-xs">Do consectetur</span>
            <h3 className="text-2xl font-bold">
              Aliqua Irure Tempor Lorem Occaecat Volup
            </h3>
            <p className="text-md text-gray-400">
              Ex nisi in in minim dolore ad nostrud cillum. Fugiat veniam
              adipisicing nulla amet...
            </p>
            <div className="flex justify-between py-4">
              <p className="text-md text-gray-400">Dec 22, 2022</p>
              <button className="bg-teal-600 p-2 text-md rounded-full">
                5 mins read
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse -space-x-2">
          <Image
            src={"/assets/posts/Container 107.png"}
            width={588}
            height={314}
            className="w-[50%]"
            alt="post"
          />
          <div className="p-10 border-r-0 border rounded-lg border-gray-600">
            <span className="text-teal-400 text-xs">Do consectetur</span>
            <h3 className="text-2xl font-bold">
              Aliqua Irure Tempor Lorem Occaecat Volup
            </h3>
            <p className="text-md text-gray-400">
              Ex nisi in in minim dolore ad nostrud cillum. Fugiat veniam
              adipisicing nulla amet...
            </p>
            <div className="flex justify-between py-4">
              <p className="text-md text-gray-400">Dec 22, 2022</p>
              <button className="bg-teal-600 p-2 text-md rounded-full">
                5 mins read
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
