// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../utils/constants";
// import { addFeed } from "../utils/feedSlice";
// import UserCard from "./UserCard";

// const Feed = () => {
//   const dispatch = useDispatch();
//   const feed = useSelector((store) => store.feed);

//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [hasMoreUsers, setHasMoreUsers] = useState(true);

//   const getFeed = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         `${BASE_URL}/feed?page=${page}&limit=10`,
//         {
//           withCredentials: true,
//         }
//       );

//       const users = res.data.feedUsers;

//       if (users.length === 0) {
//         setHasMoreUsers(false);
//       } else {
//         dispatch(addFeed(users));
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch whenever page changes
//   useEffect(() => {
//     if (hasMoreUsers) {
//       getFeed();
//     }
//   }, [page]);

//   // Load next page automatically
//   useEffect(() => {
//     if (
//       feed &&
//       feed.length === 0 &&
//       hasMoreUsers &&
//       !loading
//     ) {
//       setPage((prev) => prev + 1);
//     }
//   }, [feed, loading, hasMoreUsers]);

//   if (loading && !feed) {
//     return (
//       <div className="flex justify-center mt-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );
//   }

//   if (!hasMoreUsers && feed?.length === 0) {
//     return (
//       <div className="text-center mt-24">
//         <h1 className="text-4xl font-bold">
//           🎉 No More Profiles
//         </h1>

//         <p className="text-gray-400 mt-3">
//           You've reached the end of your feed.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center mt-10">
//       {feed && feed.length > 0 && (
//         <UserCard user={feed[0]} />
//       )}
//     </div>
//   );
// };

// export default Feed;

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

import {
  FiSearch,
  FiUsers,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";

const Feed = () => {
  const dispatch = useDispatch();

  const feed = useSelector((store) => store.feed);
  const user = useSelector((store) => store.user);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning ☀️";
    if (hour < 17) return "Good Afternoon 👋";
    return "Good Evening 🌙";
  };

  const getFeed = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${BASE_URL}/feed?page=${page}&limit=10`,
        {
          withCredentials: true,
        }
      );

      const users = res.data.feedUsers;

      if (users.length === 0) {
        setHasMoreUsers(false);
      } else {
        dispatch(addFeed(users));
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMoreUsers) {
      getFeed();
    }
  }, [page]);

  useEffect(() => {
    if (
      feed &&
      feed.length === 0 &&
      hasMoreUsers &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  }, [feed, loading, hasMoreUsers]);

  if (loading && !feed) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!hasMoreUsers && feed?.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">

        <div className="text-8xl mb-5">🎉</div>

        <h1 className="text-5xl font-black">
          No More Profiles
        </h1>

        <p className="text-lg opacity-70 mt-4">
          You've explored every developer.
        </p>

      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-300 via-base-200 to-base-300">

      {/* Animated Background */}

      <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-[140px] -top-20 -left-20 animate-pulse"></div>

      <div className="absolute w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] bottom-0 right-0 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 animate-pulse"></div>

      <div className="relative z-10">

        {/* Hero */}

        <div className="pt-14 text-center">

          <h1 className="text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">

            {getGreeting()}

            {user && (
              <>
                , <span>{user.firstName}</span>
              </>
            )}

          </h1>

          <p className="mt-5 text-xl opacity-70">
            Discover talented developers and grow your network.
          </p>

        </div>

        {/* Search */}

        <div className="flex justify-center mt-10">

          <label className="input input-bordered flex items-center gap-3 w-full max-w-xl rounded-full shadow-xl bg-base-100/70 backdrop-blur">

            <FiSearch size={20} />

            <input
              type="text"
              className="grow"
              placeholder="Search developers (Coming Soon)"
              disabled
            />

          </label>

        </div>

        {/* Stats */}

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mt-12 px-5">

          <div className="bg-base-100/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

            <FiUsers size={36} className="text-primary mb-4" />

            <h2 className="text-4xl font-black">1000+</h2>

            <p className="opacity-70 mt-2">
              Developers
            </p>

          </div>

          <div className="bg-base-100/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

            <FiTrendingUp size={36} className="text-secondary mb-4" />

            <h2 className="text-4xl font-black">Daily</h2>

            <p className="opacity-70 mt-2">
              New Connections
            </p>

          </div>

          <div className="bg-base-100/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition">

            <FiAward size={36} className="text-accent mb-4" />

            <h2 className="text-4xl font-black">Premium</h2>

            <p className="opacity-70 mt-2">
              Networking Experience
            </p>

          </div>

        </div>

        {/* Feed Card */}

        <div className="flex justify-center mt-16 pb-20">

          {feed && feed.length > 0 && (

            <div className="transition duration-500 hover:scale-[1.02]">

              <UserCard user={feed[0]} />

            </div>

          )}

        </div>

        {/* Footer */}

        <div className="text-center pb-16">

          <h2 className="text-2xl font-bold">
            🚀 Keep discovering amazing developers
          </h2>

          <p className="opacity-60 mt-3">
            Every connection is an opportunity to learn, build, and grow.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Feed;