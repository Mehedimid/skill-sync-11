import { Link, NavLink } from "react-router-dom";
import logo11 from "../assets/logo11.png";
import profilesvg from "../assets/profile.svg";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider";
import { FaAlignJustify } from "react-icons/fa";

function Navbar(props) {
  const { logOut, user } = useContext(authContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {
        // logged out
      })
      .catch((error) => console.log(error.message));
  };

  const navlinks2 = (
    <>
      <li>
        <NavLink to="/my-services"> My Services </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/add-services"> Add Services </NavLink>{" "}
      </li>
      <li>
        <NavLink to={`/my-bookings`}> My Bookings </NavLink>{" "}
      </li>
      <li>
        <NavLink to="/my-schedules"> My Schedules </NavLink>{" "}
      </li>
    </>
  );

  // text-4

  return (
    <>
      <div className="lg:hidden"></div>
      <div className="  navbar  text-4 font-semibold  w-11/12 lg:w-11/12 mx-auto py-5 ">
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
          <div className="dropdown md:hidden z-10">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="ml-10">
                  <FaAlignJustify className="inline text-lg" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-black">
                  {/* Sidebar content here */}
                  <li>
                    <NavLink to="/">Home </NavLink>
                  </li>
                  <li>
                    <NavLink to="/all-services">Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-us">About Us </NavLink>
                  </li>
                  {user && (
                    <details className="dropdown">
                      <summary className="hover:cursor-pointer m-1 ">
                        Dashboard
                      </summary>
                      <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-36">
                        {navlinks2}
                      </ul>
                    </details>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/*  -------ENDS mobile ENDs ------ */}
        </div>

        {/* large device start */}
        <div className="navbar-end ">
          <ul className="hidden md:flex justify-center items-center border-r-2 gap-6 mr-6 pr-6 border-gray-400">
            <li className="">
              <NavLink to="/">Home </NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/all-services">Services </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us </NavLink>
            </li>
            {user && (
              <details className="dropdown">
                <summary className="m-1 hover:cursor-pointer">
                  Dashboard
                </summary>
                <ul className="bg-2 bg-opacity-90 p-2 shadow menu dropdown-content z-[1] rounded-box w-36">
                  {navlinks2}
                </ul>
              </details>
            )}
          </ul>
          <div>
            {user ? (
              <div className="flex justify-center items-center gap-1 text-white">
                <button
                  className="text-4 object-cover mr-2"
                  onClick={handleLogout}>
                  LOG OUT
                </button>
                {/* <h2>{user ? user.displayName : "?"}</h2> */}
                <img
                  src={user?.photoURL}
                  className="h-12 w-12 rounded-full bg-white"
                />
              </div>
            ) : (
              <NavLink to="/login" className="text-4 ">
                Log In{" "}
              </NavLink>
            )}
          </div>
        </div>
        {/* large device end */}
      </div>
    </>
  );
}

export default Navbar;

{
  /*only for mobile start  */
}
// <div className="dropdown md:hidden ml-4">
//   <p tabIndex={0} className="btn btn-ghost btn-circle">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-5 w-5"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M4 6h16M4 12h16M4 18h7"
//       />
//     </svg>
//   </p>
//   <ul
//     tabIndex={0}
//     className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#19282F] rounded-box w-52">
//     <li>
//       <NavLink to="/">Home </NavLink>
//     </li>
//     <li>
//       <NavLink to="/all-services">Services </NavLink>
//     </li>
//     {user && (
//       <li className="dropdown dropdown-hover">
//         <p tabIndex={0} className=" m-1">
//           Dashboard
//         </p>
//         <ul
//           tabIndex={0}
//           className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//           {navlinks2}
//         </ul>
//       </li>
//     )}
//   </ul>
// </div>
{
  /*  -------ENDS mobile ENDs ------ */
}
