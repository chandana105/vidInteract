import React from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/chatSlice";
import useLiveChat from "../../hooks/useLiveChat";

const LiveChat = () => {
  const dispatch = useDispatch();

  const { chatMessages, userChatMessage, setUserChatMessage } = useLiveChat();

  return (
    <div className="col-span-3 ml-1">
      <div className="border-2 h-[600px] bg-gray-50 px-3 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="my-3 flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Chandana Mahajan",
              message: `${userChatMessage} 🌞`,
            })
          );
          setUserChatMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Say something...😁"
          className="p-2 border-2 border-gray-400 rounded-md w-9/12"
          value={userChatMessage}
          onChange={(e) => setUserChatMessage(e.target.value)}
        />
        <button className="bg-blue-400 px-6 py-2 rounded-md text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
