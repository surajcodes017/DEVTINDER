import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequest } from "../utils/requestSlice";

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
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  if (requests.length === 0)
    return (
      <div className="flex flex-col items-center mt-28">
        <h1 className="text-4xl font-bold text-white">
          No Connection Requests
        </h1>

        <p className="text-gray-400 mt-3">
          You're all caught up 🎉
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Connection Requests
      </h1>

      <div className="space-y-6">
        {requests.map((request) => {
          const user = request.fromUserId;

          return (
            <div
              key={request._id}
              className="bg-base-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-6 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex items-center gap-6">
                <img
                  src={user.photoUrl}
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-primary"
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {user.firstName} {user.lastName}
                  </h2>

                  <p className="text-gray-400 mt-1">
                    {user.age} Years • {user.gender}
                  </p>

                  <p className="mt-3 text-gray-300 max-w-xl">
                    {user.about}
                  </p>

                  {user.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {user.skills.map((skill) => (
                        <div
                          key={skill}
                          className="badge badge-primary badge-outline"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-8 md:mt-0">
                <button
                  className="btn btn-error rounded-full px-8"
                  onClick={() =>
                    reviewRequest("rejected", request._id)
                  }
                >
                  Reject
                </button>

                <button
                  className="btn btn-success rounded-full px-8"
                  onClick={() =>
                    reviewRequest("accepted", request._id)
                  }
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;