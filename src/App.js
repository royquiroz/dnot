import React from "react";
import Navbar from "./components/navbar/navbar";
import Router from "./routes/router";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
