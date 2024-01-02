import Footer from "@/components/footer/Footer";
import TopHeader from "@/components/header/TopHeader";
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div>
      <TopHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
