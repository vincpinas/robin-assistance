import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import "./Scss/App.scss";


function App() {
  const [logoState, setLogoState] = useState<boolean>(true);


  useEffect(() => {
    setTimeout(() => {
      setLogoState(false);
    }, 800)
  }, [])


  return (
    <>
      <Navigation logoState={logoState} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={null} />
      </Routes>
    </>
  )
}

export default App
