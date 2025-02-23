import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { useContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handletoggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const hol = () => {
    logout(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
        Swal.fire({
          title: "success",
          text: "Logout successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <NavLink className="btn btn-ghost hover:bg-color" to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className="btn btn-ghost hover:bg-color" to="/alltourists">
        <li> All Tourists Spot</li>
      </NavLink>
      <NavLink className="btn btn-ghost hover:bg-color" to="/addtour">
        <li>Add Tourists Spot</li>
      </NavLink>

      {user && (
        <NavLink className="btn btn-ghost hover:bg-color" to="/mylist">
          <li> My List</li>
        </NavLink>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100  fixed  w-full  shadow-md z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu mr-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center">
            {/* <img className="w-20" src="./logo.png" alt="" /> */}
            <Link className="text-2xl font-bold" to="/">
              ExploreAsiaParadise
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        <div className="navbar-end  lg:inline-flex gap-2">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handletoggle}
              type="checkbox"
              className="theme-controller hidden"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <div className="flex gap-2">
              <div
                className="dropdown dropdown-hover dropdown-bottom dropdown-end tooltip tooltip-left"
                data-tip={user.displayName}
              >
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    id="my-anchor-element"
                    className="w-12 border rounded-full  "
                    alt="Tailwind "
                    src={user.photoURL}
                  />
                </div>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button
                      onClick={hol}
                      className="btn text-white bg-red-300  hover:bg-red-600 "
                    >
                      logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn bg-blue-300 text-white hover:bg-blue-600 hover:text-black">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn  text-white bg-green-400 hover:bg-green-600 hover:text-black">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
