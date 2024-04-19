import Image from "next/image";

export default function FeactureHome() {
  return (
    <div className="py-8 px-4 margin-auto max-w-[1440px] m-auto flex flex-col items-center space-y-24">
      <div className="flex gap-4 md:gap-32 w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Feature</h3>
          <p className="text-sm text-gray-400 w-72">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.{" "}
          </p>
          <span className="flex gap-4">
            <button className="bg-teal-600 px-4 py-2 text-sm">Try now</button>
            <button className="px-4 py-2 text-teal-400 text-sm">
              Learn more
            </button>
          </span>
        </div>
        <Image
          alt="Feature Image"
          src={`/assets/home/feature/Container 10.png`}
          className="rounded-md w-auto md:w-[45.4rem]"
          width={727}
          height={400}
        />
      </div>

      <div className="flex flex-row-reverse gap-4 md:gap-32 w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Feature</h3>
          <p className="text-sm text-gray-400 w-72">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.{" "}
          </p>
          <span className="flex gap-4">
            <button className="bg-teal-600 px-4 py-2 text-sm">Try now</button>
            <button className="px-4 py-2 text-teal-400 text-sm">
              Learn more
            </button>
          </span>
        </div>
        <Image
          alt="Feature Image"
          src={`/assets/home/feature/Container 11.png`}
          className="rounded-md w-96 md:w-[45.4rem]"
          width={727}
          height={400}
        />
      </div>

      <div className="flex gap-4 md:gap-32 w-full items-center justify-center">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Feature</h3>
          <p className="text-sm text-gray-400 w-72">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.{" "}
          </p>
          <span className="flex gap-4">
            <button className="bg-teal-600 px-4 py-2 text-sm">Try now</button>
            <button className="px-4 py-2 text-teal-400 text-sm">
              Learn more
            </button>
          </span>
        </div>
        <Image
          alt="Feature Image"
          src={`/assets/home/feature/Container 10.png`}
          className="rounded-md w-96 md:w-[45.4rem]"
          width={727}
          height={400}
        />
      </div>
    </div>
  );
}
