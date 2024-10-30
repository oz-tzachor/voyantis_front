import { useContext, useState } from "react";
import { MainContext, Queue } from "../../context/MainContext";

const SingleQueue = ({ queue }: { queue: Queue }) => {
  const dataContext = useContext(MainContext);
  const [message, setMessage] = useState<string>("");
  const [nextMessage, setNextMessage] = useState<string | null>(null);

  const getMsg = async () => {
    const res = await dataContext.getNextMsg(queue.queueName);
    if (res) {
      setNextMessage(res.message); // Display the next message if available
    } else {
      setNextMessage("No message available.");
    }
    console.log("res ", res);
  };

  const publishMessage = async () => {
    if (message.trim() === "") return; // Don't publish empty messages

    try {
      await dataContext.publishMessage(queue.queueName, { message });
      setMessage(""); // Clear the input after publishing
      dataContext.fetchAllQueues(); // Refresh the queues to update counts
    } catch (error) {
      console.error("Error publishing message:", error);
    }
  };

  return (
    <>
      <div
        style={{
          margin: "25px",
          alignItems: "center",
          textAlign: "left",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "10px",
          lineHeight: "30px",
        }}
      >
        <div>Queue name: {queue.queueName}</div>
        <div>Queue length: {queue.count}</div>
        <div>
          <button
            onClick={getMsg}
            style={{
              backgroundColor: "#001f3f",
              color: "#ffffff",
              borderRadius: "20px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Get Next Message
          </button>
        </div>
        <div style={{ marginTop: "10px" }}>
          <strong>Next Message:</strong>
          <div style={{ marginTop: "5px", fontStyle: "italic" }}>
            {nextMessage !== null
              ? nextMessage
              : "Click 'Get Next Message' to retrieve the next message."}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter new message"
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginRight: "10px",
              flex: 1,
            }}
          />
          <button
            onClick={publishMessage}
            style={{
              backgroundColor: "#001f3f",
              color: "#ffffff",
              borderRadius: "20px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Publish Message
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleQueue;
