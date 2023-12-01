import * as request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/data/games';

export async function create(gameData){
    const result = await request.post(baseUrl, gameData);

    return result;
}

export async function allGames(){
    try {
        const result = await request.get(baseUrl);
    
        // Check if the response status is 404
        if (result && result.code === 404) {
          throw new Error('Resource not found');
        }
    
        return Object.values(result);
      } catch (error) {
        // Handle the error here, you can log it or handle it in another way
        console.error('Error fetching data:', error.message);
        // You might return a default value or an empty array in case of error
        return [];
      }
}

export async function getOne(gameId){
    const result = await request.get(baseUrl + '/' + gameId);
    return result;
}