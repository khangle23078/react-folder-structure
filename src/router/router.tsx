import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Home from "../pages/User/Home/Home";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            index: true,
            path: '/',
            element: <Home />
         },
      ]
   },
   {
      path: 'admin',
      element: <AdminLayout />,
      children: [

      ]
   }
])
