import { useContext, useEffect, useState } from "react";
import { getMsg } from "../../api/api";
import { MainContext, Queue } from "../../context/MainContext";

const QueuesList = () => {
  const dataContext = useContext(MainContext);

  useEffect(() => {
    if (dataContext) dataContext.fetchAllQueues();
  }, []);

  return (
    <div>
      queues list:
      <div>
        {dataContext?.queues?.map((queue: Queue) => (
          <div
            key={queue.queueName}
            style={{
              border: "1px solid ",
              borderRadius: "10px",
              width: "80px",
              padding: "20px",
              margin: "auto",
            }}
          >
            <div>Queue name: {queue.queueName}</div>
            <div>Queue length: {queue.count}</div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueuesList;
