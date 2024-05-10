export default function MainSection() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-8">
      <div
        className="flex flex-col w-[100%] h-[30rem] bg-cover items-start justify-end p-8"
        style={{ backgroundImage: 'url("/assets/kwonmore/Image 59.png")' }}
      >
        <button className="bg-teal-600 p-2 rounded-full text-xs">
          Acompanhe as nossas redes
        </button>
        <h3 className="text-2xl font-bold mb-4 mt-2 max-w-[36rem]">
          SAPRITEC, conectamos os nossos clientes ao mundo tecnológico!
        </h3>
      </div>
    </main>
  );
}
