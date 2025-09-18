import React from "react";

import Footer from "@/Components/Footer";
import Navigation from "@/Components/Navigation";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
