import { Outlet } from "react-router-dom";
import { Navbar, Contact } from "../components";

const Layout = () => {
  return (
    <div className="relative z-0 bg-primary">
      {/* Common Navbar */}
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat fixed w-full z-10">
        <Navbar />
      </div>

      {/* Dynamic content */}
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for Navbar height */}
        <Outlet />
      </div>

      {/* Common Footer/Contact */}
      <Contact />
    </div>
  );
};

export default Layout;
