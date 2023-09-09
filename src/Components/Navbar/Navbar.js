import React from "react";
import logo from "./../../Assets/spy.png";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../Configs/routeConfigs";
import { useSiteData } from "../../Contexts/useSiteData";
const Navbar = () => {
  const { isDark, setIsDark } = useSiteData();
  return (
    <div className="navbar bg-dark-f text-dark">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark-f text-dark rounded-box w-52"
            >
              {routes.map((route, i) => (
                <li className="mx-2" key={i}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "border-success border text-dark" : "text-dark"
                    }
                    to={route.link}
                  >
                    {route.title}
                  </NavLink>
                </li>
              ))}
              <li className="mx-2">
                <a
                  href="https://github.com/Shariar-Hasan/Dork-IT"
                  target="_blank"
                >
                  <i class="fa fa-star" aria-hidden="true"></i>
                  Star my Work
                </a>
              </li>
              <li className="mx-2  flex align-center">
                <span
                  className="realtive w-10 h-10 border-2 broder-gray-400 px-3 text-dark flex justify-center items-center "
                  onClick={() => setIsDark((prev) => !prev)}
                >
                  {isDark ? (
                    <i className="fa fa-sun" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-moon" aria-hidden="true"></i>
                  )}
                </span>
              </li>
            </ul>
          </div>

          <Link to={"/"}>
            <span className="btn btn-ghost normal-case text-xl">
              <img className="w-10" src={logo} alt={"Dork It Logo"} />
              <span className="text-mono font-bold">Dork IT</span>
            </span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {routes.map((route, i) => (
              <li className="mx-2" key={i}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? "border-success border text-dark" : "text-dark"
                  }
                  to={route.link}
                >
                  {route.icon}
                  {route.title}
                </NavLink>
              </li>
            ))}
            <li className="mx-2">
              <a
                href="https://github.com/Shariar-Hasan/Dork-IT"
                target="_blank"
              >
                <i class="fa fa-star" aria-hidden="true"></i>
                Star my Work
              </a>
            </li>
            <li className="mx-2  flex align-center">
              <span
                className="realtive w-10 h-10 border-2 broder-gray-400 px-3 text-dark flex justify-center items-center "
                onClick={() => setIsDark((prev) => !prev)}
              >
                {isDark ? (
                  <i className="fa fa-sun" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-moon" aria-hidden="true"></i>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
