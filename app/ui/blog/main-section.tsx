export default function MainSection() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-8">
      <div
        className="flex flex-col w-[100%] h-[31rem] bg-cover justify-center p-8"
        style={{ backgroundImage: 'url("/assets/blog/Image 59.png")' }}
      >
        <button className="bg-teal-600 p-2 rounded-full w-28 text-xs">
          Breaking news
        </button>
        <p className="text-md">Consectetur ex co</p>
        <h3 className="text-2xl font-bold mb-4 mt-2">
          Tempor Consectetur Est Elit
        </h3>
        <p className="text-md flex gap-2 items-center">
          Dec 24, 2022
          <span className="bg-white text-xs p-1 rounded-full text-black">
            5 mins read
          </span>
        </p>
      </div>
    </main>
  );
}
