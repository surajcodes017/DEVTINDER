import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { formatDistanceToNow } from "date-fns";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const messagesEndRef = useRef(null);
  
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState(null);
  const [targetUser, setTargetUser] = useState(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });

    console.log(chat.data.messages);

    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        photoUrl: senderId?.photoUrl,
        text,
      };
    });
    setMessages(chatMessages);
  };

  

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

const fetchTargetUser = async () => {

    const res = await axios.get(
        BASE_URL + "/user/" + targetUserId,
        {
            withCredentials: true,
        }
    );

    setTargetUser(res.data);
};
const fetchUserStatus = async () => {
  try {
    const status = await axios.get(
      BASE_URL + "/user/status/" + targetUserId,
      {
        withCredentials: true,
      }
    );

    setIsOnline(status.data.isOnline);
    setLastSeen(status.data.lastSeen);
  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => {
    fetchChatMessages();
    fetchUserStatus();
    fetchTargetUser();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();
    socket.emit("userOnline", {
    userId,
});
    // As soon as the page loaded, the socket connection is made and joinChat event is emitted
    socket.emit("joinChat", {
      firstName: user.firstName,
      userId,
      targetUserId,
    });

    socket.on("messageReceived", ({ firstName, lastName,photoUrl, text }) => {
      console.log(firstName + " :  " + text);
      setMessages((messages) => [...messages, { firstName, lastName,photoUrl, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, targetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  return (
  <div className="flex justify-center items-center h-[88vh] bg-base-200 p-6">
    <div className="w-full max-w-5xl h-full bg-base-100 rounded-3xl shadow-2xl border border-base-300 overflow-hidden flex flex-col">

      {/* Header */}
      <div className="px-6 py-4 border-b border-base-300 bg-base-100/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">

        {/* <div className="flex items-center gap-4">
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-14">
              <span className="text-xl font-bold">
                {targetUserId?.charAt(0)?.toUpperCase()}
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-2xl">Conversation</h2>
            <p className="text-sm opacity-70">
              Real-time messaging
            </p>
          </div>
        </div> */}
        <div className="flex items-center gap-4">

  <div className="avatar">
    <div className="w-14 rounded-full">
      <img
        src={targetUser?.photoUrl}
        alt={targetUser?.firstName}
      />
    </div>
  </div>

  <div>
    <h2 className="font-bold text-2xl">
      {targetUser?.firstName} {targetUser?.lastName}
    </h2>

    {/* <p className="text-sm opacity-70">
      {targetUser?.bio}
    </p> */}
  </div>

</div>

        {/* <div className="badge badge-success badge-outline px-4 py-3">
          Online
        </div> */}
        {
  isOnline ? (
    <div className="badge badge-success badge-outline px-4 py-3">
      🟢 Online
    </div>
  ) : (
    <div className="text-sm text-gray-400">
      Last seen{" "}
{formatDistanceToNow(new Date(lastSeen), {
  addSuffix: true,
})}
    </div>
  )
}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-base-200">

        {messages.map((msg, index) => {
          const isMe = user.firstName === msg.firstName;

          return (
            <div
              key={index}
              className={`flex ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-end gap-3 max-w-[70%] ${
                  isMe ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                {/* <div className="avatar placeholder">
                  <div
                    className={`rounded-full w-10 ${
                      isMe
                        ? "bg-secondary text-secondary-content"
                        : "bg-primary text-primary-content"
                    }`}
                  >
                    <span className="font-semibold">
                      {msg.firstName.charAt(0)}
                    </span>
                  </div>
                </div> */}
                <div className="avatar">
  <div className="w-10 rounded-full">
    <img
      src={msg.photoUrl}
      alt={msg.firstName}
      className="object-cover"
    />
  </div>
</div>

                {/* Bubble */}
                <div>
                  <p
                    className={`text-xs mb-1 px-2 ${
                      isMe ? "text-right" : "text-left"
                    } opacity-70`}
                  >
                    {msg.firstName} {msg.lastName}
                  </p>

                  <div
                    className={`rounded-3xl px-5 py-3 shadow-lg break-words ${
                      isMe
                        ? "bg-secondary text-secondary-content rounded-br-md"
                        : "bg-base-100 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>

                  <p
                    className={`text-[11px] mt-1 opacity-50 ${
                      isMe ? "text-right" : ""
                    }`}
                  >
                    Just now
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="border-t border-base-300 bg-base-100 p-5">

        <div className="flex items-center gap-4">

          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="input input-bordered flex-1 rounded-full text-lg px-6"
          />

          <button
            onClick={sendMessage}
            className="btn btn-primary rounded-full px-8"
          >
            Send
          </button>

        </div>
      </div>
    </div>
  </div>
);
};
export default Chat;