// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BASE_URL } from "../utils/constants";
// import { addRequests, removeRequest } from "../utils/requestSlice";

// const Requests = () => {
//   const dispatch = useDispatch();
//   const requests = useSelector((store) => store.requests);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(
//         BASE_URL + "/user/request/received",
//         {
//           withCredentials: true,
//         }
//       );

//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const reviewRequest = async (status, requestId) => {
//     try {
//       await axios.patch(
//         BASE_URL + "/request/review/" + status + "/" + requestId,
//         {},
//         {
//           withCredentials: true,
//         }
//       );

//       dispatch(removeRequest(requestId));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!requests)
//     return (
//       <div className="flex justify-center mt-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );

//   if (requests.length === 0)
//     return (
//       <div className="flex flex-col items-center mt-28">
//         <h1 className="text-4xl font-bold text-white">
//           No Connection Requests
//         </h1>

//         <p className="text-gray-400 mt-3">
//           You're all caught up 🎉
//         </p>
//       </div>
//     );

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Connection Requests
//       </h1>

//       <div className="space-y-6">
//         {requests.map((request) => {
//           const user = request.fromUserId;

//           return (
//             <div
//               key={request._id}
//               className="bg-base-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col md:flex-row justify-between items-center"
//             >
//               <div className="flex items-center gap-6">
//                 <img
//                   src={user.photoUrl}
//                   alt="profile"
//                   className="w-28 h-28 rounded-full object-cover border-4 border-primary"
//                 />

//                 <div>
//                   <h2 className="text-2xl font-bold">
//                     {user.firstName} {user.lastName}
//                   </h2>

//                   <p className="text-gray-400 mt-1">
//                     {user.age} Years • {user.gender}
//                   </p>

//                   <p className="mt-3 text-gray-300 max-w-xl">
//                     {user.about}
//                   </p>

//                   {user.skills && (
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {user.skills.map((skill) => (
//                         <div
//                           key={skill}
//                           className="badge badge-primary badge-outline"
//                         >
//                           {skill}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex gap-4 mt-8 md:mt-0">
//                 <button
//                   className="btn btn-error rounded-full px-8"
//                   onClick={() =>
//                     reviewRequest("rejected", request._id)
//                   }
//                 >
//                   Reject
//                 </button>

//                 <button
//                   className="btn btn-success rounded-full px-8"
//                   onClick={() =>
//                     reviewRequest("accepted", request._id)
//                   }
//                 >
//                   Accept
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Requests;

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";

import {
  FaUserPlus,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaClock,
} from "react-icons/fa";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/request/received",
        {
          withCredentials: true,
        }
      );

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const reviewRequest = async (status, requestId) => {
    try {
      await axios.patch(
        BASE_URL + "/request/review/" + status + "/" + requestId,
        {},
        {
          withCredentials: true,
        }
      );

      dispatch(removeRequest(requestId));
    } catch (err) {
      console.log(err);
    }
  };

  if (!requests)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (requests.length === 0)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">

        <div className="text-8xl mb-6">📨</div>

        <h1 className="text-5xl font-black">
          No Requests
        </h1>

        <p className="mt-4 text-lg opacity-70">
          You're all caught up.
        </p>

      </div>
    );

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
          Connection Requests
        </h1>

        <p className="text-gray-400 text-lg mt-4">
          Developers waiting to connect with you
        </p>

      </div>

      <div className="max-w-6xl mx-auto space-y-8">

        {requests.map((request) => {

          const user = request.fromUserId;

          return (

            <div
              key={request._id}
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

                {/* LEFT */}

                <div className="flex gap-6">

                  <div className="relative">

                    <img
                      src={user.photoUrl}
                      alt={user.firstName}
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
                      className="
                      absolute
                      bottom-2
                      right-2
                      w-5
                      h-5
                      rounded-full
                      bg-success
                      border-4
                      border-base-100"
                    ></span>

                  </div>

                  <div className="flex flex-col justify-center">

                    <div className="flex items-center gap-3 flex-wrap">

                      <h2 className="text-4xl font-bold">
                        {user.firstName} {user.lastName}
                      </h2>

                      <div className="badge badge-primary badge-lg">
                        New
                      </div>

                    </div>

                    <div className="flex gap-3 mt-3 flex-wrap">

                      <div className="badge badge-secondary badge-lg">
                        {user.age} Years
                      </div>

                      <div className="badge badge-outline capitalize">
                        {user.gender}
                      </div>

                      <div className="badge badge-success gap-2">

                        <FaClock />

                        Today

                      </div>

                    </div>

                    <p className="mt-5 text-gray-300 leading-7 max-w-2xl">
                      {user.about ||
                        "Passionate developer looking to build meaningful projects."}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">

                      {user.skills?.map((skill) => (

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
                          hover:bg-primary
                          hover:text-white
                          transition"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                    <div className="flex gap-6 mt-6 opacity-70 text-sm">

                      <div className="flex items-center gap-2">

                        <FaUserPlus />

                        Wants to Connect

                      </div>

                      <div className="flex items-center gap-2">

                        <FaCode />

                        Developer

                      </div>

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col justify-center gap-4 min-w-[220px]">

                  <button
                    onClick={() =>
                      reviewRequest("accepted", request._id)
                    }
                    className="
                    btn
                    btn-success
                    rounded-2xl
                    text-lg
                    h-14"
                  >

                    <FaCheckCircle />

                    Accept

                  </button>

                  <button
                    onClick={() =>
                      reviewRequest("rejected", request._id)
                    }
                    className="
                    btn
                    btn-error
                    btn-outline
                    rounded-2xl
                    text-lg
                    h-14"
                  >

                    <FaTimesCircle />

                    Reject

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

export default Requests;
