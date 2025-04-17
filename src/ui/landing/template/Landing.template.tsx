import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  const [navstate, setNavstate] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Navbar navstate={navstate} setNavstate={setNavstate} />
      <div
        className={`pt-24 transition-all duration-300 ease-in-out ${
          navstate ? "pl-96" : "pl-28"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default LandingTemplate;
