import Image from "next/image";

export default function Partners() {
  return (
    <div className="m-auto flex px-4 py-8 flex-col space-y-8 items-center justify-center">
      <p className="text-md font-bold">Loved by Product-led Teams</p>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Image
          alt="partnr"
          src={`/assets/home/partners/Container 20.png`}
          width={240}
          height={160}
        />
        <Image
          alt="partnr"
          src={`/assets/home/partners/Container 21.png`}
          width={240}
          height={160}
        />
        <Image
          alt="partnr"
          src={`/assets/home/partners/Container 22.png`}
          width={240}
          height={160}
        />
        <Image
          alt="partnr"
          src={`/assets/home/partners/Container 23.png`}
          width={240}
          height={160}
        />
        <Image
          alt="partnr"
          src={`/assets/home/partners/Container 24.png`}
          width={240}
          height={160}
        />
      </div>
    </div>
  );
}
