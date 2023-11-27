import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
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
        <Route path="/game-create" element={<CreateGame/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
