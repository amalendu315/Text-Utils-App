import React, { useState } from "react";
import "./App.css";
// import About from './components/About'
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <div className="body_class">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter a text to analyse below"
          mode={mode}
          showAlert={showAlert}
        />
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
