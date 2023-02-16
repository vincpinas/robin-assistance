import "./Scss/App.scss";
import LanguageSelector from "./Components/Language/LanguageSelector";
import ScrollDiv from "./Components/ScrollDiv/ScrollDiv";

function App() {

  return (
    <div className="App">
      <LanguageSelector />
      <ScrollDiv />
    </div>
  )
}

export default App
