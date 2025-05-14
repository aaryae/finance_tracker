import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  return token && role === "USER" ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
