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
        // { path: '/about', element: <About /> },
        // { path: '/womenproducts', element: <WomenProduct /> },
        // { path: '/menproducts', element: <MenProduct /> },
        // { path: '/products', element: <AllProduct /> },
        // { path: '/products/:productId', element: <ProductDetails /> },
        // { path: '/login', element: <Login /> },
        // { path: '/register', element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
