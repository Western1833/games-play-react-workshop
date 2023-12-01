import { useContext, useEffect } from "react";
import * as authServices from '../../services/authService.js';
import { useNavigate } from "react-router-dom";
import { paths } from "../../utils/apis.js";
import AuthContext from "../../contexts/authContext.js";


export default function Logout(){
    const {logoutHandler} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        authServices.logout()
        .then(()=> {
            logoutHandler();
        })
        .catch(() => {
            navigate(paths.homePage);
        });
    }, []);
}