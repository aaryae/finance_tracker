import AdminRoute from "@ui/admin/AdminRoute"; // ✅ Make sure it's imported
import AdminDashboard from "@ui/admin/pages/AdminDashboard";
import AdminTable from "@ui/admin/pages/AdminTable";
import AdminTemplate from "@ui/admin/template/AdminTemplate";
import ProtectedRoute from "@ui/common/ProtectedRoute";
import ForgotPassword from "@ui/landing/organsim/auth/ForgotPassword";
import Login from "@ui/landing/organsim/auth/Login";
import Register from "@ui/landing/organsim/auth/Register";
import ExpensePage from "@ui/landing/page/ExpensePage";
import IncomePage from "@ui/landing/page/IncomePage";
import LandingPage from "@ui/landing/page/LandingPage";
import LandingTemplate from "@ui/landing/template/Landing.template";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <LandingTemplate />,
        children: [
          { index: true, element: <LandingPage /> },
          { path: "income", element: <IncomePage /> },
          { path: "expenditure", element: <ExpensePage /> },
        ],
      },
    ],
  },
  {
    element: <AdminRoute />, // ✅ Only admins can access this
    children: [
      {
        path: "/admin",
        element: <AdminTemplate />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "manage-admin", element: <AdminTable /> },
        ],
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/login", element: <Login /> },
]);
function App() {
  return <RouterProvider router={router} />
}


export default App
