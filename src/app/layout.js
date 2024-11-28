import Header from "@/components/Header"; // Header bileşeni
import React from "react";
import "./globals.css"; // Global CSS
import Providers from "./Providers"; // Tema sağlayıcı

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
