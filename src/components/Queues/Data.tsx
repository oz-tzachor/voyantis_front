import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import QueuesList from "./QueuesList";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Data = () => {
  return (
    <div className="layout">
      <Header />
      <QueuesList />
      <Footer />
    </div>
  );
};

export default Data;
