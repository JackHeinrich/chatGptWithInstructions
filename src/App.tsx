import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Inputform from "./components/Inputform";
import Conversation from "./components/Conversation";
import messageStruct from "./util/messageStruct";

import getLanguageModelResponse from "./methods/getLanguageModelResponse";

import Instructions from "./components/Instructions";

function App() {
  const [messages, addMessage] = useState<messageStruct[]>([]);

  const handleLLMResponse = async (userMessage: messageStruct) => {
    const response = await getLanguageModelResponse(
      instructions,
      messages,
      userMessage
    );
    return response;
  };

  const handleAddMessage = (newMessage: messageStruct) => {
    addMessage((prevMessages) => [...prevMessages, newMessage]);
  };

  const [loading, setLoading] = useState(false);

  const [instructions, setInstructions] = useState("");

  return (
    <>
      <h1 style={{ padding: "20px" }}>Heinrich GPT</h1>
      <div style={{ width: "500px" }}>
        <Instructions setInstructions={setInstructions} />
        <div style={{ padding: "10px" }} />
        <div
          className="seperator"
          style={{ backgroundColor: "gray", height: "10px" }}
        />
        <div style={{ padding: "10px" }} />
        <Conversation messages={messages} loading={loading} />
        <div style={{ padding: "4px" }} />
        <Inputform
          submitMessage={handleAddMessage}
          instructions={instructions}
          setLoading={setLoading}
          loading={loading}
          handleLLMResponse={handleLLMResponse}
        />
      </div>
    </>
  );
}

export default App;
