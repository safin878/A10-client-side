import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:h-[50px] h-16"></div>

      <div className="container mx-auto  ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
