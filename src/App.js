import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2100);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000";
      showAlert("Light Mode has been enabled", "info");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#0A1931";
      document.body.style.color = "#fff";
      showAlert("Dark Mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      {/* <About /> */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
      <div className="container my-4">
        <TextForm showAlert={showAlert}
          heading="Enter the text below to analyze"
          mode={mode} />
      </div>
      {/* </Route> */}
      {/* </Switch></Router> */}
    </>
  );
}

export default App;
