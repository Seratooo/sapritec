import Image from "next/image";

export default function MainSection() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold text-center md:text-left">
        NOSSOS
        <span className="text-sky-600"> SERVIÇOS</span>
      </h1>
      <p className="text-sm text-gray-400 md:w-[30rem] text-center">
        Nossos serviços abrangem desde consultoria estratégica até
        implementações de sistemas avançados, garantindo a satisfação dos nossos
        clientes.
      </p>

      <div className="pt-4">
        <Image
          src={`/assets/services/mainImage.png`}
          width={1176}
          height={600}
          className="select-none rounded-md"
          alt="Home Image"
        />
      </div>
    </main>
  );
}
