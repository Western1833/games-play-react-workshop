import Login from "./components/Authentication/Login.jsx";
import Logout from "./components/Authentication/Logout.jsx";
import Register from "./components/Authentication/Register.jsx";
import CreateGame from "./components/CreateGame/CreateGame.jsx";
import GameList from "./components/Game-list/GameList.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { paths } from "./utils/apis.js";
import Details from "./components/Details/Details.jsx";
import { useState } from "react";
import AuthContext from "./contexts/authContext.js";
import * as authService from '../src/services/authService.js';

function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    sessionStorage.setItem('accessToken', result.accessToken);

    navigate(paths.homePage);
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    sessionStorage.setItem('accessToken', result.accessToken);

    navigate(paths.homePage);
  }

  const logoutHandler = () => {
    setAuth({});

    sessionStorage.removeItem('accessToken');

    navigate(paths.homePage);
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <div id="box">
      <AuthContext.Provider value={values}>
        <Header/>

        <Routes>
          <Route path={paths.homePage} element={<Home/>}/>
          <Route path={paths.gameList} element={<GameList/>}/>
          <Route path={paths.createGame} element={<CreateGame/>}/>
          <Route path={paths.login} element={<Login/>}/>
          <Route path={paths.register} element={<Register/>}/>
          <Route path={paths.details} element={<Details/>}/>
          <Route path={paths.logout} element={<Logout/>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
