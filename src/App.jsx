import { useState } from "react";

import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <HomePage></HomePage>
      </div>
    </>
  );
}

export default App;
