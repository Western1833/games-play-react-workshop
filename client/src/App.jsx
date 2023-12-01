import Login from "./components/Authentication/Login.jsx";
import Register from "./components/Authentication/Register.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
import GameList from "./components/Game-list/GameList.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route} from 'react-router-dom';
import { paths } from "./utils/apis.js";
import Details from "./components/Details/Details.jsx";
import { useState } from "react";
import AuthContext from "./contexts/authContext.js";

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <div id="box">
      <AuthContext.Provider value={loginSubmitHandler}>
        <Header/>

        <Routes>
          <Route path={paths.homePage} element={<Home/>}/>
          <Route path={paths.gameList} element={<GameList/>}/>
          <Route path={paths.createGame} element={<CreateGame/>}/>
          <Route path={paths.login} element={<Login/>}/>
          <Route path={paths.register} element={<Register/>}/>
          <Route path={paths.details} element={<Details/>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
