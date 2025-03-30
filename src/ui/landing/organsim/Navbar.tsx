import {
  Activity,
  AlignLeft,
  ArrowLeft,
  BarChart2,
  Briefcase,
  Mail,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [navstate, setNavstate] = useState(false);

  return (
    <>
      <div className="flex">
        {/* First Sidebar */}
        <div
          className="h-screen fixed w-fit p-7 bg-[#262626] text-white hidden md:block  border-r border-[#ffffff27] z-10"
          onClick={() => {
            setNavstate(!navstate);
          }}
        >
          <div className="text-3xl font-extrabold border-0 border-t-2 border-b-2 cursor-pointer">
            Fi
          </div>
          <br />
          <div className="flex flex-col gap-10 py-1">
            <ShoppingCart size={24} className="cursor-pointer" />
            <Briefcase size={24} className="cursor-pointer" />
            <BarChart2 size={24} className="cursor-pointer" />
            <Activity size={24} className="cursor-pointer" />
          </div>
        </div>
        {/* Second Sidebar */}
        <div
          className={`md:ml-20 bg-[#262626] h-screen fixed w-64 p-7  border-r border-[#ffffff27] transition-all duration-300 ease-in-out ${
            navstate ? "left-0 " : "left-[-100%]"
          } `}
        >
          <div className="text-2xl text-white cursor-pointer flex justify-between">
            <h1>Dashboard</h1>
            <div
              className="rounded-full bg-[#ffffff1a] p-2"
              onClick={() => {
                setNavstate(!navstate);
              }}
            >
              <ArrowLeft size={19} strokeWidth={0.5} absoluteStrokeWidth />
            </div>
          </div>
          <br />
          <nav className="flex flex-col gap-7 mt-3">
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <ShoppingCart size={20} /> <span>Ecommerce</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <Briefcase size={20} /> <span>Project</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <BarChart2 size={20} /> <span>Marketing</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-300 hover:text-white"
            >
              <Activity size={20} /> <span>Analytic</span>
            </a>
          </nav>
        </div>
      </div>
      {/* topbar */}
      <div className="flex justify-between py-5 w-full bg-[#262626] ">
        <div
          className={`md:ml-24 px-3 cursor-pointer`}
          onClick={() => {
            setNavstate(!navstate);
          }}
        >
          <AlignLeft color="#ffffff" strokeWidth={0.5} absoluteStrokeWidth />
        </div>
        <div className="flex gap-3  px-5">
          <Mail color="#ffffff" strokeWidth={0.5} absoluteStrokeWidth />
          <div className="p-3 rounded-full bg-[#188502]"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
