"use client";
import HomeLayout from "@/shared/layouts/home-layout/HomeLayout";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from 'next/navigation'
export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get('search');
  console.log(search);
  const [productsList, setProductsList] = useState([]);


  useEffect(() => {
    const fetchDataBySearch = async () => {
      try {
        const response = await fetch(`/api/search-products?query=${search}`,{ cache: 'no-store' });
        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/get-products/`,{ cache: 'no-store' });
        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    if(search){
      fetchDataBySearch();
    }else{
      fetchData();
    }
  }, [search, router]);


  return (
    <HomeLayout>
      <div className="w-full">
        <div className="bg-cover bg-center bg-[url('/images/bg-after-our-history-abou-page.png')] py-20">
          <div className="container mx-auto sm:px-4 md:px-4">
            <div className="flex gap-[1%] sm:flex-col sm:gap-5 md:gap-[2%] flex-wrap">
              {productsList &&
                productsList.map((product) => (
                  <div className="basis-[24%] sm:basis-full md:basis-[48%] bg-white bg-opacity-5 rounded-[7px] shadow-inner border border-opacity-30 border-white backdrop-blur-2xl relative group my-5" key={product._id}>
                    <div className="w-full h-[350px] overflow-hidden">
                      <Link href={`/products/${product.product_category && JSON.parse(product.product_category).product_cat_slug}/${product.product_category && JSON.parse(product.product_subcategory).product_cat_slug}/${product.product_category && product.product_viscosity.toLowerCase().replace(/\s+/g, "-")}`} className="w-full h-full">
                        {product.product_image&&
                        <Image
                          src={product.product_image}
                          width={180}
                          height={350}
                          alt="product image"
                          className="max-w-full w-full object-cover"
                          priority
                        />} 
                      </Link>
                    </div>
                    <Link href={`/products/${product.product_category && JSON.parse(product.product_category).product_cat_slug}/${product.product_category && JSON.parse(product.product_subcategory).product_cat_slug}/${product.product_category && product.product_viscosity.toLowerCase().replace(/\s+/g, "-")}`} className="w-full p-4 flex flex-col justify-end absolute top-0 left-0 bg-black bg-opacity-70 h-full transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <div>
                        <h1 className="text-white font-campton-semibold text-2xl text-center">
                          {product.product_name}
                        </h1>
                      </div>
                      <button
                        href={`/products/${product.product_category && JSON.parse(product.product_category).product_cat_slug}/${product.product_category && JSON.parse(product.product_subcategory).product_cat_slug}/${product.product_category && product.product_viscosity.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex text-neutral-900 items-center justify-center font-campton-medium uppercase tracking-[0.08em] transition-colors focus:outline-none rounded-sm bg-amc-primary hover:bg-orange-400 focus-visible:outline-primary-500 px-5 text-sm shadow-[0px_0px_20px_rgba(255,164,0,0.24)] py-2 mt-5"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* <div className="container mx-auto my-16 sm:px-4 md:px-4">
        <h2>View All products</h2>
        <div className="flex gap-6 sm:flex-col md:flex-col">
          <div className="basis-1/4">
            <div className="bg-white bg-opacity-5 rounded-[7px] shadow-inner border border-opacity-30 border-white backdrop-blur-2xl">
              <Image
                src="/images/Mercury_by_Studio_Abstract.png"
                alt="Mercury_by_Studio_Abstract"
                width={350}
                height={220}
                className="w-full"
              />
              <div className="pt-10 py-5 px-10">
                <h3 className="text-5xl text-white font-campton-bold">
                  VELOX Engine oil
                </h3>
                <div className="flex items-start justify-end w-full gap-5 mt-8">
                  <p className="text-white font-campton-medium text-sm">
                    for more info
                  </p>
                  <div className="mr-[-8%] md:mr-[-4%]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M3.06066 0.93934C2.47487 0.353553 1.52513 0.353553 0.93934 0.93934C0.353553 1.52513 0.353553 2.47487 0.93934 3.06066L3.06066 0.93934ZM24 25.5C24.8284 25.5 25.5 24.8284 25.5 24L25.5 10.5C25.5 9.67157 24.8284 9 24 9C23.1716 9 22.5 9.67157 22.5 10.5V22.5H10.5C9.67157 22.5 9 23.1716 9 24C9 24.8284 9.67157 25.5 10.5 25.5L24 25.5ZM0.93934 3.06066L22.9393 25.0607L25.0607 22.9393L3.06066 0.93934L0.93934 3.06066Z"
                        fill="#FFA400"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/4">
            <div className="bg-white bg-opacity-5 rounded-[7px] shadow-inner border border-opacity-30 border-white backdrop-blur-2xl">
              <div className="flex items-center justify-end w-full p-3">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 71 80"
                  className="h-11 w-10"
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

              <div className="p-9 w-full sm:p-6">
                <div className="flex w-full gap-9 sm:flex-col-reverse">
                  <div className="basis-2/3">
                    <h2 className="text-amber-500 text-5xl font-campton-normal leading-[60px] mb-3">
                      <div className="font-campton-bold font-bold">VELOX </div>
                      Engine oil
                    </h2>
                    <p className="text-white font-campton-medium text-xs">
                      Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat.
                      <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit{" "}
                    </p>
                  </div>
                  <div className="basis-1/3">
                    <Image
                      src="/images/product-image.png"
                      alt="VELOX Engine oil"
                      width={240}
                      height={200}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="bg-zinc-300 rounded mt-10">
                  <div className="flex p-2 text-center">
                    <span className="basis-1/4 text-black text-xl font-campton-bold border-r-2 border-black sm:text-sm">
                      Titanium
                    </span>
                    <span className="basis-1/4 text-black text-xl font-campton-normal border-r-2 border-black sm:text-sm">
                      Platinum
                    </span>
                    <span className="basis-1/4 text-black text-xl font-campton-normal border-r-2 border-black sm:text-sm">
                      Gold
                    </span>
                    <span className="basis-1/4 text-black text-xl font-campton-normal sm:text-sm">
                      Silver
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex gap-2 mt-3">
                    <div className="w-4 h-4 relative bg-white bg-opacity-5 shadow-inner border border-white border-opacity-40 backdrop-blur-[28px] mt-1"></div>
                    <div className="">
                      <span className="text-white text-sm font-campton-normal">
                        SAE 0W - 20
                        <br />
                        API <b>SP,</b> ACEA <b>A3A</b>
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <div className="w-4 h-4 relative bg-white bg-opacity-5 shadow-inner border border-white border-opacity-40 backdrop-blur-[28px] mt-1"></div>
                    <div className="">
                      <span className="text-white text-sm font-campton-normal">
                        SAE 0W - 20
                        <br />
                        API <b>SP,</b> ACEA <b>A3A</b>
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <div className="w-4 h-4 relative bg-white bg-opacity-5 shadow-inner border border-white border-opacity-40 backdrop-blur-[28px] mt-1"></div>
                    <div className="">
                      <span className="text-white text-sm font-campton-normal">
                        SAE 0W - 20
                        <br />
                        API <b>SP,</b> ACEA <b>A3A</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </HomeLayout>
  );
}
