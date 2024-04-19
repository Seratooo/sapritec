import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="logo-sapritec"
        src="/assets/logo.png"
        className="select-none w-20 h-auto"
        width={130}
        height={46}
      ></Image>
    </Link>
  );
}
