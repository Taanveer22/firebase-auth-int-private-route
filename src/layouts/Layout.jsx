import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="my-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
