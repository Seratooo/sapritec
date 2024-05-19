import Image from "next/image";

export default function ContactForm() {
  return (
    <div
      className="flex flex-col md:flex-row gap-20 p-4 items-center justify-center mt-16 md:mt-28"
      id="contactus"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-4xl font-bold">Precisa de ajuda?</h3>
        <p className="text-md 2xl:text-lg text-gray-400">
          Entre em contato conosco e tire as suas dúvidas!
        </p>
        <Image
          src={"/assets/contact-form/Image 69.png"}
          width={450}
          height={660}
          alt="Contact form"
          className="hidden md:block rounded-md"
        />
      </div>
      <form className="flex flex-col gap-8 w-full md:w-auto">
        <div className="flex gap-4">
          <label htmlFor="" className="flex flex-col text-sm w-[48%]">
            Primeiro nome
            <input
              type="text"
              required
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            />
          </label>
          <label htmlFor="" className="flex flex-col text-sm w-[48%]">
            Último nome
            <input
              type="text"
              required
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Email
            <input
              type="email"
              required
              name=""
              id=""
              placeholder="Email"
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Nome da empresa
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            />
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Nº de colaboradores
            <select
              name=""
              id=""
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            >
              <option value="">5-10</option>
              <option value="">10-20</option>
              <option value="">20-40</option>
              <option value="">+40</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Qual tópico melhor atende às suas necessidades?
            <select
              name=""
              id=""
              required
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            >
              <option value="">Consultoria</option>
              <option value="">Desenvolvimento de software</option>
              <option value="">Treinamento</option>
              <option value="">Prestação de serviço</option>
              <option value="">Diversos</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="" className="flex flex-col text-sm">
            Como podemos ajudar?
            <textarea
              name=""
              required
              id=""
              cols={30}
              rows={5}
              className="text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
            ></textarea>
          </label>
        </div>
        <button
          className="bg-sky-600 p-3 text-md xl:text-xl rounded-md"
          type="submit"
        >
          Contactar
        </button>
      </form>
    </div>
  );
}
