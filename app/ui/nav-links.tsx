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
      <ul className="flex gap-4 items-center text-sm">
        <Link href="features" className="text-gray-400 hover:text-gray-100">
          Features
        </Link>
        <Link href="pricingplans" className="text-gray-400 hover:text-gray-100">
          Pricing
        </Link>
        <Link href="aboutus" className="text-gray-400 hover:text-gray-100">
          About us
        </Link>
        <Link href="" className="text-gray-400 hover:text-gray-100">
          Contact
        </Link>
        <Link href="blog" className="text-gray-400 hover:text-gray-100">
          Blog
        </Link>
        <Link href="support" className="text-gray-400 hover:text-gray-100">
          Support
        </Link>
        <Link href="integrations" className="text-gray-400 hover:text-gray-100">
          Integration
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
        <Link
          href="features"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          Features
        </Link>
        <Link
          href="pricingplans"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          Pricing
        </Link>
        <Link
          href="aboutus"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          About us
        </Link>
        <Link href="" className="text-gray-400 text-3xl hover:text-gray-100">
          Contact
        </Link>
        <Link
          href="blog"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          Blog
        </Link>
        <Link
          href="support"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          Support
        </Link>
        <Link
          href="integrations"
          className="text-gray-400 text-3xl hover:text-gray-100"
        >
          Integration
        </Link>
      </ul>
    </nav>
  );
}
