import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../organsim/Footer";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  const [navstate, setNavstate] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full ">
      <Navbar navstate={navstate} setNavstate={setNavstate} />
      <div
        className={` pt-24 transition-all duration-300 ease-in-out ${
          navstate ? " md:pl-[21rem]" : "md:pl-20"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingTemplate;
