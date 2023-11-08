import { Link, NavLink } from "react-router-dom";
import profile from "../assets/profile.png";

function Navbar(props) {
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
      <div className=" sm:hidden lg:block navbar text-[#86C232] text-base font-semibold  w-11/12 mx-auto py-5 ">
        <div className="navbar-start ">
          <Link to='/' className="text-xl font-bold">SkillSync</Link>
        </div>

        <div className="navbar-end ">
          <ul className="flex gap-4 justify-center items-center border-r-2 mr-6 border-gray-400">
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
          <div className="flex justify-center items-center gap-1 text-white">
            <h2>Mehedi Hasan</h2>
            <img src={profile} className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

{
  /* <div class="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-slideup-animation" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    Actions
    <svg class="hs-dropdown-open:rotate-180 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div class="hs-dropdown-menu  w-72  duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 transition-[margin,opacity]  duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-slideup-animation">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Newsletter
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Purchases
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Downloads
    </a>
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Team Account
    </a>
  </div>
</div> */
}
