import HomeLayout from '@/shared/layouts/home-layout/HomeLayout'
import React from 'react'
import CountrySelector from "@/components/countryselector/CountrySelector";

export default function Contact() {
  return (
    <HomeLayout>
            <div className="bg-cover bg-center bg-[url('/images/map.png')] -mt-56 py-72">
      <div className="container mx-auto">
        <div className="w-[520px] bg-white bg-opacity-5 shadow-inner border border-opacity-25 border-white backdrop-blur-sm mx-auto p-9 rounded-lg sm:w-[300px] sm:p-6">
          <div className="w-full flex gap-6 sm:flex-col">
            <div className="flex-1">
              <h2 className="text-white text-sm font-campton-bold">
                CONTACT EMAIL
              </h2>
              <p className="text-zinc-200 text-xs font-campton-light font-light mt-2">
                khalifaalmuhairi31@gmail.com
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-white text-sm font-campton-bold">
                CONTACT PHONE
              </h2>
              <p className="text-zinc-200 text-xs font-campton-light font-light mt-2">
                971 50 625 6789
              </p>
            </div>
          </div>

          <div className="w-full mt-10">
            <h2 className="text-white text-sm font-campton-bold">LOCATION</h2>
            <p className="text-zinc-200 text-xs font-campton-light font-light mt-2">
              P.O.BOX : 2615 - Dubai, United Arab Emirates
            </p>
          </div>

          <form>
            <div className="flex w-full flex-col mt-10 gap-2">
              <p className="text-zinc-200 text-sm font-campton-medium">
                Subject*
              </p>
              <div className="flex w-full flex-wrap gap-[4%] sm:flex-col">
                <div className="flex w-[48%] gap-3 mb-3 sm:w-full">
                  <input
                    name="subject"
                    type="radio"
                    className="accent-amber-500 w-4 h-4 mt-1"
                    id="distribution"
                    value="Distribution Inquiry"
                    required
                  />
                  <label
                    htmlFor="distribution"
                    className="text-zinc-200 text-xs font-normal font-campton-normal"
                  >
                    Distribution Inquiry
                  </label>
                </div>

                <div className="flex w-[48%] gap-3 mb-3 sm:w-full">
                  <input
                    name="subject"
                    type="radio"
                    className="accent-amber-500 w-4 h-4 mt-1"
                    id="press"
                    value="Press Inquiry"
                    required
                  />
                  <label
                    htmlFor="press"
                    className="text-zinc-200 text-xs font-normal font-campton-normal"
                  >
                    Press Inquiry
                  </label>
                </div>

                <div className="flex w-[48%] gap-3 mb-3 sm:w-full">
                  <input
                    name="subject"
                    type="radio"
                    className="accent-amber-500 w-4 h-4 mt-1"
                    id="Customer"
                    value="Customer Support"
                    required
                  />
                  <label
                    htmlFor="Customer"
                    className="text-zinc-200 text-xs font-normal font-campton-normal"
                  >
                    Customer Support
                  </label>
                </div>

                <div className="flex w-[48%]w-1/2 gap-3 mb-3 sm:w-full">
                  <input
                    name="subject"
                    type="radio"
                    className="accent-amber-500 w-4 h-4 mt-1"
                    id="General"
                    value="General Inquiry"
                    required
                  />
                  <label
                    htmlFor="General"
                    className="text-zinc-200 text-xs font-normal font-campton-normal"
                  >
                    General Inquiry
                  </label>
                </div>
              </div>

              <div className="flex w-full flex-wrap gap-[4%] sm:flex-col mt-5">
                <div className="flex flex-col w-[48%] gap-2 sm:w-full mb-5">
                  <label
                    htmlFor="name"
                    className="text-zinc-200 text-sm font-campton-medium"
                  >
                    Name*
                  </label>
                  <div className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30  ">
                    <input
                      name="name"
                      type="text"
                      className="h-full w-full bg-transparent tracking-tight text-gray-300 placeholder-shown:text-white/40 focus:outline-none px-4"
                      id="name"
                      placeholder="Ex. Chris Smith"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[48%] gap-2 sm:w-full mb-5">
                  <label
                    htmlFor="country"
                    className="text-zinc-200 text-sm font-campton-medium"
                  >
                    Country
                  </label>
                  <div className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30  ">
                    <CountrySelector />
                  </div>
                </div>

                <div className="flex flex-col w-[48%] gap-2 sm:w-full mb-5">
                  <label
                    htmlFor="email"
                    className="text-zinc-200 text-sm font-campton-medium"
                  >
                    Email Address*
                  </label>
                  <div className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30  ">
                    <input
                      name="email"
                      type="email"
                      className="h-full w-full bg-transparent tracking-tight text-gray-300 placeholder-shown:text-white/40 focus:outline-none px-4"
                      id="email"
                      placeholder="Ex. chrissmith@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col w-[48%] gap-2 sm:w-full mb-5">
                  <label
                    htmlFor="phone"
                    className="text-zinc-200 text-sm font-campton-medium"
                  >
                    Phone Number
                  </label>
                  <div className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-11 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30  ">
                    <input
                      name="phone"
                      type="tel"
                      className="h-full w-full bg-transparent tracking-tight text-gray-300 placeholder-shown:text-white/40 focus:outline-none px-4"
                      id="phone"
                      placeholder="Ex. 325 232 5555"
                    />
                  </div>
                </div>

                <div className="flex w-full gap-3 mb-3 sm:w-full">
                  <input
                    name="reach-out"
                    type="checkbox"
                    className="accent-amber-500 w-4 h-4 mt-1"
                    id="reach-out"
                    value="Yes someone at AMCO reach out to me"
                    required
                  />

                  <label
                    htmlFor="reach-out"
                    className="text-zinc-200 text-xs font-normal font-campton-normal"
                  >
                    Have someone at AMCO reach out to me
                  </label>
                </div>

                <div className="flex w-full flex-col gap-2 mb-3 sm:w-full">
                  <label
                    htmlFor="message"
                    className="text-zinc-200 text-sm font-campton-medium"
                  >
                    Your Message
                  </label>
                  <div className="card transition duration-75 focus-within:ring-1 focus-within:ring-amber-500 h-32 rounded-sm bg-white bg-opacity-5 shadow-inner border border-white border-opacity-30  ">
                    <textarea
                      name="message"
                      className="h-full w-full bg-transparent tracking-tight text-gray-300 placeholder-shown:text-white/40 focus:outline-none px-4"
                      id="message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="p-2 mt-6 rounded-sm bg-amber-500 shadow border border-opacity-25 border-white flex-col justify-center items-center gap-3 inline-flex"
                  >
                    <span className="text-neutral-900 text-sm font-medium font-campton-medium uppercase tracking-wider">
                      Send message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </HomeLayout>
  )
}
