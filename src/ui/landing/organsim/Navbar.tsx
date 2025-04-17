import SidebarIcons from "./navigation/SidebarIcons";
import SidebarMenu from "./navigation/SidebarMenu";
import Topbar from "./navigation/Topbar";

const Navbar = ({
  navstate,
  setNavstate,
}: {
  navstate: boolean;
  setNavstate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex">
        <SidebarIcons navstate={navstate} setNavstate={setNavstate} />
        <SidebarMenu navstate={navstate} setNavstate={setNavstate} />
      </div>
      <Topbar setNavstate={setNavstate} />
    </>
  );
};

export default Navbar;
