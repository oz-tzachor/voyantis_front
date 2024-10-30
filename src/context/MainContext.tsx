import React, { createContext, useState, ReactNode, FC } from "react";
import { getMsg } from "../api/api";

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

  const fetchAllQueues = async () => {
    console.log("fetch!");
    try {
      const queuesFromDB = await getMsg();
      console.log("from db", queuesFromDB);
      setQueues(queuesFromDB);
    } catch (error) {
      console.error("Error fetching QUEUES:", error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        queues: queues,
        setQueues: setQueues,
        fetchAllQueues: fetchAllQueues,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
