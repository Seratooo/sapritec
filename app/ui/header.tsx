import Logo from "./logo";
import NavLinks from "./nav-links";
import HeaderMenuMobile from "./header-mobile";

export default function HeaderMenu() {
  return (
    <>
      <div className="hidden justify-between p-4 items-center stroke-white md:flex fixed w-full bg-black border-b border-gray-900 -top-1">
        <Logo />
        <div className="flex gap-8 items-center">
          <NavLinks />
          <div className="flex gap-4 text-sm">
            <button className="bg-sky-600 py-2 px-3 rounded-md">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
      <HeaderMenuMobile />
      <div className="py-8"></div>
    </>
  );
}
