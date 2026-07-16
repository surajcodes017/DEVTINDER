// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router";
// import { useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { removeUser } from "../utils/userSlice";


// const NavBar = () => {
//   const user = useSelector((store) => store.user);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await axios.post(
//         BASE_URL + "/logout",
//         {},
//         {
//           withCredentials: true,
//         }
//       );

//       dispatch(removeUser());
//       setIsOpen(false);

//       navigate("/login");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleProfileClick = () => {
//     setIsOpen(false);
//   };
  

//   return (
//     <div className="navbar bg-base-300 shadow-sm">
//       <div className="flex-1">
//         <Link to={user? "/" : "/login"} className="btn btn-ghost text-xl">
//           💻DevTinder
//         </Link>
//       </div>

//       <div className="flex gap-2">
//         <div className="relative mx-5">
//           {user && (
//             <div
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//               onClick={() => setIsOpen((prev) => !prev)}
//             >
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="User Photo"
//                   src={user.photoUrl}
//                 />
//               </div>
//             </div>
//           )}

//           {isOpen && (
//             <ul className="absolute right-0 mt-3 w-52 menu menu-sm bg-base-100 rounded-box shadow z-50">
//               <li>
//                 <Link
//                   to="/profile"
//                   className="justify-between"
//                   onClick={handleProfileClick}
//                 > 
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/Connections" >Connections</Link>
//               </li>

//                <li>
//                 <Link to="/Requests" >Requests</Link>
//               </li>
//               <li>
//                 <Link to="/Premium" >Premium</Link>
//               </li>

//               <li>
//                 <a onClick={handleLogout}>Logout</a>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";
import axios from "axios";

import {
  FiBell,
  FiHome,
  FiUsers,
  FiUser,
  FiLogOut,
  FiStar,
  FiMenu,
} from "react-icons/fi";

import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";

    if (hour < 17) return "Good Afternoon 👋";

    return "Good Evening 🌙";
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-base-100/80 border-b border-base-300 shadow-lg">

      <div className="max-w-7xl mx-auto px-6">

        <div className="navbar py-4">

          {/* Logo */}

          <div className="flex-1">

            <Link
              to={user ? "/" : "/login"}
              className="flex items-center gap-3"
            >

              <div className="text-4xl">🚀</div>

              <div>

                <h1 className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">

                  DevLinks

                </h1>

                <p className="text-xs opacity-60 -mt-1">
                  Developer Networking Platform
                </p>

              </div>

            </Link>

          </div>

          {/* Welcome */}

          {user && (
            <div className="hidden lg:flex flex-col text-center mx-10">

              <h2 className="text-xl font-bold">

                {getGreeting()},{" "}
                <span className="text-primary">
                  {user.firstName}
                </span>

              </h2>

              <p className="text-sm opacity-70">

                Ready to connect with amazing developers today?

              </p>

            </div>
          )}

          {/* Right */}

          {user && (

            <div className="flex items-center gap-5">

              <button className="btn btn-ghost btn-circle">

                <FiBell size={22} />

              </button>

              <div className="dropdown dropdown-end">

                <div
                  tabIndex={0}
                  className="cursor-pointer"
                >

                  <div className="flex items-center gap-3">

                    <div className="avatar online">

                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                        <img
                          src={user.photoUrl}
                          alt={user.firstName}
                        />

                      </div>

                    </div>

                    <div className="hidden md:block">

                      <h3 className="font-bold">

                        {user.firstName} {user.lastName}

                      </h3>

                      <p className="text-xs opacity-60">

                        Welcome Back ❤️

                      </p>

                    </div>

                  </div>

                </div>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-5 p-3 shadow-2xl bg-base-100 rounded-2xl w-72 border border-base-300"
                >

                  <div className="px-4 py-4 border-b border-base-300 mb-2">

                    <div className="flex gap-4 items-center">

                      <img
                        src={user.photoUrl}
                        className="w-16 h-16 rounded-full"
                      />

                      <div>

                        <h2 className="font-bold text-lg">

                          {user.firstName} {user.lastName}

                        </h2>

                        <p className="text-sm opacity-70">

                          Happy Coding 🚀

                        </p>

                      </div>

                    </div>

                  </div>

                  <li>
                    <Link to="/">
                      <FiHome />
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/profile">
                      <FiUser />
                      Profile
                    </Link>
                  </li>

                  <li>
                    <Link to="/Connections">
                      <FiUsers />
                      Connections
                    </Link>
                  </li>

                  <li>
                    <Link to="/Requests">
                      <FiUsers />
                      Requests
                    </Link>
                  </li>

                  <li>
                    <Link to="/Premium">
                      <FiStar />
                      Premium
                    </Link>
                  </li>

                  <div className="divider my-2"></div>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-error"
                    >
                      <FiLogOut />
                      Logout
                    </button>
                  </li>

                </ul>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default NavBar;