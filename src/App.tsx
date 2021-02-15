import React from "react";
import "./App.css";
import Steppers from "./component/stepper";

function App() {
  return (
    <div className="App">
      <div className="containner">
        <h1>Sign-up Form</h1>
      </div>
      <Steppers />
      <div>
        <h3 className='footerA'>Developed by Athar Rasool </h3>
      
      </div>
    </div>
  );
}

export default App;
