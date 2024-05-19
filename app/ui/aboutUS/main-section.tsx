import Image from "next/image";

export default function MainSection() {
  return (
    <main className="flex flex-col justify-center items-center space-y-4 p-4 md:min-h-screen mt-8">
      <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold">
        Sobre a<span className="text-sky-400"> SAPRITEC</span>
      </h1>
      <p className="text-sm text-gray-400 max-w-[43rem] text-center leading-[1.6]">
        Na SAPRITEC, somos apaixonados por desvendar o potencial máximo das
        empresas. Com uma equipe de especialistas dedicados em SAP ERP, S/4HANA,
        PRIMAVERA, Data Science e Inteligência Artificial, oferecemos uma
        abordagem holística para resolver os desafios mais complexos dos nossos
        clientes.
      </p>

      <div className="pt-4">
        <Image
          src={`/assets/aboutus/about.png`}
          width={1176}
          height={600}
          className="select-none rounded-md"
          alt="Home Image"
        />
      </div>
    </main>
  );
}
