import { Facebook, Linkedin, Youtube } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex px-4 2xl:px-12 items-start border-t-[1px] border-gray-900 pt-20">
        <div className="flex justify-between w-full flex-wrap gap-4">
          <div className="hidden md:block">
            <Logo></Logo>
          </div>
          <div className="space-y-3 w-20 md:w-32">
            <h3 className="text-md 2xl:text-xl font-bold">Produtos</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li className="font-thin">Início</li>
              <li className="font-thin">Nossos serviços</li>
            </ul>
          </div>
          <div className="space-y-3 w-20 md:w-32">
            <h3 className="text-md 2xl:text-xl font-bold">Resources</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li className="font-thin">Mídias Sociais</li>
              <li className="font-thin">Nossas publicações</li>
              <li className="font-thin">Desenvolvedores</li>
              <li className="font-thin">Privacidade</li>
            </ul>
          </div>
          <div className="space-y-3 w-20 md:w-32">
            <h3 className="text-md 2xl:text-xl font-bold">Empresa</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li className="font-thin">Sobre nós</li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-md 2xl:text-xl font-bold text-sky-400">
              Deixa o seu email e receba novidades!
            </p>
            <p className="text-sm 2xl:text-lg text-gray-400 font-thin">
              Saiba sobre nossos recentes produtos e cursos
            </p>
            <div className="overflow-hidden mt-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Insira o seu email"
                className="text-sm 2xl:text-lg px-4 py-2 w-[70%] md:w-auto bg-black border border-gray-600 rounded-es-md rounded-ss-md font-thin"
              />
              <button className="w-[30%] md:w-auto bg-sky-600 px-4 py-2 text-sm 2xl:text-lg border border-sky-600 rounded-ee-md rounded-se-md font-thin">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center px-4 2xl:px-48 pt-24 pb-4">
        <p className="text-center text-sm max-w-52 md:max-w-none font-thin">
          © Copyright 2024 Sapritec. Todos os direitos Reservados
        </p>
        <div className="flex gap-1 justify-center items-center">
          <Facebook className="size-4 text-sky-500" />
          <Linkedin className="size-4 text-sky-500" />
          <Youtube className="size-4 text-sky-500" />
        </div>
      </div>
    </footer>
  );
}
