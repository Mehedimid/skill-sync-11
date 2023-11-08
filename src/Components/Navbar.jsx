import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.png";
import logo11 from "../assets/logo11.png";
import { useState } from "react";
function Navbar(props) {
  const [user, setUser] = useState(false);

  const navlinks2 = (
    <>
      <li>
        <NavLink to="my-services"> My Services </NavLink>{" "}
      </li>
      <li>
        <NavLink to="add-services"> Add Services </NavLink>{" "}
      </li>
      <li>
        <NavLink to="my-schedules"> My Schedules </NavLink>{" "}
      </li>
    </>
  );

  // text-[#86C232]

  return (
    <>
      <div className="lg:hidden"></div>
      <div className="  navbar  text-[#86C232] text-base font-semibold  w-11/12 mx-auto py-5 ">
        {/* web logo  */}
        <div className="navbar-start ">
          <div>
            <Link
              to="/"
              className="text-xl font-bold flex justify-center items-center">
              <img src={logo11} className="w-12 h-12" />
              SkillSync
            </Link>
          </div>

          {/*only for mobile start  */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/all-services">Services </NavLink>
              </li>
              {}
              <li className="dropdown dropdown-hover">
                <label tabIndex={0} className=" m-1">
                  Dashboard
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  {navlinks2}
                </ul>
              </li>
            </ul>
          </div>
          {/*  -------ENDS mobile ENDs ------ */}
        </div>

        <div className="navbar-end ">
          <ul className="hidden lg:flex gap-4 justify-center items-center border-r-2 mr-6 border-gray-400">
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/all-services">Services </NavLink>
            </li>
            <li className="dropdown dropdown-hover">
              <label tabIndex={0} className=" m-1">
                Dashboard
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {navlinks2}
              </ul>
            </li>
          </ul>
          <div>
            {user ? (
              <div className="flex justify-center items-center gap-1 text-white">
                <h2>Mehedi Hasan</h2>
                <img src={profile} className="h-12 w-12 rounded-full" />
              </div>
            ) : (
              <NavLink to="/login" className="text-[#86C232] ">
                Log In{" "}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
