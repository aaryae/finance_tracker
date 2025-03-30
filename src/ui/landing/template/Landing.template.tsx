import { Outlet } from "react-router-dom";
import Navbar from "../organsim/Navbar";

const LandingTemplate = () => {
  return (
    <div className="flex flex-col  h-screen  ">
      <div className="z-50">
        <Navbar />
      </div>
      <Outlet />

      {/* <Footer /> */}
    </div>
  );
};

export default LandingTemplate;
