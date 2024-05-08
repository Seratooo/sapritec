import Link from "next/link";

export default function NavLinks() {
  const Links = [
    {
      name: "",
      href: "",
      Icon: "",
      subItems: [{ name: "", href: "", Icon: "" }],
    },
  ];
  return (
    <nav>
      <ul className="flex gap-8 items-center text-sm">
        <Link href="/home" className="text-gray-400 hover:text-gray-100">
          Início
        </Link>
        <Link href="/services" className="text-gray-400 hover:text-gray-100">
          Serviços
        </Link>
        <Link href="aboutus" className="text-gray-400 hover:text-gray-100">
          Sobre nós
        </Link>
        <Link href="/contactus" className="text-gray-400 hover:text-gray-100">
          Contacte-nos
        </Link>
      </ul>
    </nav>
  );
}

export function NavLinksMobile() {
  const Links = [
    {
      name: "",
      href: "",
      Icon: "",
      subItems: [{ name: "", href: "", Icon: "" }],
    },
  ];
  return (
    <nav>
      <ul className="flex flex-col mt-12 gap-8 items-center text-sm">
        <Link href="/home" className="text-gray-400 hover:text-gray-100">
          Início
        </Link>
        <Link href="/services" className="text-gray-400 hover:text-gray-100">
          Serviços
        </Link>
        <Link href="aboutus" className="text-gray-400 hover:text-gray-100">
          Sobre nós
        </Link>
        <Link href="/contactus" className="text-gray-400 hover:text-gray-100">
          Contacte-nos
        </Link>
      </ul>
    </nav>
  );
}
