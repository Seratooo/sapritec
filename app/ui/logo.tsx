import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="logo-sapritec"
        src="/assets/logo.png"
        className="select-none w-32 2xl:w-48 h-auto"
        width={192}
        height={62}
      ></Image>
    </Link>
  );
}
