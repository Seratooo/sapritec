export default function Identity() {
  return (
    <div className="flex flex-col gap-12 px-4 py-8 items-center">
      <h3 className="text-2xl font-bold">Pilares fundamentais:</h3>
      <div className="flex gap-1 items-start">
        <div className="w-[30rem]">
          <div className="flex gap-4">
            <div className="bg-teal-600 w-8 h-8 rounded-sm"></div>
            <p className="text-md font-bold">Missão</p>
          </div>
          <p className="pl-12 text-gray-400">
            Nossa missão é capacitar empresas através de nossa experiência
            incomparável em tecnologia SAP e nossa profunda compreensão Data
            Science e Inteligência Artificial, capacitamos nossos clientes a
            transformarem desafios em oportunidades e alcançarem novos patamares
            de sucesso.
          </p>
        </div>
        <img src="/assets/aboutus/mission.png" alt="Missão" />
      </div>
      <div className="flex gap-1 items-start">
        <div className="w-[30rem]">
          <div className="flex gap-4">
            <div className="bg-blue-600 w-8 h-8 rounded-sm"></div>
            <p className="text-md font-bold">Visão</p>
          </div>
          <p className="pl-12 text-gray-400">
            Nossa visão na Sapritec é ser reconhecida como líder em soluções de
            tecnologia da informação, impulsionando a inovação e a transformação
            digital em todo o mundo. Buscamos constantemente superar
            expectativas, moldar o futuro digital e inspirar o sucesso em nossos
            clientes, colaboradores e comunidades.
          </p>
        </div>
        <img src="/assets/aboutus/vision.png" alt="Visão" />
      </div>
      <div className="flex items-start gap-1">
        <div className="w-[30rem]">
          <div className="flex gap-4">
            <div className="bg-red-600 w-8 h-8 rounded-sm"></div>
            <p className="text-md font-bold">Valores</p>
          </div>
          <p className="pl-12 text-gray-400">
            Na Sapritec, nossos valores são o alicerce de tudo o que fazemos.
            Buscamos constantemente a excelência em nossas entregas,
            impulsionados pela inovação e pela busca incansável por soluções que
            transformem o mundo digital. Agimos com integridade em todas as
            nossas interações, cultivando uma cultura de colaboração e respeito
            mútuo.
          </p>
        </div>
        <img src="/assets/aboutus/value.png" alt="Valores" />
      </div>
    </div>
  );
}
