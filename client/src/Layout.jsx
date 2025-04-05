import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
