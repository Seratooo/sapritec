import { Menu } from "lucide-react";
import Logo from "./logo";
import NavLinks from "./nav-links";

export default function HeaderMenu() {
  return (
    <>
      <div className="hidden justify-between p-4 items-center stroke-white md:flex">
        <Logo />
        <NavLinks />
        <div className="flex gap-4 text-sm">
          <button className="text-teal-400">Sign in</button>
          <button className="bg-teal-600 py-2 px-3 rounded-md">Sign up</button>
        </div>
      </div>
      <div className="flex justify-between p-4 items-center md:hidden">
        <Logo />
        <Menu />
      </div>
    </>
  );
}
