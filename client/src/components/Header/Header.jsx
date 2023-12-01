import {Link} from 'react-router-dom';
import { paths } from '../../utils/apis.js';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext.js';

export default function Header() {
    const {isAuthenticated, username} = useContext(AuthContext);

    return (
        <header>
            <h1><Link className="home" to={paths.homePage}>GamesPlay</Link></h1>
            <nav>
                {isAuthenticated && (<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#333', backgroundColor: '#f0f0f0', padding: '5px 10px', borderRadius: '5px', marginBottom: '3px' }}>Hello, {username}!</span>)}

                <Link to={paths.gameList}>All games</Link>
                {isAuthenticated ? (
                    <div id="user">
                        <Link to={paths.createGame}>Create Game</Link>
                        <Link to={paths.logout}>Logout</Link>
                    </div>
                ):(
                <div id="guest">
                    <Link to={paths.login}>Login</Link>
                    <Link to={paths.register}>Register</Link>
                </div>
                )}
            </nav>
        </header>
    );
}