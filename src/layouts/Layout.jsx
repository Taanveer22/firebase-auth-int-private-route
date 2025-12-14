import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className="my-8 w-11/12 mx-auto min-h-[calc(100vh-180px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
