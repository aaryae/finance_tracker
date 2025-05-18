import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../organsim/Footer";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  const [navstate, setNavstate] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Navbar navstate={navstate} setNavstate={setNavstate} />
      <div
        className={`px-4 pt-24 transition-all duration-300 ease-in-out ${navstate ? " md:pl-80" : "md:pl-20"
          }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LandingTemplate;
