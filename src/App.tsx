import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import "./Scss/App.scss";


function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
