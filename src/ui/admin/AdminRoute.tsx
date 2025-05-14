import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");

    // If the user is an admin but tries to access the user page, redirect to /admin
    if (role === "ADMIN") {
        const currentPath = window.location.pathname;
        if (currentPath === "/") {
            // If admin tries to access user route "/", redirect to admin dashboard
            return <Navigate to="/admin" replace />;
        }
    }

    return token && role === "ADMIN" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
