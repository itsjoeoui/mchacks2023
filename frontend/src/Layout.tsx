import React from "react";
import Navbar from "./components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main className="px-8">{children}</main>
    </div>
  );
}
