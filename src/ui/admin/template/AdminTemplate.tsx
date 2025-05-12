import Footer from "@ui/landing/organsim/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../organisms/AdminNavbar";

const AdminTemplate = () => {
    const [navstate, setNavstate] = useState(true);

    return (
        <div className="flex flex-col h-screen">
            <AdminNavbar navstate={navstate} setNavstate={setNavstate} />

            <div
                className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${navstate ? "md:pl-80" : "md:pl-20"
                    } pt-24`}
            >
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default AdminTemplate;
