import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import PrivateRouter from "./PrivateRouter";

const CommonRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default CommonRouter;
