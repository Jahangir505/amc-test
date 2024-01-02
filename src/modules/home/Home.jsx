import Link from "next/link";
import HomeLayout from '@/shared/layouts/home-layout/HomeLayout'
import React from 'react'

export default function Home() {
  return (
    <HomeLayout>
        <div className="relative bg-cover bg-center">
        {/* Video Background */}
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/videos/Liquimedia.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

        {/* Content */}
        <div className="mx-auto container relative z-10">
          <div className="px-4 pt-20 pb-32 sm:pt-10 sm:pb-20 max-w-6xl mx-auto">
            <div className="-mt-10 flex justify-between gap-10 py-28 sm:flex-col sm:items-center md:flex-row lg:py-10">
              <div className="max-w-[420px]">
                <h1 className="sm:text-4xl font-campton-semibold text-white text-[44px] leading-[49px]">
                  Lubricant Manufacturing Since 1963
                </h1>
                <p className="mt-7 text-zinc-200 text-sm font-campton-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <Link
                  className="mt-7 inline-flex content-normal align-middle items-center font-campton-medium uppercase tracking-[0.08em] transition-colors focus:outline-none rounded-sm bg-amc-primary text-gray-700 hover:bg-orange-300 focus-visible:outline-primary-500 h-8 px-6 text-sm shadow-[0px_0px_20px_rgba(255,164,0,0.24)]"
                  href="#"
                >
                  BROWSE OUR PRODUCTS
                </Link>
              </div>
              <div className="flex-1 items-center justify-center sm:flex sm:pl-10"></div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
