import Image from "next/image";

export default function LatestPosts() {
  return (
    <div className="flex flex-col justify-center items-center p-4 pt-16 gap-16 m-auto">
      <div className="space-y-8 md:space-y-16">
        <h3 className="text-3xl font-bold">Mais serviços SAPRITEC</h3>
        <div className="space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row overflow-hidden items-center border rounded-lg border-gray-800">
            <Image
              src={"/assets/posts/Image1.png"}
              width={588}
              height={314}
              className=""
              alt="post"
            />
            <div className="p-4 md:p-10">
              <h3 className="text-md font-bold mb-4">Plataformas AS 400</h3>
              <p className="text-md text-gray-400 max-w-[28rem]">
                O AS/400, também conhecido como IBM i, é uma plataforma de
                computação que oferece uma ampla gama de serviços para empresas.
                Ele serve como uma base sólida para operações empresariais,
                fornecendo recursos essenciais para várias funções.
              </p>
              <div className="flex justify-between mt-8 items-center">
                <button className="bg-white text-black px-2 py-1 text-sm rounded-full">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse overflow-hidden items-center border rounded-lg border-gray-800">
            <Image
              src={"/assets/posts/Image2.png"}
              width={588}
              height={314}
              className=""
              alt="post"
            />
            <div className="p-4 md:p-10">
              <h3 className="text-md font-bold mb-4">
                Desenvolvimento de Software
              </h3>
              <p className="text-md text-gray-400 max-w-[28rem]">
                O desenvolvimento de software para criar soluções tecnológicas
                que impulsionem seus negócios, automatizem processos, melhorem a
                eficiência operacional, atendam às necessidades dos clientes e
                permaneçam competitivas no mercado.
              </p>
              <div className="flex justify-between mt-8 items-center">
                <button className="bg-white text-black px-2 py-1 text-sm rounded-full">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
