import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [userChatMessage, setUserChatMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API POOLING (ie request need to be made here)
      console.log("API Pooling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: `${generateRandomMessage(20)} 😃`,
        })
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="col-span-3 ml-1">
      <div className="border-2 h-[600px] bg-gray-50 px-3 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, i) => (
          // no indexes
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

// now lets do api pooling ,ie after 2 s comment is fetched

// and after doing that have to append it somewhere lets use redux

// if in setiternval its 2s and addign all items , and ifremoved from 2s to 5ms , then page ll blow off freeze
// so as yuotube does, rmeovign elets from top after certain number of elements
