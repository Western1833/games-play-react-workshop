import * as request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text
    });

    return newComment;
}

export const getAll = async (gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}