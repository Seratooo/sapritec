import Logo from "./logo";
import NavLinks from "./nav-links";
import HeaderMenuMobile from "./header-mobile";
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <>
      <div className="hidden p-4 pb-1  md:flex fixed w-full bg-black -top-1 z-50">
        <div className="max-w-screen-2xl flex justify-between items-center w-full m-auto">
          <Logo />
          <div className="flex gap-8 lg:gap-20 items-center">
            <NavLinks />
            <div className="flex gap-4 text-md 2xl:text-xl">
              <Link
                href="/kwonmore"
                className="bg-sky-600 py-2 px-6 rounded-md shadow-sm hover:bg-gray-200 hover:text-sky-600 transition-all duration-700"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </div>
      <HeaderMenuMobile />
      <div className="pt-16 md:pt-8"></div>
    </>
  );
}
