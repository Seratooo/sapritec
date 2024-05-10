import Image from "next/image";

export default function Partners() {
  return (
    <div className="m-auto flex px-4 py-8 flex-col space-y-8 items-center justify-center">
      <p className="text-md font-bold">
        OFERECEMOS O DIFERENCIAL NOS NOSSOS PRODUTOS
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Image
          alt="product"
          src={`/assets/home/partners/product1.png`}
          width={164}
          height={124}
        />
        <Image
          alt="product"
          src={`/assets/home/partners/product2.png`}
          width={164}
          height={124}
        />
        <Image
          alt="product"
          src={`/assets/home/partners/product3.png`}
          width={164}
          height={124}
        />
        <Image
          alt="product"
          src={`/assets/home/partners/product4.png`}
          width={164}
          height={124}
        />
        <Image
          alt="product"
          src={`/assets/home/partners/product5.png`}
          width={164}
          height={124}
        />
      </div>
    </div>
  );
}
