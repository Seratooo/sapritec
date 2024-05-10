import Image from "next/image";

export default function MainSection() {
  return (
    <main className="max-w-[1440px] m-auto flex flex-col justify-center items-center space-y-4 py-16 px-4">
      <h1 className="text-4xl font-bold">
        Sobre a<span className="text-sky-400"> SAPRITEC</span>
      </h1>
      <p className="text-sm text-gray-400 md:w-[45rem] text-center">
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
