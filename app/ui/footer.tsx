import { Facebook, Linkedin, Youtube } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex px-4 md:px-24 items-start gap-48 border-t-[1px] border-gray-900 mt-24 pt-20">
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="flex justify-between w-full flex-wrap gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Product</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li>Features</li>
              <li>Intgrations</li>
              <li>Pricing plans</li>
              <li>Product updates</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li>Blog</li>
              <li>User guides</li>
              <li>Community</li>
              <li>Developers</li>
              <li>Legal</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Company</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li>About us</li>
              <li>
                Careers{"  "}
                <span className="bg-orange-600 p-1 text-white rounded-full">
                  Join us!
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-lg font-bold text-teal-400">
              Subscribe to our newsletter
            </p>
            <p className="text-xs text-gray-200">
              For product announcements and exclusive insights
            </p>
            <div className="rounded-md overflow-hidden mt-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="Input your email"
                className="text-sm px-4 py-2 w-44 md:w-auto"
              />
              <button className="bg-teal-600 px-4 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-start px-4 md:px-24 pt-24 pb-4">
        <select
          name=""
          id=""
          defaultValue="pt"
          className="bg-black border-[1px] border-gray-400 p-2 rounded-md text-gray-400 text-sm"
        >
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
        </select>
        <p className="text-center text-sm">
          ©2024 SAPRITEC • Privacy • Terms • Sitemap
        </p>
        <div className="flex gap-1">
          <Facebook />
          <Linkedin />
          <Youtube />
        </div>
      </div>
    </footer>
  );
}
