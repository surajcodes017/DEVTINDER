import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.user);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      setEditUser(loggedInUser);
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkills = (e) => {
    setEditUser({
      ...editUser,
      skills: e.target.value.split(",").map((skill) => skill.trim()),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        age: editUser.age,
        gender: editUser.gender,
        photoUrl: editUser.photoUrl,
        bio: editUser.bio,
        skills: editUser.skills,
      };
      const res = await axios.patch(BASE_URL + "/profile/edit", payload, {
        withCredentials: true,
      });

      dispatch(addUser(res?.data?.data));

      alert("Profile Updated Successfully 🎉");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Side */}

        <div className="bg-base-100 rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold mb-8">Edit Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-semibold">First Name</label>

              <input
                type="text"
                name="firstName"
                value={editUser?.firstName || ""}
                onChange={handleChange}
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Last Name</label>

              <input
                type="text"
                name="lastName"
                value={editUser?.lastName || ""}
                onChange={handleChange}
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="font-semibold">Age</label>

                <input
                  type="number"
                  name="age"
                  value={editUser?.age || ""}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-2"
                />
              </div>

              <div>
                <label className="font-semibold">Gender</label>

                <select
                  name="gender"
                  value={editUser?.gender || ""}
                  onChange={handleChange}
                  className="select select-bordered w-full mt-2"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold">Photo URL</label>

              <input
                type="text"
                name="photoUrl"
                value={editUser?.photoUrl || ""}
                onChange={handleChange}
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Skills</label>

              <input
                type="text"
                value={editUser?.skills?.join(", ") || ""}
                onChange={handleSkills}
                className="input input-bordered w-full mt-2"
              />
            </div>

            <div>
              <label className="font-semibold">Bio</label>

              <textarea
                rows={5}
                name="bio"
                value={editUser?.bio || ""}
                onChange={handleChange}
                className="textarea textarea-bordered w-full mt-2"
              />
            </div>

            <button className="btn btn-primary w-full text-lg">
              Save Profile
            </button>
          </form>
        </div>

        {/* Right Side */}

        <div className="flex justify-center items-start">
          <UserCard user={editUser} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
