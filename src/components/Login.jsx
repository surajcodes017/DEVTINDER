import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
import { validateLoginData } from "../utils/validation";
import {Link} from "react-router";

const Login = () => {
  const [emailId, setEmailId] = useState("virat.kohli18@gmail.com");
  const [password, setPassword] = useState("Virat@2027");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const validationError = validateLoginData(emailId, password);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError("");
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log(res.data);
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="hero min-h-[80vh]">
      <div className="card w-full max-w-md bg-base-100/10 backdrop-blur-lg border border-base-300 shadow-2xl">
        <div className="card-body">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-4xl font-bold mt-4">DevTinder</h1>

            <p className="text-sm opacity-70 mt-1">
              Connect with fellow developers
            </p>
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email ID</span>
            </label>

            {/* <input
              type="email"
              placeholder="suraj@example.com"
              className="input input-bordered w-full"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            /> */}
            <input
              type="email"
              placeholder="suraj@example.com"
              className={`input input-bordered w-full ${
                error ? "input-error" : ""
              }`}
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
          )}

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="btn btn-primary mt-6 text-lg"
          >
            Login
          </button>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-outline">Continue with Google</button>

          {/* Sign Up */}
          <p className="text-center mt-4 text-sm">
            New to DevTinder?{" "}
            <Link to="/signUp"   className="text-primary font-semibold cursor-pointer hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
