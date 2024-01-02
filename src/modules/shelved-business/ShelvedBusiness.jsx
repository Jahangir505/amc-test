import HomeLayout from "@/shared/layouts/home-layout/HomeLayout";
import React from "react";

export default function ShelvedBusiness() {
  return (
    <HomeLayout>
      <div className="bg-cover bg-center bg-[url('/images/gradient-hero-bg.png')] w-full pb-28 pt-80 -mt-40">
        <div className="container mx-auto sm:px-4 md:px-4">
          <div className="w-[600px] mx-auto sm:w-full md:w-full">
            <h1 className="text-center text-white text-6xl font-campton-bold sm:text-4xl md:text-5xl">
              SPECIALLY MADE LUBRICANTS TO
            </h1>
            <h2 className="text-center text-6xl font-campton-bold text-stroke-custome mb-6 sm:text-4xl md:text-5xl">
              FIT YOUR NEEDS
            </h2>
            <p className="text-center text-zinc-200 text-lg font-campton-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <a
              href="#"
              className="mt-6 py-2 px-7 rounded-sm text-lg font-campton-bold bg-amber-500 shadow mx-auto w-fit block"
            >
              Contact us
            </a>
          </div>

          <div className="flex gap-5 w-full mt-36 sm:flex-col">
            <div className="p-10 bg-white bg-opacity-5 shadow-inner border border-white border-opacity-25 backdrop-blur-2xl sm:p-7 md:p-7">
              <h2 className="text-white text-2xl font-campton-bold mb-5">
                BECOME OUR DISTRIBUTOR
              </h2>
              <p className="text-zinc-200 text-base font-campton-normal mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a
                href="#"
                className="mt-4 py-1 px-7 text-center rounded-sm text-sm font-campton-medium bg-amber-500 shadow mx-auto w-full block"
              >
                contact us: distribution
              </a>
            </div>

            <div className="p-10 bg-white bg-opacity-5 shadow-inner border border-white border-opacity-25 backdrop-blur-2xl sm:p-7 md:p-7">
              <h2 className="text-white text-2xl font-campton-bold mb-5">
                TOLL BLEND
              </h2>
              <p className="text-zinc-200 text-base font-campton-normal mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a
                href="#"
                className="mt-4 py-1 px-7 text-center rounded-sm text-sm font-campton-medium bg-amber-500 shadow mx-auto w-full block"
              >
                contact us: distribution
              </a>
            </div>

            <div className="p-10 bg-white bg-opacity-5 shadow-inner border border-white border-opacity-25 backdrop-blur-2xl sm:p-7 md:p-7">
              <h2 className="text-white text-2xl font-campton-bold mb-5">
                PRIVATE LABEL
              </h2>
              <p className="text-zinc-200 text-base font-campton-normal mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <a
                href="#"
                className="mt-4 py-1 px-7 text-center rounded-sm text-sm font-campton-medium bg-amber-500 shadow mx-auto w-full block"
              >
                contact us: distribution
              </a>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
