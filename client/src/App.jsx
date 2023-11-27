import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
import GameList from "./components/Game-list/GameList.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import { paths } from "./utils/apis.js";

function App() {
  return (
    <div id="box">
      <Header/>

      <Routes>
        <Route path={paths.homePage} element={<Home/>}/>
        <Route path={paths.gameList} element={<GameList/>}/>
        <Route path={paths.createGame} element={<CreateGame/>}/>
        <Route path={paths.login} element={<Login/>}/>
        <Route path={paths.register} element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
