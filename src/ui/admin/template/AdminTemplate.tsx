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
                {/* Message on small screens */}
                <div className=" md:hidden h-full flex items-center justify-center bg-[#ffeedc] text-[#5b3423] px-4 text-center">
                    <p className="text-lg font-semibold">
                        Please open this page on a PC or laptop for the best experience.
                    </p>
                </div>

                {/* Actual content only on medium and larger screens */}
                <div className="hidden md:block">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AdminTemplate;
