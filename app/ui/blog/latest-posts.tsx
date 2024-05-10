import Image from "next/image";

export default function LatestPosts() {
  return (
    <div className="flex flex-col justify-center px-4 py-16 gap-16 m-auto">
      <h3 className="text-4xl font-bold">Mais serviços SAPRITEC</h3>
      <div className="flex flex-col gap-16 self-center">
        <div className="flex -space-x-2 rounded-lg overflow-hidden">
          <Image
            src={"/assets/posts/Container 107.png"}
            width={588}
            height={314}
            className="w-44 md:w-[50%]"
            alt="post"
          />
          <div className="p-4 md:p-10 border-l-0 border rounded-lg border-gray-600">
            <h3 className="text-sm md:text-xl font-bold">Plataformas AS 400</h3>
            <p className="text-xs md:text-md text-gray-400">
              O AS/400, também conhecido como IBM i, é uma plataforma de
              computação que oferece uma ampla gama de serviços para empresas.
              Ele serve como uma base sólida para operações empresariais,
              fornecendo recursos essenciais para várias funções.
            </p>
            <div className="flex justify-between pt-2 pb-1 md:py-4 items-center">
              <button className="bg-white text-black p-1 md:p-2 text-xs md:text-md rounded-full">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse -space-x-2 rounded-lg overflow-hidden">
          <Image
            src={"/assets/posts/Container 107.png"}
            width={588}
            height={314}
            className="w-44 md:w-[50%]"
            alt="post"
          />
          <div className="p-4 md:p-10 border-l-0 border rounded-lg border-gray-600">
            <h3 className="text-sm md:text-xl font-bold">Plataformas AS 400</h3>
            <p className="text-xs md:text-md text-gray-400">
              O AS/400, também conhecido como IBM i, é uma plataforma de
              computação que oferece uma ampla gama de serviços para empresas.
              Ele serve como uma base sólida para operações empresariais,
              fornecendo recursos essenciais para várias funções.
            </p>
            <div className="flex justify-between pt-2 pb-1 md:py-4 items-center">
              <button className="bg-white text-black p-1 md:p-2 text-xs md:text-md rounded-full">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
