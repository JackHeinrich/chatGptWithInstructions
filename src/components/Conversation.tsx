import Message from "./Message";
import messageStruct from "../util/messageStruct";
import LoadingMessage from "./LoadingMessage";

interface Props {
  messages: messageStruct[];
  loading: boolean;
}

export default function Conversation({ messages, loading }: Props) {
  return (
    <div className="card" style={{ height: "500px", padding: "1px" }}>
      <div className="card-header">Convo History</div>
      <div className="card-body overflow-auto">
        {messages.map((message, index) => (
          <div key={index}>
            <Message
              key={index}
              messageContent={message.content}
              sender={message.sender}
            />
            <div style={{ padding: "4px" }} />
          </div>
        ))}
        {loading && <LoadingMessage />}
      </div>
    </div>
  );
}
