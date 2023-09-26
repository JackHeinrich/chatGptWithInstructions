import React, { useState } from "react";
import SendButton from "./SendButton";
import messageStruct from "../util/messageStruct";

interface Props {
  submitMessage: (newMessage: messageStruct) => void;
  instructions: string;
  setLoading: (newState: boolean) => void;
  loading: boolean;
  handleLLMResponse: (newMessage: messageStruct) => void;
}

export default function Inputform({
  submitMessage,
  setLoading,
  loading,
  handleLLMResponse,
}: Props) {
  const [inputMessage, setInputMessage] = useState("");

  // Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value); // Update the inputValue state with the new input value
  };

  async function getResponse(userMessage: messageStruct) {
    const response = handleLLMResponse(userMessage);
    return response;
  }

  // Function to handle form submission (you can use this with your SendButton component)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (loading) {
      return;
    }
    event.preventDefault();
    // You can access the input value in 'inputValue' state here and perform further actions

    const userMessage = { content: inputMessage, sender: "user" };

    submitMessage(userMessage);
    setLoading(true);
    setInputMessage("");

    const response = await getResponse(userMessage);
    submitMessage({ content: response!, sender: "assistant" });
    setLoading(false);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a message"
        aria-label="Enter a message"
        aria-describedby="basic-addon1"
        value={inputMessage}
        onChange={handleInputChange}
      ></input>
      <SendButton onClick={handleSubmit} />
    </div>
  );
}
