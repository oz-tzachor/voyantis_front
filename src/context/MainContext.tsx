import React, { createContext, useState, ReactNode, FC } from "react";
import { getAllMsg, getOneMsg, postMessage } from "../api/api";

export const MainContext = createContext<any | undefined>(undefined);

export type Queue = {
  queueName: string;
  count: number;
};
export type Message = {
  message: string;
};

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [queues, setQueues] = useState<Queue[] | null>(null);

  // Fetch all queues and set them in the state
  const fetchAllQueues = async () => {
    try {
      const queuesFromDB = await getAllMsg();
      console.log("from db", queuesFromDB);
      setQueues(queuesFromDB);
    } catch (error) {
      console.error("Error fetching QUEUES:", error);
    }
  };

  // Fetch the next message from a specific queue and update the count
  const getNextMsg = async (queue: string) => {
    try {
      const nextMessage = await getOneMsg(queue);
      if (!nextMessage) {
        // No message available
        return null;
      }

      // Update the count in the state
      setQueues(
        (prevQueues) =>
          prevQueues?.map((q) =>
            q.queueName === queue
              ? { ...q, count: Math.max(0, q.count - 1) } // Decrement count, ensuring it doesn't go below 0
              : q
          ) || null
      );

      console.log("next msg from db", nextMessage);
      return nextMessage;
    } catch (error) {
      console.error("Error fetching next message:", error);
      return null;
    }
  };

  // Publish a new message to a specific queue
  const publishMessage = async (queueName: string, message: Message) => {
    try {
      await postMessage(queueName, message);
      fetchAllQueues();
    } catch (error) {
      console.error("Error publishing message:", error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        queues,
        setQueues,
        fetchAllQueues,
        getNextMsg,
        publishMessage,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
