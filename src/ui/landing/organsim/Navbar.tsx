import {
  Activity,
  AlignLeft,
  ArrowLeft,
  BarChart2,
  Briefcase,
  Mail,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [navstate, setNavstate] = useState(false);
  const [messagestate, setMessagestate] = useState(false);
  const [profilestate, setProfilestate] = useState(false);

  return (
    <>
      <div className="flex">
        {/* First Sidebar */}
        <div
          className="h-screen fixed w-fit px-7 py-6 bg-[#262626] text-white hidden md:block  border-r border-[#ffffff27] z-10"
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
          <Mail
            className="relative cursor-pointer"
            color="#ffffff"
            strokeWidth={0.5}
            absoluteStrokeWidth
            onClick={() => {
              setMessagestate(!messagestate);
              setProfilestate(false);
            }}
          />
          <div
            className={`absolute  bg-[#171717] border-1 border-[#ffffff1c] rounded-xl h-64 p-5 text-[#ffffffb2] flex flex-col justify-between right-16 top-11 transition-all ease-in-out ${messagestate ? "flex" : "hidden"} `}
          >
            <div className="flex justify-between p-2 border-b-1 border-[#ffffffb2]">
              <h1 className="text-2xl">Message</h1>
              <X
                color="#880808"
                onClick={() => {
                  setMessagestate(!messagestate);
                  setProfilestate(false);
                }}
              />
            </div>

            <h3 className="text-md text-[#ffffffb2]">
              You don't have message at the moment
            </h3>

            <div className="w-full text-center text-blue-800 cursor-pointer hover:underline">
              View all
            </div>
          </div>
          <div
            className="p-3 rounded-full bg-[#188502] relative cursor-pointer"
            onClick={() => {
              setProfilestate(!profilestate);
              setMessagestate(false);
            }}
          ></div>
          <div
            className={`absolute  bg-[#171717] border-1 border-[#ffffff1c] rounded-xl w-48 p-5 text-[#ffffffb2] flex-col right-10 top-11 transition-all ease-in-out ${profilestate ? "flex" : "hidden"} `}
          >
            <div className="flex  justify-between py-2 border-b-1 border-[#ffffffb2]">
              <div className="text-md tracking-wide ">Your Profile</div>
              <X
                color="#880808"
                onClick={() => {
                  setProfilestate(!profilestate);
                  setMessagestate(false);
                }}
              />
            </div>

            <div className="text-md text-[#ffffffb2]">
              <nav className="flex flex-col gap-3 mt-3">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
