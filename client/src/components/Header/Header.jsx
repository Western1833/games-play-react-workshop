import {Link} from 'react-router-dom';
import { paths } from '../../utils/apis.js';

export default function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to={paths.homePage}>GamesPlay</Link></h1>
            <nav>
                <Link to={paths.gameList}>All games</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to={paths.createGame}>Create Game</Link>
                    <Link to={paths.logout}>Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to={paths.login}>Login</Link>
                    <Link to={paths.register}>Register</Link>
                </div>
            </nav>
        </header>
    );
}