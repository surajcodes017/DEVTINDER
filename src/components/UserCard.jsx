import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const {
    firstName,
    lastName,
    age,
    gender,
    photoUrl,
    bio,
    skills,
  } = user;

  const sendRequest = async (status) => {
    if (loading) return;

    try {
      setLoading(true);

      await axios.post(
        `${BASE_URL}/request/send/${status}/${user._id}`,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeUserFromFeed(user._id));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="group w-[390px] rounded-[30px] overflow-hidden bg-base-300 shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 border border-base-300">

      {/* Image */}

      <div className="relative h-[500px] overflow-hidden">

        <img
          src={photoUrl}
          alt={firstName}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        <div className="absolute top-5 left-5">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white">

            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

            Online

          </div>
        </div>

        <div className="absolute top-5 right-5">

          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white">

            {gender}

          </div>

        </div>

        <div className="absolute bottom-6 left-6 text-white">

          <h1 className="text-4xl font-bold">
            {firstName} {lastName}
          </h1>

          <p className="text-lg">
            🎂 {age} years old
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="p-6 space-y-5">

        <div>

          <h2 className="font-bold text-xl mb-2">
            About
          </h2>

          <p className="text-base-content/70 leading-7">

            {bio ||
              "Love travelling, coding and meeting new people."}

          </p>

        </div>

        <div>

          <h2 className="font-bold text-xl mb-2">

            Skills

          </h2>

          <div className="flex flex-wrap gap-2">

            {skills?.length ? (
              skills.map((skill) => (
                <span
                  key={skill}
                  className="badge badge-primary badge-outline"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-base-content/60">

                No skills added

              </span>
            )}

          </div>

        </div>

        <div className="flex gap-4 pt-4">

          <button
            disabled={loading}
            onClick={() => sendRequest("ignored")}
            className="btn btn-outline btn-error flex-1 rounded-full"
          >
            ❌ Ignore
          </button>

          <button
            disabled={loading}
            onClick={() => sendRequest("interested")}
            className="btn btn-primary flex-1 rounded-full"
          >
            ❤️ Interested
          </button>

        </div>

      </div>

    </div>
  );
};

export default UserCard;