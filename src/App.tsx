import Login from "@ui/landing/organsim/auth/Login";
import Register from "@ui/landing/organsim/auth/Register";
import ExpensePage from "@ui/landing/page/ExpensePage";
import IncomePage from "@ui/landing/page/IncomePage";
import LandingPage from "@ui/landing/page/LandingPage";
import LandingTemplate from "@ui/landing/template/Landing.template";
// import ProtectedRoute from "@ui/common/ProtectedRoute"; // ✅ Import this

import AdminDashboard from "@ui/admin/pages/AdminDashboard";
import { default as AdminTable } from "@ui/admin/pages/AdminTable";
import AdminTemplate from "@ui/admin/template/AdminTemplate";
import ForgotPassword from "@ui/landing/organsim/auth/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      // element: <ProtectedRoute />, // ✅ All routes inside here are protected
      children: [
        {
          path: "/",
          element: <LandingTemplate />,
          children: [
            { index: true, element: <LandingPage /> },
            { path: "income", element: <IncomePage /> },
            { path: "expenditure", element: <ExpensePage /> },
            // { path: "admin", element: <AdminPage /> },
          ],
        },
        {
          path: "admin",
          element: <AdminTemplate />,
          children: [
            { index: true, element: <AdminDashboard /> },
            { path: 'manage-admin', element: <AdminTable /> },
            // { index: true, element: <AdminDashboard /> },
            // { path: 'manage-admin', element: <ManageAdmin /> },
            // { path: 'changepassword', element: <ChangePassword /> },

          ],
        },
      ],
    },
    { path: "/register", element: <Register /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
