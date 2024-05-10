import Logo from "./logo";
import NavLinks from "./nav-links";
import HeaderMenuMobile from "./header-mobile";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      <div className="hidden px-4 py-4  md:flex fixed shadow-sm shadow-sky-950 w-full bg-black -top-1 z-50">
        <div className="max-w-screen-2xl flex justify-between items-center w-full m-auto">
          <Logo />
          <div className="flex gap-8 lg:gap-20 items-center">
            <NavLinks />
            <div className="flex gap-4 text-md xl:text-xl">
              <Link
                href="#coaching"
                className="bg-sky-600 py-2 px-6 rounded-none shadow-sm hover:bg-gray-200 hover:text-sky-600 transition-all duration-700"
              >
                Treinamentos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenuMobile />
      <div className="py-8"></div>
    </>
  );
}
