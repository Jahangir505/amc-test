"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({ children }) {
  const { data } = useSession();
  return (
    <div className="text-white flex">
      <div className="basis-1/5 bg-slate-800 min-h-screen">
        <aside className="p-8 flex flex-col gap-10">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={60}
              height={40}
              className="w-14"
            />
          </Link>
          <nav className="">
            <ul className="flex flex-col gap-4 text-xl font-campton-medium">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/products">Products</Link>
                <ul className="text-base ml-2 flex flex-col gap-4 mt-2 font-campton-normal">
                  <li>
                    <Link href="/dashboard/products/categories">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/products/brand">
                      Brand
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/products/class">
                      Class
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/products/size">
                      Size
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/dashboard/posts">Posts</Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
      <main className="basis-4/5">
        <header className="bg-slate-800 p-5 flex justify-end">
          <div className="">
            {data?.user ? (
              <>
                <div className="flex items-center gap-4">
                  <span className="hidden text-right lg:block">
                    <span className="block text-lg font-campton-medium text-white">
                      Hi, {data?.user?.name}
                    </span>
                    <span className="block text-base font-campton-normal">
                      <div onClick={() => signOut()} className="cursor-pointer">
                        Log Out
                      </div>
                    </span>
                  </span>

                  <span className="h-12 w-12 rounded-full">
                    <Image
                      src="/images/user-icon.png"
                      width={50}
                      height={50}
                      alt="profile icon"
                    />
                  </span>
                </div>
              </>
            ) : (
              <Link className="nav-link" href="/management">
                Login
              </Link>
            )}
          </div>
        </header>
        {children}
        <ToastContainer/>
      </main>
    </div>
  );
}
