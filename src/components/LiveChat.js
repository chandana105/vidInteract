import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API Pooling");
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="col-span-3 ml-1">
      <div className="border-2 h-[600px] bg-gray-50 px-3 p-2 rounded-lg">
        <ChatMessage
          name="Chandana Mahajan"
          message="This is live chat message, hope you are enjoying your day."
        />
      </div>
    </div>
  );
};

export default LiveChat;

// now lets do api pooling ,ie after 2 s comment is fetched

// and after doing that have to append it somewhere lets use redux
