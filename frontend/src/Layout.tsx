import React from "react";
import Menu from "./components/Menu";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Menu />
      <main className="px-8">{children}</main>
    </div>
  );
}
