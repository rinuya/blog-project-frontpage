import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App";
import { Theme } from "react-daisyui"

function RouteSwitch() {

  const [activeTheme, setActiveTheme] = useState("light")

  const changeTheme = () => {
    if (activeTheme ==="light"){
      setActiveTheme("dark");
    } else {
      setActiveTheme("light");
    } 
  }

  return (
    <BrowserRouter>
            <Theme dataTheme={activeTheme}>
      <App switchTheTheme={changeTheme} />
        </Theme>    
    </BrowserRouter>
  );
}

export default RouteSwitch;