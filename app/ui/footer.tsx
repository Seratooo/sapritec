import { Facebook, Linkedin, Youtube } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex px-4 md:px-48 items-start gap-48 border-t-[1px] border-gray-900 mt-24 pt-20">
        <div className="flex justify-between w-full flex-wrap gap-4">
          <div className="space-y-3">
            <h3 className="text-md 2xl:text-xl font-bold">Produtos</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li>Início</li>
              <li>Nossos serviços</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-md 2xl:text-xl font-bold">Resources</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li>Mídias Sociais</li>
              <li>Nossas publicações</li>
              <li>Desenvolvedores</li>
              <li>Privacidade</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-md 2xl:text-xl font-bold">Empresa</h3>
            <ul className="text-sm 2xl:text-lg text-gray-400 space-y-3">
              <li>Sobre nós</li>
            </ul>
          </div>
          <div className="">
            <p className="text-md 2xl:text-xl font-bold text-sky-400">
              Deixa o seu email e receba novidades!
            </p>
            <p className="text-sm 2xl:text-lg text-gray-400">
              Saiba sobre nossos recentes produtos e cursos
            </p>
            <div className="overflow-hidden mt-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Insira o seu email"
                className="text-sm 2xl:text-lg px-4 py-2 w-44 md:w-auto"
              />
              <button className="bg-sky-600 px-4 py-2 text-sm 2xl:text-lg">
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center px-4 md:px-48 pt-24 pb-4">
        <p className="text-center text-sm">
          © Copyright 2024 Sapritec. Todos os direitos Reservados
        </p>
        <div className="flex gap-1">
          <Facebook />
          <Linkedin />
          <Youtube />
        </div>
      </div>
    </footer>
  );
}
