import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import QueuesList from "./QueuesList";

const Data = () => {
  const dataContext = useContext(MainContext);

  return (
    <div>
      <QueuesList />
    </div>
  );
};

export default Data;
