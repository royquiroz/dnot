import React from "react";
import FileUpload from "./components/upload/upload";
import Navbar from "./components/navbar/navbar";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <FileUpload />
    </div>
  );
}

export default App;
