import React, { useState } from "react";
import HeaderComp from "./home/HeaderComp";
import CoverComp from "./home/CoverComp";
import FaqComp from "./home/FaqComp";
import FooterComp from "./home/FooterComp";
import { Login } from "./home/LoginComp";
import { Register } from "./home/RegisterComp";

import "./App.css";
const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="app">
      <HeaderComp />
      <div className="Form">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
      <CoverComp />
      <FaqComp />
      <FooterComp />
    </div>
  );
};

export default App;
