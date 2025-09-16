import React, { ReactNode } from "react";
import HeaderComponent from "./header";
import FooterComponent from "./footer";

interface LayoutProps {
  children?: ReactNode;
  footerData?: any;
  headerData?: any;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <HeaderComponent />
      <div>{children}</div>
      <FooterComponent />
    </div>
  );
};
