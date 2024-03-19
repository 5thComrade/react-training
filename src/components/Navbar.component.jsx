import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-8 py-4 flex justify-between items-center">
      <h1 className="text-3xl">
        <NavLink to="/">Mailbuddy</NavLink>
      </h1>

      <ul className="flex justify-between items-center gap-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/singleEmail"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Single Email
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bulkEmail"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Bulk Email
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
