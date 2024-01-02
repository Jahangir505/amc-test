import HomeLayout from '@/shared/layouts/home-layout/HomeLayout'
import React from 'react'
import Image from "next/image";
import SwiperSlider from "@/components/swiperslider/SwiperSlider";

export default function About() {
  return (
<HomeLayout>
<div className="w-full">
      <div className="container mx-auto sm:px-4 md:px-4">
        <div className="text-white text-9xl sm:text-5xl md:text-7xl font-medium font-campton-medium uppercase pt-16 pb-10">
          <span>Genral </span>
          <span className="text-amber-500">AMCO</span>
        </div>

        <div className="flex flex-wrap justify-between items-end">
          <div className="text-white text-[27px] font-campton-normal sm:text-2xl">
            Our <span className="font-bold">Community</span>, Experiences,
            <br /> and Products.
          </div>

          <div className="flex gap-2 items-center">
            <div className="text-amber-500 text-lg font-normal font-campton-normal leading-8">
              Watch the film
            </div>

            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g id="Group 193">
                  <circle
                    id="Ellipse 9"
                    cx="14"
                    cy="14"
                    r="13.5"
                    stroke="#FFA400"
                  />
                  <path
                    id="Polygon 1"
                    d="M18 14L12 18.3301L12 9.66987L18 14Z"
                    fill="#FFA400"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full py-5">
          <Image
            src="/images/image-placeholder.png"
            className="w-full"
            width={1650}
            height={450}
            alt="placeholder Image"
          />
        </div>
      </div>

      <div className="bg-cover bg-[url('/images/bg-liqui.png')] bg-right-top pb-64 pt-8 sm:pb-12 md:pb-28">
        <div className="container mx-auto sm:px-4 md:px-4">
          <div className="flex flex-wrap items-center sm:flex-col-reverse md:flex-col-reverse md:gap-8">
            <div className="text-zinc-200 text-lg font-medium font-campton-medium w-2/5 sm:w-full md:w-full">
              <p className="w-4/5 sm:w-full sm:mt-5 md:w-full">
                Commerce is a diverse challenging pursuit which requires a
                different and creative approach to overcome the problems one
                encounters. Now, as in the past, it is a matter of considerable
                importance to ascertain with correctness what are the
                fundamental ingredients needed to succeed.
              </p>
            </div>

            <div className="flex w-3/5 gap-10 sm:w-full md:w-full">
              <div className="w-full">
                <Image
                  src="/images/image-placeholder1-3.png"
                  width={430}
                  height={360}
                  className="w-full"
                  alt="placeholder Image"
                />
              </div>

              <div className="w-full">
                <Image
                  src="/images/image-placeholder1-3.png"
                  width={430}
                  height={360}
                  className="w-full"
                  alt="placeholder Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-4 sm:text-center md:px-4">
        <h2 className=" text-white text-[44px] font-semibold font-campton-semibold sm:mb-5">
          Productivity
        </h2>
        <div className="w-full flex flex-col items-end sm:items-center">
          <div className="flex gap-2 items-center">
            <div className="text-amber-500 text-lg font-normal font-campton-normal leading-8">
              Watch the film
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
              >
                <g id="Group 193">
                  <circle
                    id="Ellipse 9"
                    cx="14"
                    cy="14"
                    r="13.5"
                    stroke="#FFA400"
                  />
                  <path
                    id="Polygon 1"
                    d="M18 14L12 18.3301L12 9.66987L18 14Z"
                    fill="#FFA400"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 pb-10 sm:pt-2">
          <Image
            src="/images/footage-placeholder.png"
            width={1640}
            height={600}
            alt="footage placeholder"
            className="w-full"
          />
        </div>
      </div>

      <div className="container mx-auto sm:px-4 md:px-4">
        <div className="flex gap-7 pb-24 sm:flex-col">
          <div className="w-1/3 sm:w-full mt-12 pr-12">
            <p className="text-zinc-200 font-campton-medium text-[28px] leading-[36px]">
            Commerce is a diverse challenging pursuit which requires a different and creative approach to overcome the problems one encounters. 
  
            </p>
          </div>
          <div className="w-2/3 sm:w-full">
            <h1 className="text-4xl text-center text-white">
              <SwiperSlider/>
            </h1>
          </div>
        </div>

        <h2 className=" text-white text-[44px] sm:text-4xl sm:text-center">
          <span className="font-semibold font-campton-semibold">Unique </span>
          <span className="font-medium font-campton-medium">bottle shape</span>
        </h2>

        <div className="flex gap-48 w-10/12 mx-auto py-11 sm:w-full sm:flex-col sm:gap-5 md:gap-8 md:w-full">
          <div className="rounded-[29px] border-2 border-white border-opacity-30 w-1/2 sm:w-full px-7">
            <Image
              src="/images/bottle.png"
              width={875}
              height={1044}
              className="w-full"
              alt="Bottle"
            />
          </div>
          <div className="w-1/2 flex items-center sm:w-full">
            <p className="text-neutral-400 text-[28px] font-campton-normal sm:text-2xl leading-10">
              We were keen to provide a{" "}
              <span className="font-campton-semibold font-bold text-white">
                Unique product
              </span>{" "}
              in all aspects and characteristics, so we chose the{" "}
              <span className="font-campton-semibold font-bold text-white">
                Dark charcoal
              </span>{" "}
              color to reflect the industrial strength of our company. And also
              to be consistent with the label that explains the quality of the
              oil through a design harmonious with the{" "}
              <span className="font-campton-semibold font-bold text-white">
                AMCO logo
              </span>{" "}
              in orange
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mt-20 sm:mt-6">
          <h2 className="text-white text-[52px] leading-[56px] font-semibold font-campton-semibold sm:text-4xl">
            Explore the full story.
          </h2>
        </div>
      </div>

      <div className="bg-[url('/images/bg-liqui-left.png')] text-center pb-[550px] bg-cover bg-center sm:pb-16 md:pb-48">
        <div className="container mx-auto sm:px-4">
          <h2 className="text-white text-5xl font-normal font-campton-normal pb-1 pt-28 sm:pt-6 sm:text-4xl md:pt-16">
            Vision and Mission
          </h2>
          <p className="w-9/12 mx-auto text-zinc-200 text-lg font-medium font-campton-medium sm:w-full">
            <br />
            Whilst fierce competition in the global lubricants market makes such
            a task increasignly difficult. I look confidently to the future,
            assured by the capabilities that are available within AMCO. With the
            vision and enthusiasm which has brought us this far I cna see more
            exciting times ahead.
            <br />
            <br />
            Our custoners are our most important asset so I believe that it is
            our responsibility to ensure that we always meet the high standards
            which they set. With this as our philosophy AMCO has withstood the
            test of time.
          </p>
        </div>
      </div>

      <div className="container mx-auto sm:px-4 sm:text-center md:px-4">
        <h2 className="font-medium font-campton-medium text-[44px] text-white mb-10 sm:4xl">
          Our History
        </h2>
        <p className="text-zinc-200 text-lg font-medium font-campton-medium mb-8">
          Commerce is a diverse challenging pursuit which requires a different
          and creative approach to overcome the problems one encounters. Now, as
          in the past, it is a matter of considerable importance to ascertain
          with correctness what are the fundamental ingredients needed to
          succeed.
        </p>
        <div className="text-4xl bg-slate-600 text-white py-16 px-8 font-campton-semibold text-center">
          The part of our history section is under maintenance.
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/images/bg-after-our-history-abou-page.png"
          width={2048}
          height={1080}
          alt="Liquit"
          className="w-full"
        />
      </div>

      <div className="container mx-auto -mt-36 sm:px-4 sm:-mt-20 md:px-4">
        <div className="flex gap-11 sm:flex-col-reverse md:flex-col-reverse">
          <div className="w-3/5 sm:w-full md:w-full">
            <h2 className=" text-white text-[44px] font-campton-medium sm:text-center">
              Founder <br />
              Message
            </h2>

            <div className="text-zinc-200 text-lg font-campton-medium mt-28 sm:mt-4 sm:text-center md:mt-10">
              Commerce is a diverse challenging pursuit which requires a
              different and creative approach to overcome the problems one
              encounters. Now, as in the past, it is a matter of considerable
              importance to ascertain with correctness what are the fundamental
              ingredients needed to succeed.
              <br />
              Commerce is a diverse challenging pursuit which requires a
              different and creative approach to overcome the problems one
              encounters. Now, as in the past, it is a matter of considerable
              importance to ascertain with correctness what are the fundamental
              ingredients needed to succeed.
              <br />
              <br />
              Commerce is a diverse challenging pursuit which requires a
              different and creative approach to overcome the problems one
              encounters. Now, as in the past, it is a matter of considerable
              importance to ascertain with correctness what are the fundamental
              ingredients needed to succeed.
              <br />
              <br />
              Commerce is a diverse challenging pursuit which requires a
              different and creative approach to overcome the problems one
              encounters. Now, as in the past, it is a matter of considerable
              importance to ascertain with correctness what are the fundamental
              ingredients needed to succeed.
              <br />
            </div>

            <Image
              src="/images/signeture.png"
              alt="Signeture"
              width={190}
              height={131}
              className="mt-20 sm:mt-8 sm:text-center sm:block sm:mx-auto"
            />
          </div>
          <div className="w-2/5 sm:w-full md:w-full">
            <div className="w-full relative">
              <div className="w-full h-[550px] sm:h-[450px] p-10 relative bg-white flex flex-col items-start content-center bg-opacity-5 rounded-[10px] shadow-inner border border-white border-opacity-20 backdrop-blur-sm">
                <h2 className="text-center text-white text-sm absolute mx-10 left-0 bottom-16 font-campton-bold leading-relaxed px-9">
                  FULLY SYNTHETIC AUTOMOTIVE VELOX TITANIUM ENGINE OIL
                  <div className="text-center text-slate-500 text-xs font-bold font-campton-bold">
                    100mL to
                    <br />
                    1L
                  </div>
                </h2>
                <div className="w-[85%] sm:w-[80%] md:w-[90%] mx-10 left-0 bottom-5 h-0.5 absolute bg-slate-600 rounded-[10px]"></div>
                <div className="w-[72px] h-1 bottom-5 left-[15%] absolute bg-amber-500 rounded-[10px] shadow"></div>
                <div className="w-[38px] left-[18%] bottom-9 absolute text-center text-yellow-700 text-xs font-campton-bold">
                  2/8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-4 mt-28 md:px-4">
        <h2 className=" text-white text-[44px] font-campton-medium border-b-2 border-white border-opacity-60 pb-8 sm:text-4xl sm:text-center">
          AMCO’s Leadership
        </h2>
      </div>

      <div className="w-full bg-[url('/images/liquid-halp-bg.png')] bg-contain bg-left-top bg-no-repeat">
        <div className="container mx-auto sm:px-4 md:px-4">
          <div className="flex gap-20 mt-14 sm:flex-col sm:gap-12 md:gap-4">
            <div className="w-1/3 bg-gray-900 rounded-lg shadow-inner backdrop-blur-2xl sm:w-full">
              <Image
                src="/images/placeholder-image-box.png"
                className="w-full"
                alt="Ahmad Jamal Khalfan Howairb Almheiri"
                width={430}
                height={390}
              />
              <div className="pr-10 pb-5 pl-10 pt-10 md:px-5 md:py-6">
                <h3 className="text-lg font-campton-semibold text-white">
                  Ahmad Jamal Khalfan Howairb Almheiri
                </h3>
                <p className="text-base font-campton-normal text-white mt-3">
                  Co-Owner, <br />
                  Managing Director
                </p>
                <div className="flex content-between w-full mt-14">
                  <p className="text-sm text-white font-campton-normal flex-1">
                    Location
                  </p>
                  <p className="text-sm text-white font-campton-normal flex-1 text-right">
                    Dubai - UAE
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/3 bg-gray-900 rounded-lg shadow-inner backdrop-blur-2xl sm:w-full">
              <Image
                src="/images/placeholder-image-box.png"
                className="w-full"
                alt="Ghaith Ahmad Saif Alghaith Almarri"
                width={430}
                height={390}
              />
              <div className="pr-10 pb-5 pl-10 pt-10 md:px-5 md:py-6">
                <h3 className="text-lg font-campton-semibold text-white">
                  Ghaith Ahmad Saif Alghaith Almarri
                </h3>
                <p className="text-base font-campton-normal text-white mt-3">
                  Co-Owner, <br />
                  Managing Director
                </p>
                <div className="flex content-between w-full mt-14">
                  <p className="text-sm text-white font-campton-normal flex-1">
                    Location
                  </p>
                  <p className="text-sm text-white font-campton-normal flex-1 text-right">
                    Dubai - UAE
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/3 bg-gray-900 rounded-lg shadow-inner backdrop-blur-2xl sm:w-full">
              <Image
                src="/images/placeholder-image-box.png"
                className="w-full"
                alt="Ahmad Jamal Khalfan Howairb Almheiri"
                width={430}
                height={390}
              />
              <div className="pr-10 pb-5 pl-10 pt-10 md:px-5 md:py-6">
                <h3 className="text-lg font-campton-semibold text-white">
                  Ahmad Jamal Khalfan Howairb Almheiri
                </h3>
                <p className="text-base font-campton-normal text-white mt-3">
                  Co-Owner, <br />
                  Managing Director
                </p>
                <div className="flex content-between w-full mt-14">
                  <p className="text-sm text-white font-campton-normal flex-1">
                    Location
                  </p>
                  <p className="text-sm text-white font-campton-normal flex-1 text-right">
                    Dubai - UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-20">
            <a
              href="#"
              className="text-lg text-white font-campton-normal text-center w-fit mx-auto block bg-zinc-800 rounded-full px-7 py-3"
            >
              <span>More members stands for</span>{" "}
              <span className="ml-4 bg-amber-500 rounded-full text-center text-xl px-[10px] py-[3px]">
                +
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:px-4 md:px-4">
        <div className="w-full mt-20 mb-32 sm:mb-14">
          <Image
            src="/images/team-image-front-of-the-factory.png"
            width={1490}
            height={550}
            className="w-full"
            alt="team-image-front-of-the-factory"
          />
        </div>
      </div>
    </div>
</HomeLayout>
  )
}
