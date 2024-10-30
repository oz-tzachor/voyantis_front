import { useContext, useEffect } from "react";
import { MainContext, Queue } from "../../context/MainContext";
import SingleQueue from "./Queue";
import "../Layout/Layout.css";

const QueuesList = () => {
  const dataContext = useContext(MainContext);

  useEffect(() => {
    if (dataContext) dataContext.fetchAllQueues();
  }, []);

  return (
    <div className="queuesList">
      Queues list:
      <div className="">
        {dataContext?.queues?.map((queue: Queue) => (
          <SingleQueue queue={queue} />
        ))}
      </div>
    </div>
  );
};

export default QueuesList;
