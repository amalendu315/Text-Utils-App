import React, { useState } from "react";
import "./App.css";
// import About from './components/About'
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="body_class">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter a text to analyse below" mode={mode} />
      </div>
      {/* <About/> */}
      {/* <hr className="line" />
      <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
