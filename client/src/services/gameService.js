const baseUrl = 'http://localhost:3030/jsonstore/games';
import * as request from '../utils/request.js';

export async function create(gameData){
    const result = await request.post(baseUrl, gameData);

    return result;
}

export async function allGames(){
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export async function getOne(gameId){
    const result = await request.get(baseUrl + '/' + gameId);
    return result;
}