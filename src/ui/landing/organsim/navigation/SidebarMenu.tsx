import { Activity, ArrowLeft, BarChart2, CastIcon, Magnet } from "lucide-react";

const SidebarMenu = ({
  navstate,
  setNavstate,
}: {
  navstate: boolean;
  setNavstate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
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
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <Activity size={20} /> <span>Analytics</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <CastIcon size={20} /> <span>Income</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <BarChart2 size={20} /> <span>Expenditure</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <Magnet size={20} /> <span>UserProfile</span>
        </a>
      </nav>
    </div>
  );
};

export default SidebarMenu;
