import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

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

  // Fetch whenever page changes
  useEffect(() => {
    if (hasMoreUsers) {
      getFeed();
    }
  }, [page]);

  // Load next page automatically
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
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!hasMoreUsers && feed?.length === 0) {
    return (
      <div className="text-center mt-24">
        <h1 className="text-4xl font-bold">
          🎉 No More Profiles
        </h1>

        <p className="text-gray-400 mt-3">
          You've reached the end of your feed.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      {feed && feed.length > 0 && (
        <UserCard user={feed[0]} />
      )}
    </div>
  );
};

export default Feed;