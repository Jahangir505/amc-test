"use client"
import "./globals.css";
import Head from "./head";
import { SessionProvider } from "next-auth/react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className="bg-black font-campton-light">
      <SessionProvider>
        {children}
      </SessionProvider>
      </body>
    </html>
  );
}
