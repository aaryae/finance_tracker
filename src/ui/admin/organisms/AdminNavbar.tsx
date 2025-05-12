import SidebarIcons from "./navigationbars/SidebarIcons";
import SidebarMenu from "./navigationbars/SidebarMenu";
import Topbar from "./navigationbars/Topbar";

const AdminNavbar = ({
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

export default AdminNavbar;
