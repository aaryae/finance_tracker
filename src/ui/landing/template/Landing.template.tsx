import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  const [navstate, setNavstate] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="z-50">
        <Navbar navstate={navstate} setNavstate={setNavstate} />
      </div>
      <div
        className={`p-4   transition-all duration-300 ease-in-out ${
          navstate ? "pl-96" : "pl-28"
        }`}
      >
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingTemplate;
