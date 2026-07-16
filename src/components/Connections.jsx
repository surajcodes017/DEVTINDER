// import axios from "axios";
// import { useEffect } from "react";
// import { BASE_URL } from "../utils/constants";
// import { addConnections,removeConnections,clearConnections } from "../utils/connectionSlice";
// import { useDispatch,useSelector } from "react-redux";

// const Connections = () => {
//   const connections = useSelector(
//     (store) => store.connections
// );

// const dispatch = useDispatch();

//   const fetchConnections = async () => {

//     if (connections) return;

//     try {

//         const res = await axios.get(
//             BASE_URL + "/user/connections",
//             {
//                 withCredentials: true,
//             }
//         );

//         dispatch(
//             addConnections(res.data.data)
//         );

//     } catch (err) {

//         console.log(err);

//     }

// };

//   useEffect(() => {
//     if(!connections){
//         fetchConnections();
//     }
    
//   }, [connections]);


//   if (!connections)
//     return null;

//   if (connections.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-[80vh]">
//         <div className="text-center">

//           <h1 className="text-4xl font-bold">
//             No Connections Yet 😔
//           </h1>

//           <p className="text-gray-500 mt-3">
//             Start connecting with developers.
//           </p>

//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-base-200 py-10">

//       <h1 className="text-5xl font-bold text-center mb-12">
//         My Connections
//       </h1>

//       <div className="max-w-5xl mx-auto space-y-6">

//         {connections.map((connection) => {

//           const {
//             _id,
//             firstName,
//             lastName,
//             age,
//             gender,
//             photoUrl,
//             bio,
//             skills,
//           } = connection;

//           return (
//             <div
//               key={_id}
//               className="bg-base-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col md:flex-row items-center justify-between"
//             >

//               {/* Left */}

//               <div className="flex items-center gap-6">

//                 <img
//                   src={photoUrl}
//                   alt="profile"
//                   className="w-28 h-28 rounded-full object-cover border-4 border-primary"
//                 />

//                 <div>

//                   <h2 className="text-3xl font-bold">
//                     {firstName} {lastName}
//                   </h2>

//                   <p className="text-gray-500 mt-1 capitalize">
//                     {gender} • {age} years
//                   </p>

//                   <p className="mt-3 text-gray-600 max-w-xl">
//                     {bio || "No bio available."}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mt-4">

//                     {skills?.map((skill) => (
//                       <span
//                         key={skill}
//                         className="badge badge-primary badge-outline"
//                       >
//                         {skill}
//                       </span>
//                     ))}

//                   </div>

//                 </div>

//               </div>

//               {/* Right */}

//               <div className="flex gap-3 mt-6 md:mt-0">

//                 <button className="btn btn-primary rounded-full px-6">
//                   💬 Message
//                 </button>

//                 <button className="btn btn-error btn-outline rounded-full px-6">
//                   Remove
//                 </button>

//               </div>

//             </div>
//           );
//         })}
//       </div>

//     </div>
//   );
// };

// export default Connections;


import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

import {
  FaUserFriends,
  FaTrashAlt,
  FaComments,
  FaCode,
} from "react-icons/fa";

const Connections = () => {
  const connections = useSelector((store) => store.connections);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    if (connections) return;

    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!connections) {
      fetchConnections();
    }
  }, [connections]);

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 flex justify-center items-center">
        <div className="text-center">

          <div className="text-8xl mb-5">👥</div>

          <h1 className="text-5xl font-black mb-4">
            No Connections Yet
          </h1>

          <p className="text-lg opacity-70">
            Start connecting with amazing developers.
          </p>

          <button className="btn btn-primary mt-8 rounded-full px-8">
            Explore Developers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 py-12 px-5">

      {/* Header */}

      <div className="text-center mb-14">

        <h1
          className="
          text-6xl
          font-black
          bg-gradient-to-r
          from-primary
          via-secondary
          to-accent
          bg-clip-text
          text-transparent"
        >
          My Connections
        </h1>

        <p className="text-gray-400 text-lg mt-4">
          Your Developer Network
        </p>

      </div>

      <div className="max-w-6xl mx-auto space-y-8">

        {connections.map((connection) => {
          const {
            _id,
            firstName,
            lastName,
            age,
            gender,
            photoUrl,
            bio,
            skills,
          } = connection;

          const online = Math.random() > 0.5;

          return (
            <div
              key={_id}
              className="
              bg-base-100/70
              backdrop-blur-xl
              border
              border-base-300
              rounded-3xl
              shadow-xl
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              duration-300
              overflow-hidden"
            >

              <div className="p-8 flex flex-col lg:flex-row justify-between gap-8">

                {/* Left Section */}

                <div className="flex gap-6">

                  <div className="relative">

                    <img
                      src={photoUrl}
                      alt={firstName}
                      className="
                      w-32
                      h-32
                      rounded-full
                      object-cover
                      ring
                      ring-primary
                      ring-offset-4
                      ring-offset-base-100
                      shadow-xl"
                    />

                    <span
                      className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-4 border-base-100 ${
                        online ? "bg-success" : "bg-gray-500"
                      }`}
                    ></span>

                  </div>

                  <div className="flex flex-col justify-center">

                    <h2 className="text-4xl font-bold">
                      {firstName} {lastName}
                    </h2>

                    <div className="flex gap-3 mt-2 flex-wrap">

                      <div className="badge badge-primary badge-lg capitalize">
                        {gender}
                      </div>

                      <div className="badge badge-secondary badge-lg">
                        {age} Years
                      </div>

                      <div
                        className={`badge badge-lg ${
                          online ? "badge-success" : "badge-neutral"
                        }`}
                      >
                        {online ? "Online" : "Offline"}
                      </div>

                    </div>

                    <p className="mt-5 text-gray-300 max-w-2xl leading-7">
                      {bio || "Passionate developer building amazing things."}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">

                      {skills?.map((skill) => (
                        <span
                          key={skill}
                          className="
                          px-4
                          py-2
                          rounded-full
                          bg-primary/10
                          border
                          border-primary/30
                          text-primary
                          font-medium
                          hover:bg-primary
                          hover:text-white
                          transition"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                    <div className="flex gap-6 mt-6 text-sm opacity-70">

                      <div className="flex items-center gap-2">
                        <FaUserFriends />
                        Connected
                      </div>

                      <div className="flex items-center gap-2">
                        <FaCode />
                        Developer
                      </div>

                    </div>

                  </div>

                </div>

                {/* Right Section */}

                <div className="flex flex-col justify-center gap-4 min-w-[220px]">

                <Link to={"/chat/"+ _id} >
                <button
                    className="
                    btn
                    btn-primary
                    rounded-2xl
                    text-lg
                    h-14"
                  >
                    <FaComments />
                    Message
                  </button>
                </Link>
                  

                  <button
                    className="
                    btn
                    btn-outline
                    rounded-2xl
                    h-14"
                  >
                    View Profile
                  </button>

                  <button
                    className="
                    btn
                    btn-error
                    btn-outline
                    rounded-2xl
                    h-14"
                  >
                    <FaTrashAlt />
                    Remove
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Connections;