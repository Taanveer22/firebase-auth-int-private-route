import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import PrivateRouter from "./PrivateRouter";
import Profile from "../components/Profile";

const CommonRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default CommonRouter;
