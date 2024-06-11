import Image from "next/image";
import { Rowdies } from "next/font/google";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});
export default function MainSection() {
  return (
    <main className="flex flex-col gap-10 min-h-[100vh] items-center justify-center p-4 bg-gradient-to-b from-[#00152A] to-black">
      <div className="flex items-center flex-col md:flex-row gap-4">
        <h1
          className={`text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left md:max-w-[30rem] 2xl:max-w-[33rem] ${rowdies.className}`}
        >
          SOMOS APAIXONADOS POR DESVENDAR O POTENCIAL MÁXIMO DAS{" "}
          <span className="text-sky-400">EMPRESAS!</span>
        </h1>
        <div className="border-[5px] rounded-md overflow-hidden border-sky-500">
          <Image
            src={`/assets/aboutus/about.png`}
            width={771}
            height={521}
            className="select-none rounded-md"
            alt="about Image"
          />
        </div>
      </div>
      <div className="space-y-8">
        <p className="text-lg 2xl:text-xl text-center font-thin max-w-[60rem]">
          Com uma equipe de especialistas dedicados em SAP ERP, S/4HANA,
          PRIMAVERA, Data Science e Inteligência Artificial, oferecemos uma
          abordagem holística para resolver os desafios mais complexos dos
          nossos clientes.
        </p>
        <hr className="w-[100%] m-auto border-gray-300" />
      </div>
    </main>
  );
}
