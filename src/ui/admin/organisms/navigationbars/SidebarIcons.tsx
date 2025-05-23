import { LayoutDashboard, LogOut, Table } from "lucide-react";

const SidebarIcons = ({
  navstate,
  setNavstate,
}: {
  navstate: boolean;
  setNavstate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="h-screen fixed w-fit px-7 py-6 bg-[#262626] text-white hidden md:block border-r border-[#ffffff27] z-40"
      onClick={() => setNavstate(!navstate)}
    >
      <div className="text-3xl font-extrabold border-0 border-t-2 border-b-2 cursor-pointer">
        Fi
      </div>
      <br />
      <div className="flex flex-col gap-10 py-1">
        <LayoutDashboard size={24} className="cursor-pointer" />
        <Table size={24} className="cursor-pointer" />
        <LogOut size={24} className="cursor-pointer" />
        {/* <ShoppingCart size={24} className="cursor-pointer" />
        <Briefcase size={24} className="cursor-pointer" />
        <BarChart2 size={24} className="cursor-pointer" />
        <Activity size={24} className="cursor-pointer" /> */}
      </div>
    </div>
  );
};

export default SidebarIcons;
