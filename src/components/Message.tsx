interface Props {
  messageContent: String;
  sender: String;
}

export default function Message({ messageContent, sender }: Props) {
  const AIColor = "#d4eeff";

  return (
    <div
      className="card p-2"
      style={{ backgroundColor: sender === "assistant" ? AIColor : "" }}
    >
      <div className="card-header text-start">
        {sender == "assistant" ? "AI" : "User"}
      </div>
      <div className="card-body">
        <p className="card-text text-start">{messageContent}</p>
      </div>
    </div>
  );
}
