import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Weather from "../pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
