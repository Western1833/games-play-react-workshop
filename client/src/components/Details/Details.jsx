import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from '../../services/gameService.js';
import { create, getAll } from "../../services/commentService.js";

export default function Details() {
    const {gameId} = useParams();
    const [game, setGame] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(gameId)
        .then(setGame)

        getAll()
        .then(setComments)
    }, [gameId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await create(gameId,
            formData.get('username'),
            formData.get('comment')
            );

        return newComment;
    }

    return(
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title}/>
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul> 
                        {comments.map(({username, text}) => (
                            <li className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}                       
                    </ul> 
                    {comments.length === 0 && (<p className="no-comment">No comments.</p>)}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <form className="form" onSubmit={addCommentHandler}>
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="username" />
                    <label>Add new comment:</label>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>

        </section>
    );
}