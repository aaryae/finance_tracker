import { Activity, ArrowLeft, BarChart2, CastIcon, Magnet } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({
  navstate,
  setNavstate,
}: {
  navstate: boolean;
  setNavstate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState("Analytics");

  return (
    <>
      {navstate && (
        <div
          className="fixed inset-0 bg-[#0000007a] bg-opacity-50 z-20 md:hidden"
          onClick={() => setNavstate(false)}
        />
      )}

      <div
        className={`md:ml-[5.2rem] bg-[#262626] h-screen fixed md:w-64 w-48 p-7 border-r border-[#ffffff27] transition-all duration-300 ease-in-out z-30 ${
          navstate ? "left-0" : "left-[-200%]"
        }`}
      >
        <div className="md:text-2xl text-xl text-white cursor-pointer flex justify-between">
          <h1>Dashboard</h1>
          <div
            className="rounded-full bg-[#ffffff1a] p-2"
            onClick={() => setNavstate(!navstate)}
          >
            <ArrowLeft size={19} strokeWidth={0.5} absoluteStrokeWidth />
          </div>
        </div>
        <br />
        <nav className="flex flex-col gap-7 mt-3">
          <Link
            to="/"
            onClick={() => setActive("Analytics")}
            className={`flex items-center space-x-2 ${
              active === "Analytics"
                ? "text-white font-semibold"
                : "text-gray-300"
            } hover:text-white`}
          >
            <Activity size={20} /> <span>Analytics</span>
          </Link>
          <Link
            to="/income"
            onClick={() => setActive("Income")}
            className={`flex items-center space-x-2 ${
              active === "Income" ? "text-white font-semibold" : "text-gray-300"
            } hover:text-white`}
          >
            <CastIcon size={20} /> <span>Income</span>
          </Link>
          <Link
            to="/expenditure"
            onClick={() => setActive("Expenditure")}
            className={`flex items-center space-x-2 ${
              active === "Expenditure"
                ? "text-white font-semibold"
                : "text-gray-300"
            } hover:text-white`}
          >
            <BarChart2 size={20} /> <span>Expenditure</span>
          </Link>
          <Link
            to="/userprofile"
            onClick={() => setActive("UserProfile")}
            className={`flex items-center space-x-2 ${
              active === "UserProfile"
                ? "text-white font-semibold"
                : "text-gray-300"
            } hover:text-white`}
          >
            <Magnet size={20} /> <span>UserProfile</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
