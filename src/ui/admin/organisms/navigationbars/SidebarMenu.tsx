import { LayoutDashboard, LogOut, Table } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SidebarMenu = ({
  navstate,
  setNavstate,
}: {
  navstate: boolean;
  setNavstate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLoggedIn");
    // Optionally, navigate to the login page
    navigate("/login");
  };

  return (
    <>
      {navstate && (
        <div
          className="fixed inset-0 bg-[#0000007a] bg-opacity-50 z-20 md:hidden"
          onClick={() => setNavstate(false)}
        />
      )}

      <div
        className={`md:ml-[5.2rem] bg-[#262626] h-screen fixed md:w-64 w-48 p-7 border-r border-[#ffffff27] transition-all duration-300 ease-in-out z-30 ${navstate ? "left-0" : "left-[-200%]"
          }`}
      >

        <br />
        <nav className="flex flex-col gap-7 mt-10">
          <Link
            to="/admin"
            onClick={() => setActive("Dashboard")}
            className={`flex items-center space-x-2 ${active === "Dashboard"
              ? "text-white font-semibold"
              : "text-gray-300"
              } hover:text-white`}
          >
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/manage-admin"
            onClick={() => setActive("Manage User")}
            className={`flex items-center space-x-2 ${active === "Income" ? "text-white font-semibold" : "text-gray-300"
              } hover:text-white`}
          >
            <Table size={20} /> <span>Manage User</span>
          </Link>
          <button
            onClick={() => {
              setActive("Logout");
              handleLogout();
            }}
            className={`flex items-center space-x-2 ${active === "Logout" ? "text-white font-semibold" : "text-gray-300"
              } hover:text-white`}
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>

        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
