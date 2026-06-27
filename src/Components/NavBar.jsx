import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      setIsOpen(false);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleProfileClick = () => {
    setIsOpen(false);
  };
  

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to={user? "/" : "/login"} className="btn btn-ghost text-xl">
          💻DevTinder
        </Link>
      </div>

      <div className="flex gap-2">
        <div className="relative mx-5">
          {user && (
            <div
              role="button"
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Photo"
                  src={user.photoUrl}
                />
              </div>
            </div>
          )}

          {isOpen && (
            <ul className="absolute right-0 mt-3 w-52 menu menu-sm bg-base-100 rounded-box shadow z-50">
              <li>
                <Link
                  to="/profile"
                  className="justify-between"
                  onClick={handleProfileClick}
                >
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <Link to="/Connections" >Connections</Link>
              </li>

              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;