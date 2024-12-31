import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Banner from "../pages/Shared/Banner/Banner";

const Main = () => {
  return (
  <div>
    <Navbar />
  <Outlet></Outlet>;
    <Footer />
  </div>
  )

};

export default Main;
