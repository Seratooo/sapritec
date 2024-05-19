import Image from "next/image";

export default function MainSection() {
  return (
    <main className="flex flex-col justify-center items-center space-y-4 p-4 md:h-screen">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-center">
        NOSSOS
        <span className="text-sky-600"> SERVIÇOS</span>
      </h1>
      <p className="text-sm text-gray-400 max-w-[38rem] text-center">
        Nossos serviços abrangem desde consultoria estratégica até
        implementações de sistemas avançados, garantindo a satisfação dos nossos
        clientes.
      </p>

      <div className="">
        <Image
          src={`/assets/services/mainImage.png`}
          width={1176}
          height={641}
          className="select-none rounded-md"
          alt="Home Image"
        />
      </div>
    </main>
  );
}
