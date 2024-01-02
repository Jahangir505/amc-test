"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./NavLink";
import MobileNav from "./MobileNav";
import SearchForm from "../search-form/SearchForm";

export default function TopHeader() {
  const [isActive, setIsActive] = useState(false);                             
  const [isActiveSearch, setIsActiveSearch] = useState(false); 
  
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 50) {
          setScrolled(true);
      }
      else {
          setScrolled(false);
      }
  }
  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  },[])


  return (
    <div>
      <div className={scrolled? "fixed top-0 left-0 right-0 bg-black w-full z-40 py-5 transition-all duration-300" : "relative py-5 z-40"}>
        <header className="px-1 sm:px-4 md:px-4 container mx-auto flex items-center justify-between font-campton-medium relative z-50">
          <div className="flex items-center gap-x-32">
            <a
              className="focus:outline-none focus-visible:outline-primary-500"
              href="/"
            >
              <Image
                className="w-[49px] sm:w-[49px]"
                src="/images/logo.svg"
                alt="logo"
                width={49}
                height={56}
              />
            </a>
            <nav className="sm:hidden md:hidden">
              <Navigation />
            </nav>
          </div>
          <div className="flex items-center gap-x-4 sm:gap-x-6">
            <div className="hidden lg:flex gap-4 justify-center align-middle items-center">
              <button className="cursor-pointer"
              onClick={() =>
                isActiveSearch == false ? setIsActiveSearch(true) : setIsActiveSearch(false)
              }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Group 178">
                    <circle
                      id="Ellipse 8"
                      cx="8.88461"
                      cy="8.88461"
                      r="7.38461"
                      stroke="#FFA400"
                      strokeWidth="3"
                    />
                    <path
                      id="Vector 1"
                      d="M13.5385 13.5386L22 22.0001"
                      stroke="#FFA400"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </button>
              <Link
                className="flex items-center justify-center font-medium uppercase tracking-[0.08em] transition-colors focus:outline-none rounded-sm bg-amber-500 text-neutral-900 hover:bg-orange-300 focus-visible:outline-primary-500 h-8 px-6 text-[10px] shadow-[0px_0px_20px_rgba(255,164,0,0.24)]"
                href="/contact"
              >
                Contact Us
              </Link>
            </div>
            <button className="lg:hidden cursor-pointer"
            onClick={() =>
              isActiveSearch == false ? setIsActiveSearch(true) : setIsActiveSearch(false)
            }
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Group 178">
                    <circle
                      id="Ellipse 8"
                      cx="8.88461"
                      cy="8.88461"
                      r="7.38461"
                      stroke="#FFA400"
                      strokeWidth="3"
                    />
                    <path
                      id="Vector 1"
                      d="M13.5385 13.5386L22 22.0001"
                      stroke="#FFA400"
                      strokeWidth="3"
                    />
                  </g>
                </svg>
              </button>
            <button
              onClick={() =>
                isActive == false ? setIsActive(true) : setIsActive(false)
              }
              type="button"
              className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 p-1.5 focus:outline-none focus-visible:outline-primary-500 lg:hidden"
            >
              <span
                className={`h-0.5 w-6 origin-left rounded-full bg-amc-primary transition-all duration-300
                ${isActive ? "rotate-45" : ""}
              `}
              ></span>
              <span
                className={`h-0.5 rounded-full  bg-amc-primary transition-all duration-300
                ${isActive ? "w-0" : "w-6"}
              `}
              ></span>
              <span
                className={`h-0.5 w-6 origin-left rounded-full  bg-amc-primary transition-all duration-300
                ${isActive ? "-rotate-45" : ""}
              `}
              ></span>
            </button>
          </div>
        </header>
        <SearchForm activation={isActiveSearch}/>
      <MobileNav activation={isActive} />
      </div>
    </div>
  );
}
