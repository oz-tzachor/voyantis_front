import React from "react";
import "./App.css";
import { MainProvider } from "./context/MainContext";
import Data from "./components/Queues/Data";

function App() {
  return (
    <MainProvider>
      <div className="App">
        <Data />
      </div>
    </MainProvider>
  );
}

export default App;
