import GameList from "./components/Game-list/GameList.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div id="box">
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<GameList/>}/>
      </Routes>
    </div>
  )
}

export default App
