import { useEffect } from 'react';
import "./Scss/App.scss";
import LanguageSelector from "./Components/Language/LanguageSelector";
import ScrollDiv from "./Components/ScrollDiv/ScrollDiv";

function App() {

  return (
    <div id="App">
      <LanguageSelector />
      <ScrollDiv markers />
    </div>
  )
}

export default App
