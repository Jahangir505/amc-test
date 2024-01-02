import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="bg-amber-500 place-items-center grid h-full w-full gap-4 absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
      <div className="bg-amber-300 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl" />
      <div className="bg-amber-100 w-32 h-32 absolute animate-ping rounded-full shadow-xl" />
      <div className="bg-zinc-800 bg-opacity-0  w-24 h-24 absolute animate-pulse rounded-full shadow-xl" />
      <Image src="/images/logo.svg" alt="logo" width={60} height={40} />
    </div>
  );
}
