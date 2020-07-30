import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <h4 style={{ backgroundColor: "#aaa", textAlign: "center" }}>
        Hello Al!
      </h4>
      <Navbar />
      <main className="container"></main>
      <Counters />
    </React.Fragment>
  );
}

export default App;
