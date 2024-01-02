import React from "react";

export default function SearchForm(props) {
  const activation = props.activation;
  return (
    <div className="container mx-auto sm:px-4 md:px-4 relative">
      <div
        className={`absolute z-30 inset-x-0 py-6 px-9 top-5 bg-[#222222] rounded-bl-[40px] rounded-br-[40px] shadow-inner border border-white border-opacity-20 backdrop-blur-2xl sm:mx-4

        ${
        activation ? "opacity-100 translate-y-0 top-0" : "opacity-0 -translate-y-full -top-24"
        } transition-all duration-300 
        
        `}
      >
        <div className="flex sm:flex-col gap-4 align-middle items-center">
          <div className="basis-1/3">
            <div className="text-white text-xl leading-snug font-campton-medium sm:text-center sm:text-xl">
              WHAT ARE YOU LOOKING FOR?
            </div>
          </div>
          <div className="basis-2/3">
            <form className="flex w-full" action="/products">
              <input type="text" name="search" className="bg-[#d9d9d9] basis-10/12 px-3" />
              <button
                type="submit"
                className="text-neutral-900 text-xs font-campton-bold uppercase tracking-wide bg-amber-500 px-3 py-2 basis-2/12"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
