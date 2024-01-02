"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProductsMegaMenu from "./ProductsMegaMenu";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex sm:flex-col sm:items-start items-center space-x-14 sm:space-x-0 sm:space-y-6 text-sm font-light text-gray-400">
        <li>
          <Link
            href="/"
            className={`hover:text-white ${
              pathname === "/" ? "text-white" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`hover:text-white ${
              pathname === "/about" ? "text-white" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className="group">
          <Link
            href="/products"
            className={`hover:text-white ${
              pathname === "/products" ? "text-white" : ""
            }`}
          >
            Products
          </Link>
          <ProductsMegaMenu/>
        </li>
      </ul>
      <div className="hidden sm:block mt-5">
        <Link
          className="flex items-center justify-center font-medium uppercase tracking-[0.08em] transition-colors focus:outline-none rounded-full bg-amber-500 text-neutral-900 hover:bg-orange-300 focus-visible:outline-primary-500 h-8 px-6 text-[10px] shadow-[0px_0px_20px_rgba(255,164,0,0.24)]"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Navigation;
