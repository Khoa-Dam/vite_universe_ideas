import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import Blockchain from "./pages/Blockchain";
    

const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path:"/Blockchain",
                element: <Blockchain/>
            }
        ]
    }
])

export function AppRouter() {
  return <RouterProvider router={router} />;
}