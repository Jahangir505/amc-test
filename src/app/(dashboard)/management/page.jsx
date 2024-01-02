"use client"
import { useSearchParams, redirect, useRouter } from 'next/navigation'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const geSsearchData = searchParams.get('callbackUrl');

  useEffect(() => {
    if (session) {
      if(geSsearchData){
        router.push(geSsearchData);
      }
    }
  }, [session, router, geSsearchData]);

  useEffect(() => {
    if (session) {
        router.push("/dashboard");
    }
  }, [session, router,]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard"
      });

      if (data.error !== null) {
        setErrorMessage(data.error);
      } else {
        // Redirect to the base URL after successful login
        router.push(data.url);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred during sign-in.');
    }
  };
  
  return (
<section className="bg-black font-campton-medium">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <Image
        className="w-20"
        src="/images/logo.svg"
        alt="logo"
        width={70}
        height={45}
      />
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-md dark:bg-gray-800 dark:border-gray-700">
      <div className="sm:p-6 space-y-4 md:space-y-6 p-8">
        <h1 className="md:text-xl font-bold leading-tight tracking-tight text-gray-900 text-2xl dark:text-white mb-6">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p className="text-white text-lg font-campton-medium text-red-500">{errorMessage}</p>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-amber-500 hover:bg-amber-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 text-center"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

