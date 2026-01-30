import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import {InstancePage, Layout , Login} from "@/pages";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element : <InstancePage/>
      },
      {
        path: "dashboard",
        element: <div>dashboard page</div>,
      },
      {
        path: "products",
        element: <div>products page</div>,
      },
      {
        path: "instances",
        element : <InstancePage/>
      },
      {
        path: "orders",
        element: <div>orders page</div>,
      },
      {
        path: "reports",
        element: <div>reports page</div>,
      },
      {
        path: "users",
        element: <div>users page</div>,
      },
      {
        path: "settings",
        element: <div>settings page</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};