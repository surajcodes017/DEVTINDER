const UserCard = ({ user }) => {
    if(!user) return null;
  const {
    firstName,
    lastName,
    age,
    gender,
    photoUrl,
    bio,
    skills,
  } = user;

  return (
    <div className="group w-[390px] rounded-[30px] overflow-hidden bg-base-300 shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3 border border-base-300">

      {/* ================= IMAGE ================= */}

      <div className="relative h-[500px] overflow-hidden">

        <img
          src={photoUrl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Dark Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

        {/* Online Badge */}

        <div className="absolute top-5 left-5">

          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full">

            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

            <span className="text-sm font-semibold">
              Online
            </span>

          </div>

        </div>

        {/* Gender Badge */}

        <div className="absolute top-5 right-5">

          <div className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium">

            {gender}

          </div>

        </div>

        {/* Bottom Info */}

        <div className="absolute bottom-6 left-6 text-white">

          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            {firstName} {lastName}
          </h1>

          <p className="text-lg opacity-90 font-medium">
            🎂 {age} years old
          </p>

        </div>

      </div>

      {/* ================= BODY ================= */}

      <div className="p-6 space-y-6">

        {/* About */}

        <div>

          <h2 className="text-xl font-bold mb-3">
            About Me
          </h2>

          <p className="text-base-content/70 leading-7 line-clamp-3">
            {bio ||
              "Love travelling, exploring new technologies, meeting amazing people and creating unforgettable memories."}
          </p>

        </div>

        {/* Skills */}

        <div>

          <h2 className="text-xl font-bold mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {skills?.length ? (
              skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-base-content/50">
                No skills added yet.
              </span>
            )}

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-base-300"></div>

        {/* Buttons */}

        <div className="flex justify-between gap-4">

          <button className="btn btn-outline btn-error flex-1 rounded-full text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-300">

            ❌ Ignore

          </button>

          <button className="btn btn-primary flex-1 rounded-full text-base font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg">

            ❤️ Interested

          </button>

        </div>

      </div>

    </div>
  );
};

export default UserCard;