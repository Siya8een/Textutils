// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from './components/About';
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'dark';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'light';
    }
  };
  return (
    <>
      <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm Mode={Mode} toggleMode={toggleMode} heading="Enter the text to analyse below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
