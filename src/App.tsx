import Login from "@ui/landing/organsim/auth/Login";
import Register from "@ui/landing/organsim/auth/Register";
import Contact from "@ui/landing/organsim/section/Contact";
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
        // { path: '/womenproducts', element: <WomenProduct /> },
        // { path: '/menproducts', element: <MenProduct /> },
        // { path: '/products', element: <AllProduct /> },
        // { path: '/products/:productId', element: <ProductDetails /> },
        { path: "/register", element: <Register /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/graph", element: <Contact /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
