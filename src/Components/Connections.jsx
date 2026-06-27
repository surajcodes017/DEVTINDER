import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { addConnections,removeConnections,clearConnections } from "../utils/connectionSlice";
import { useDispatch,useSelector } from "react-redux";

const Connections = () => {
  const connections = useSelector(
    (store) => store.connections
);

const dispatch = useDispatch();

  const fetchConnections = async () => {

    if (connections) return;

    try {

        const res = await axios.get(
            BASE_URL + "/user/connections",
            {
                withCredentials: true,
            }
        );

        dispatch(
            addConnections(res.data.data)
        );

    } catch (err) {

        console.log(err);

    }

};

  useEffect(() => {
    if(!connections){
        fetchConnections();
    }
    
  }, [connections]);


  if (!connections)
    return null;

  if (connections.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="text-center">

          <h1 className="text-4xl font-bold">
            No Connections Yet 😔
          </h1>

          <p className="text-gray-500 mt-3">
            Start connecting with developers.
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">

      <h1 className="text-5xl font-bold text-center mb-12">
        My Connections
      </h1>

      <div className="max-w-5xl mx-auto space-y-6">

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

          return (
            <div
              key={_id}
              className="bg-base-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col md:flex-row items-center justify-between"
            >

              {/* Left */}

              <div className="flex items-center gap-6">

                <img
                  src={photoUrl}
                  alt="profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-primary"
                />

                <div>

                  <h2 className="text-3xl font-bold">
                    {firstName} {lastName}
                  </h2>

                  <p className="text-gray-500 mt-1 capitalize">
                    {gender} • {age} years
                  </p>

                  <p className="mt-3 text-gray-600 max-w-xl">
                    {bio || "No bio available."}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">

                    {skills?.map((skill) => (
                      <span
                        key={skill}
                        className="badge badge-primary badge-outline"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="flex gap-3 mt-6 md:mt-0">

                <button className="btn btn-primary rounded-full px-6">
                  💬 Message
                </button>

                <button className="btn btn-error btn-outline rounded-full px-6">
                  Remove
                </button>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Connections;