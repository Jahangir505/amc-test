"use client";
import HomeLayout from "@/shared/layouts/home-layout/HomeLayout";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SingleProduct(params) {
  const { catslug, subcatslug, viscosity } = params;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/get-products/${catslug}/${subcatslug}/${viscosity
            .toLowerCase()
            .replace(/\s+/g, "-")}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, [catslug,subcatslug,viscosity]);
  return (
    <HomeLayout>
      <div className="w-full">
        <div className="bg-cover bg-center bg-[url('/images/bg-after-our-history-abou-page.png')] w-full py-28">
          <div className="container mx-auto">
          {product && product.map((product) => (
            <div className="w-[85%] mx-auto" key={product._id}>
              <div className="flex gap-6 md:flex-col sm:flex-col">
                <div className="basis-[35%] md:basis-full sm:basis-full bg-white p-10 bg-opacity-5 rounded-[7px] shadow-inner border border-opacity-30 border-white backdrop-blur-2xl flex justify-center align-middle items-center">
                  <Image
                    src={product.product_image}
                    width={250}
                    height={390}
                    className="w-[90%]"
                    alt={product.product_name}
                  />
                </div>
                <div className="basis-[65%] md:basis-full sm:basis-full bg-white p-7 bg-opacity-5 rounded-[7px] shadow-inner border border-opacity-30 border-white backdrop-blur-2xl relative">
                  <div className="flex justify-between align-middle items-center ">
                    <div className="px-2 py-1 bg-white bg-opacity-5 border border-white border-opacity-40 justify-start items-start gap-2.5 inline-flex backdrop-blur-2xl">
                      <p className="text-zinc-200 text-xs font-bold font-campton-light leading-[21.12px]">
                      {product.product_class}
                      </p>
                    </div>
                    <div className="absolute top-2 right-2">
                      <svg
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 71 80"
                        className="h-7 w-6"
                      >
                        <path
                          d="M68.164 67.473h-.481v-.188h1.189v.188h-.483v1.305h-.225v-1.305ZM70.384 68.155c0-.274.003-.556.01-.715h-.007c-.067.253-.292.868-.46 1.336h-.199c-.128-.386-.36-1.076-.43-1.339h-.006c.011.174.017.5.017.755v.584h-.21v-1.493h.335c.161.45.355 1.026.408 1.224h.002c.035-.153.267-.785.436-1.224h.324v1.493h-.217v-.621h-.003ZM67.593 71.54c-.076-2.651-2.124-2.79-4.142-2.825a224.477 224.477 0 0 0-6.687 0c-2.019.035-4.066.174-4.142 2.825 0 0-.085 1.587-.085 3.06 0 1.27.085 2.456.085 2.456.076 2.652 2.123 2.79 4.142 2.825 1.798.033 4.888.033 6.687 0 2.018-.035 4.066-.173 4.142-2.825 0 0 .085-1.587.085-3.06 0-1.272-.085-2.456-.085-2.456Zm-3.323 4.138c-.042 1.329-1.18 1.397-2.303 1.416-1 .016-2.72.016-3.72 0-1.123-.019-2.263-.087-2.303-1.416 0 0-.047-.593-.047-1.231 0-.736.047-1.533.047-1.533.04-1.33 1.18-1.397 2.303-1.414 1-.016 2.72-.016 3.72 0 1.123.02 2.263.087 2.303 1.414 0 0 .048.593.048 1.23 0 .74-.048 1.534-.048 1.534ZM48.236 75.54l-.005.492c0 .628-.329 1.12-1.34 1.12 0 0-1.934.036-2.581.036-1.939 0-2.363-.097-2.412-.104-.479-.058-.799-.396-.92-.853-.13-.494-.1-1.207-.1-1.831 0-.898.015-1.346.105-1.964.08-.554.56-.98 1.142-.98 0 0 1.21-.07 2.453-.07 1.298 0 2.63.07 2.63.07.46 0 .834.368.834.822v.441l3.36.005c-.005-.68-.014-1.187-.014-1.187-.064-2.418-1.83-2.789-3.716-2.824-1.677-.033-4.57-.094-6.243.038-1.614.126-3.754.154-3.825 2.805 0 0-.095 1.4-.095 2.87 0 1.27.057 2.626.057 2.626.292 2.564 1.976 2.637 3.858 2.763 1.656.113 4.592.097 6.236.015 4.216-.214 3.893-1.587 3.934-4.298l-3.358.008ZM36.574 68.844v10.904h-3.27V71.56h-.53l-4.136 8.187h-2.843L21.66 71.56h-.53v8.187h-3.27V68.842h6.084l3.273 7.15 3.274-7.148h6.083ZM11.13 68.84H5.88L0 79.748h3.91l.99-1.84h7.132l.977 1.84h3.91l-5.79-10.908Zm-4.953 6.7L8.41 71.4h.169l2.196 4.14H6.177Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M67.655 37.105h-8.602c-1.905 0-3.497-1.414-3.703-3.287l-.372-3.41H50.19l-.372 3.408c-.206 1.875-1.798 3.289-3.703 3.289H40.22c-1.906 0-3.498-1.414-3.704-3.287l-.372-3.41h-4.786l-.372 3.408c-.207 1.875-1.799 3.289-3.704 3.289h-5.89c-1.91 0-3.503-1.416-3.704-3.296l-.363-3.402h-4.779l-.363 3.402c-.2 1.88-1.793 3.298-3.705 3.298H.05V32.81h7.874l.363-3.401c.201-1.88 1.793-3.299 3.703-3.299h5.888c1.91 0 3.503 1.416 3.704 3.296l.365 3.402h4.782l.372-3.409c.206-1.875 1.798-3.289 3.703-3.289H36.7c1.904 0 3.497 1.414 3.703 3.287l.372 3.411h4.786l.372-3.409c.207-1.875 1.799-3.289 3.704-3.289h5.895c1.905 0 3.498 1.414 3.704 3.287l.372 3.411h8.047v4.297Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M42.094.966c-.272 4.168-3.777 7.455-8.065 7.455-4.235 0-7.718-3.221-8.054-7.347A31.718 31.718 0 0 1 34.223 0c2.715 0 5.353.333 7.871.966ZM60.342 13.36c-6.09 3.32-15.362 5.704-26.498 5.704-10.8 0-19.855-2.246-25.947-5.404a30.365 30.365 0 0 0-3.137 5.617c7.35 3.865 17.587 6.229 29.084 6.229 11.812 0 22.309-2.502 29.69-6.562a30.978 30.978 0 0 0-3.192-5.584Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M48.575 3.362c-3.486 4.252-8.793 6.981-14.731 6.981A19.018 19.018 0 0 1 19.34 3.641a30.367 30.367 0 0 0-5.438 3.577 25.492 25.492 0 0 0 19.942 9.57c8.238 0 15.577-3.91 20.235-9.945a30.935 30.935 0 0 0-5.504-3.481ZM42.094 62.194c-.272-4.169-3.777-7.455-8.065-7.455-4.235 0-7.718 3.22-8.054 7.347a31.734 31.734 0 0 0 8.25 1.073c2.713 0 5.35-.332 7.87-.965ZM60.342 49.8c-6.09-3.32-15.362-5.704-26.498-5.704-10.8 0-19.855 2.243-25.947 5.401A30.369 30.369 0 0 1 4.76 43.88c7.35-3.866 17.587-6.229 29.084-6.229 11.812 0 22.309 2.504 29.69 6.562a30.838 30.838 0 0 1-3.192 5.586Z"
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M48.575 59.798c-3.486-4.253-8.793-6.982-14.731-6.982A19.019 19.019 0 0 0 19.34 59.52a30.361 30.361 0 0 1-5.438-3.578 25.492 25.492 0 0 1 19.942-9.569c8.238 0 15.577 3.91 20.235 9.947a31.062 31.062 0 0 1-5.504 3.479Z"
                          fill="#ffffff"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="w-full text-white text-[33px] font-campton-bold mt-4 mb-4 sm:text-2xl md:text-3xl">
                    {product.product_name}
                  </h1>
                  <p className="text-zinc-200 text-xs font-campton-light leading-snug">
                    {product.product_description}
                  </p>

                  <div className="flex mt-4 sm:flex-col">
                    <div className="basis-1/2 sm:basis-full">
                      <span className="text-slate-500 text-xs font-campton-semibold mb-2">
                        Avaliable SAE Grades
                      </span>
                      <div className="text-amber-500 text-lg font-campton-semibold sm:text-base">
                        {product.product_viscosity}
                      </div>
                    </div>
                    <div className="basis-1/2 sm:basis-full sm:mt-4">
                      <div className="text-slate-500 text-xs font-campton-semibold mb-2">
                        Performance Levels
                      </div>
                      <div className="text-white text-lg font-campton-semibold sm:text-base">
                        {product.product_api}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="w-full">
                      <div className="text-slate-500 text-xs font-campton-semibold mb-2">
                        Avaliable Sizes
                      </div>
                      <div className="text-white text-sm font-campton-semibold sm:text-base">
                      {product.product_size}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-10 sm:flex-col">
                    <div className="basis-1/2 sm:basis-full">
                      <Link href={product.product_detail_file} className="flex text-neutral-900 items-center justify-center font-campton-medium uppercase tracking-[0.08em] transition-colors focus:outline-none rounded-sm bg-amc-primary hover:bg-orange-400 focus-visible:outline-primary-500 px-5 text-sm shadow-[0px_0px_20px_rgba(255,164,0,0.24)] py-2">
                        <svg className="mr-2"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Orion_download-file (1) 1">
                            <path
                              id="layer2"
                              d="M7 0.5H1.5V14H7.175C6.73638 13.2403 6.50535 12.3785 6.50513 11.5013C6.5049 10.624 6.73548 9.76216 7.17372 9.00222C7.61195 8.24227 8.24241 7.611 9.0018 7.17179C9.76118 6.73259 10.6228 6.5009 11.5 6.5V5H7V0.5Z"
                              fill="#12131B"
                            />
                            <path
                              id="layer2_2"
                              d="M8 1V4H11L8 1Z"
                              fill="#12131B"
                            />
                            <path
                              id="layer1"
                              d="M11.5 7.5C10.7089 7.5 9.93552 7.7346 9.27772 8.17412C8.61992 8.61365 8.10723 9.23836 7.80448 9.96927C7.50173 10.7002 7.42252 11.5044 7.57686 12.2804C7.7312 13.0563 8.11216 13.769 8.67157 14.3284C9.23098 14.8878 9.94372 15.2688 10.7196 15.4231C11.4956 15.5775 12.2998 15.4983 13.0307 15.1955C13.7616 14.8928 14.3864 14.3801 14.8259 13.7223C15.2654 13.0645 15.5 12.2911 15.5 11.5C15.5 10.4391 15.0786 9.42172 14.3284 8.67157C13.5783 7.92143 12.5609 7.5 11.5 7.5ZM13.35 12.35L11.5 14.2L9.65 12.35C9.59269 12.307 9.54529 12.2522 9.511 12.1893C9.47671 12.1264 9.45634 12.0569 9.45126 11.9854C9.44618 11.914 9.45652 11.8423 9.48157 11.7752C9.50662 11.708 9.54579 11.6471 9.59645 11.5964C9.6471 11.5458 9.70805 11.5066 9.77516 11.4816C9.84228 11.4565 9.91399 11.4462 9.98545 11.4513C10.0569 11.4563 10.1264 11.4767 10.1893 11.511C10.2522 11.5453 10.307 11.5927 10.35 11.65L11 12.3V9.5C11 9.36739 11.0527 9.24021 11.1464 9.14645C11.2402 9.05268 11.3674 9 11.5 9C11.6326 9 11.7598 9.05268 11.8536 9.14645C11.9473 9.24021 12 9.36739 12 9.5V12.3L12.65 11.65C12.7463 11.5778 12.8654 11.5427 12.9854 11.5513C13.1055 11.5598 13.2185 11.6113 13.3036 11.6964C13.3887 11.7816 13.4402 11.8945 13.4487 12.0146C13.4573 12.1346 13.4222 12.2537 13.35 12.35Z"
                              fill="#12131B"
                            />
                          </g>
                        </svg>
                        Product Details Sheet
                      </Link>
                    </div>
                    <div className="basis-1/2 sm:basis-full">
                    <Link href={product.product_safety_file} className="flex text-neutral-900 items-center justify-center font-campton-medium tracking-[0.08em] transition-colors focus:outline-none rounded-sm bg-amc-primary hover:bg-orange-400 focus-visible:outline-primary-500 px-5 text-sm shadow-[0px_0px_20px_rgba(255,164,0,0.24)] py-2 uppercase">
                        <svg className="mr-2"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Orion_download-file (1) 1">
                            <path
                              id="layer2"
                              d="M7 0.5H1.5V14H7.175C6.73638 13.2403 6.50535 12.3785 6.50513 11.5013C6.5049 10.624 6.73548 9.76216 7.17372 9.00222C7.61195 8.24227 8.24241 7.611 9.0018 7.17179C9.76118 6.73259 10.6228 6.5009 11.5 6.5V5H7V0.5Z"
                              fill="#12131B"
                            />
                            <path
                              id="layer2_2"
                              d="M8 1V4H11L8 1Z"
                              fill="#12131B"
                            />
                            <path
                              id="layer1"
                              d="M11.5 7.5C10.7089 7.5 9.93552 7.7346 9.27772 8.17412C8.61992 8.61365 8.10723 9.23836 7.80448 9.96927C7.50173 10.7002 7.42252 11.5044 7.57686 12.2804C7.7312 13.0563 8.11216 13.769 8.67157 14.3284C9.23098 14.8878 9.94372 15.2688 10.7196 15.4231C11.4956 15.5775 12.2998 15.4983 13.0307 15.1955C13.7616 14.8928 14.3864 14.3801 14.8259 13.7223C15.2654 13.0645 15.5 12.2911 15.5 11.5C15.5 10.4391 15.0786 9.42172 14.3284 8.67157C13.5783 7.92143 12.5609 7.5 11.5 7.5ZM13.35 12.35L11.5 14.2L9.65 12.35C9.59269 12.307 9.54529 12.2522 9.511 12.1893C9.47671 12.1264 9.45634 12.0569 9.45126 11.9854C9.44618 11.914 9.45652 11.8423 9.48157 11.7752C9.50662 11.708 9.54579 11.6471 9.59645 11.5964C9.6471 11.5458 9.70805 11.5066 9.77516 11.4816C9.84228 11.4565 9.91399 11.4462 9.98545 11.4513C10.0569 11.4563 10.1264 11.4767 10.1893 11.511C10.2522 11.5453 10.307 11.5927 10.35 11.65L11 12.3V9.5C11 9.36739 11.0527 9.24021 11.1464 9.14645C11.2402 9.05268 11.3674 9 11.5 9C11.6326 9 11.7598 9.05268 11.8536 9.14645C11.9473 9.24021 12 9.36739 12 9.5V12.3L12.65 11.65C12.7463 11.5778 12.8654 11.5427 12.9854 11.5513C13.1055 11.5598 13.2185 11.6113 13.3036 11.6964C13.3887 11.7816 13.4402 11.8945 13.4487 12.0146C13.4573 12.1346 13.4222 12.2537 13.35 12.35Z"
                              fill="#12131B"
                            />
                          </g>
                        </svg>
                        MATERIAL SAFETY SHEET
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
