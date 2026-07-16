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

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";

// import {
//   FiMapPin,
//   FiCheckCircle,
//   FiCode,
//   FiHeart,
//   FiX,
//   FiStar,
//   FiZap,
// } from "react-icons/fi";

// import { BASE_URL } from "../utils/constants";
// import { removeUserFromFeed } from "../utils/feedSlice";
// // import { motion } from "framer-motion";

// const UserCard = ({ user }) => {
//   const dispatch = useDispatch();

//   const [loading, setLoading] = useState(false);
//   // const [exitDirection, setExitDirection] = useState(null);

//   if (!user) return null;

//   const {
//     firstName,
//     lastName,
//     age,
//     gender,
//     photoUrl,
//     bio,
//     skills,
//   } = user;

//   const sendRequest = async (status) => {
//     if (loading) return;

//     try {
//       setLoading(true);

//       // await axios.post(
//       //   `${BASE_URL}/request/send/${status}/${user._id}`,
//       //   {},
//       //   {
//       //     withCredentials: true,
//       //   }
//       // );

//       // dispatch(removeUserFromFeed(user._id));

//        await axios.post(
//         `${BASE_URL}/request/send/${status}/${user._id}`,
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       // setExitDirection(status);


//     dispatch(removeUserFromFeed(user._id));




//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 


//       className="
//       group
//       relative
//       w-[440px]
//       xl:w-[470px]
//       rounded-[34px]
//       overflow-hidden
//       bg-base-100/70
//       backdrop-blur-xl
//       border
//       border-base-300
//       shadow-2xl
//       hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
//       hover:-translate-y-3
//       transition-all
//       duration-500"
//     >

//       {/* Decorative Glow */}

//       <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-primary/20 blur-[120px]"></div>

//       <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-secondary/20 blur-[120px]"></div>

//       {/* ================= HERO IMAGE ================= */}

//       <div className="relative h-[520px] overflow-hidden">

//         <img
//           src={photoUrl}
//           alt={firstName}
//           className="
//           w-full
//           h-full
//           object-cover
//           group-hover:scale-110
//           duration-700"
//         />

//         {/* Overlay */}

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

//         {/* Available */}

//         <div className="absolute top-6 left-6">

//           <div
//             className="
//             flex
//             items-center
//             gap-2
//             bg-base-100/30
//             backdrop-blur-xl
//             px-4
//             py-2
//             rounded-full
//             text-white
//             shadow-lg"
//           >

//             <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

//             Available

//           </div>

//         </div>

//         {/* Match */}

//         <div className="absolute top-6 right-6">

//           <div
//             className="
//             flex
//             items-center
//             gap-2
//             bg-primary
//             text-white
//             px-4
//             py-2
//             rounded-full
//             shadow-xl"
//           >

//             <FiStar />

//             92% Match

//           </div>

//         </div>

//         {/* Bottom Profile */}

//         <div className="absolute bottom-7 left-7 right-7 text-white">

//           <h1 className="text-4xl font-black">

//             {firstName} {lastName}

//           </h1>

//           <div className="flex items-center gap-2 mt-2">

//             <FiCheckCircle className="text-green-400" />

//             <span className="font-semibold">

//               Verified Developer

//             </span>

//           </div>

//           <div className="flex flex-wrap gap-3 mt-4">

//             <div className="badge badge-primary badge-lg">

//               {gender}

//             </div>

//             <div className="badge badge-secondary badge-lg">

//               🎂 {age} Years

//             </div>

//             <div className="badge badge-accent badge-lg">

//               <FiCode />

//               MERN

//             </div>

//           </div>

//           <div className="flex items-center gap-2 mt-5 opacity-90">

//             <FiMapPin />

//             <span>India</span>

//           </div>

//         </div>

//       </div>

//       {/* ================= BODY ================= */}

//       <div className="p-7 space-y-7">

//         {/* About */}

//         <div>

//           <h2 className="text-xl font-bold flex items-center gap-2">

//             <FiZap className="text-warning" />

//             About

//           </h2>

//           <p className="mt-3 leading-7 text-base-content/70">

//             {bio ||
//               "Passionate Full Stack Developer who loves building scalable applications, collaborating with developers and learning modern technologies."}

//           </p>

//         </div>

//                 {/* Skills */}

//         <div>

//           <h2 className="text-xl font-bold flex items-center gap-2">

//             <FiCode className="text-primary" />

//             Skills

//           </h2>

//           <div className="flex flex-wrap gap-3 mt-4">

//             {skills?.length ? (
//               skills.map((skill) => (
//                 <span
//                   key={skill}
//                   className="
//                   px-4
//                   py-2
//                   rounded-full
//                   bg-primary/10
//                   border
//                   border-primary/30
//                   text-primary
//                   font-medium
//                   hover:bg-primary
//                   hover:text-white
//                   hover:scale-105
//                   transition-all
//                   duration-300"
//                 >
//                   {skill}
//                 </span>
//               ))
//             ) : (
//               <span className="text-base-content/60">

//                 No skills added yet

//               </span>
//             )}

//           </div>

//         </div>

//         {/* Looking For */}

//         <div>

//           <h2 className="text-xl font-bold flex items-center gap-2">

//             <FiZap className="text-warning" />

//             Looking For

//           </h2>

//           <div className="flex flex-wrap gap-3 mt-4">

//             <div className="badge badge-outline badge-lg">
//               🤝 Networking
//             </div>

//             <div className="badge badge-outline badge-lg">
//               🚀 Open Source
//             </div>

//             <div className="badge badge-outline badge-lg">
//               💼 Internship
//             </div>

//             <div className="badge badge-outline badge-lg">
//               👨‍💻 Collaboration
//             </div>

//           </div>

//         </div>

//         {/* Profile Completion */}

//         <div
//           className="
//           bg-base-200
//           rounded-2xl
//           p-5
//           border
//           border-base-300"
//         >

//           <div className="flex justify-between">

//             <h3 className="font-bold">

//               Developer Profile

//             </h3>

//             <span className="text-primary font-bold">

//               95%

//             </span>

//           </div>

//           <progress
//             className="progress progress-primary w-full mt-3"
//             value="95"
//             max="100"
//           ></progress>

//         </div>

//         {/* Action Buttons */}

//         <div className="flex gap-4 pt-2">

//           {/* <button
//             disabled={loading}
//             onClick={() => sendRequest("ignored")}
//             className="
//             flex-1
//             h-14
//             rounded-2xl
//             border
//             border-red-500
//             text-red-500
//             font-semibold
//             flex
//             items-center
//             justify-center
//             gap-2
//             hover:bg-red-500
//             hover:text-white
//             hover:scale-105
//             transition-all
//             duration-300
//             disabled:opacity-50"
//           >

//             <FiX size={20} />

//             Pass

//           </button> */}
//          <button
//   type="button"
//   disabled={loading}
//   onClick={() => {
//     console.log("Pass clicked");
//     sendRequest("ignored");
//   }}
//   className="
//     flex-1
//     h-14
//     rounded-2xl
//     border
//     border-red-500
//     text-red-500
//     font-semibold
//     flex
//     items-center
//     justify-center
//     gap-2
//     hover:bg-red-500
//     hover:text-white
//     hover:scale-105
//     transition-all
//     duration-300
//     disabled:opacity-50"
// >
//   <FiX size={20} />
//   Pass
// </button>

//           {/* <button
//             disabled={loading}
//             onClick={() => sendRequest("interested")}
//             className="
//             flex-1
//             h-14
//             rounded-2xl
//             bg-gradient-to-r
//             from-primary
//             to-secondary
//             text-white
//             font-semibold
//             flex
//             items-center
//             justify-center
//             gap-2
//             shadow-lg
//             hover:scale-105
//             hover:shadow-primary/40
//             transition-all
//             duration-300
//             disabled:opacity-50"
//           >

//             <FiHeart size={20} />

//             Connect

//           </button> */}
//         <button
//   type="button"
//   disabled={loading}
//   onClick={() => {
//     console.log("Connect clicked");
//     sendRequest("interested");
//   }}
//   className="
//     flex-1
//     h-14
//     rounded-2xl
//     bg-gradient-to-r
//     from-primary
//     to-secondary
//     text-white
//     font-semibold
//     flex
//     items-center
//     justify-center
//     gap-2
//     shadow-lg
//     hover:scale-105
//     hover:shadow-primary/40
//     transition-all
//     duration-300
//     disabled:opacity-50"
// >
//   <FiHeart size={20} />
//   Connect
// </button>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default UserCard;