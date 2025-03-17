import { Outlet } from "react-router-dom";
import Banner from "../organsim/Banner";
import Footer from "../organsim/Footer";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  return (
    <div className="flex flex-col justify-between h-screen  ">
      <div className="z-50">
        <Banner />
        <Navbar />
      </div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default LandingTemplate;
