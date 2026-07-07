import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setError("");

      if (!firstName || !lastName || !emailId || !password) {
        setError("Please fill all the fields.");
        return;
      }

      setLoading(true);

      const res= await axios.post(BASE_URL + "/signup", {
        firstName,
        lastName,
        emailId,
        password,
      },{
        withCredentials:true,
      });

      alert("Account created successfully!");
      dispatch(addUser(res.data.data));

      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl border border-base-300">
        <div className="card-body">

          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold">Create Account</h1>
            <p className="text-base-content/60 mt-2">
              Join DevTinder and connect with developers 🚀
            </p>
          </div>

          {/* First Name */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">
                First Name
              </span>
            </label>

            <input
              type="text"
              placeholder="Enter first name"
              className="input input-bordered w-full"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">
                Last Name
              </span>
            </label>

            <input
              type="text"
              placeholder="Enter last name"
              className="input input-bordered w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text font-semibold">
                Email
              </span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-semibold">
                Password
              </span>
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4 font-medium">
              {error}
            </div>
          )}

          <button
            className={`btn btn-primary text-lg rounded-xl ${
              loading ? "btn-disabled" : ""
            }`}
            onClick={handleSignup}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="divider">OR</div>

          <p className="text-center text-base-content/70">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignUp;