import Layout from "@/layouts/Layout";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
  
]);
