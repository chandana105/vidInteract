import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const useLiveChat = () => {
  const [userChatMessage, setUserChatMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API POOLING

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
  }, [dispatch]);

  return { chatMessages, userChatMessage, setUserChatMessage };
};

export default useLiveChat;
