import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.component";

const Layout = () => {
  return (
    <main className="px-6 py-4 font-light">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
