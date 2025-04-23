import Login from "@ui/landing/organsim/auth/Login";
import Register from "@ui/landing/organsim/auth/Register";
import ExpensePage from "@ui/landing/page/ExpensePage";
import IncomePage from "@ui/landing/page/IncomePage";
import LandingPage from "@ui/landing/page/LandingPage";
import LandingTemplate from "@ui/landing/template/Landing.template";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingTemplate />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "/income", element: <IncomePage /> },
        { path: "/expenditure", element: <ExpensePage /> },
      ],
    },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
