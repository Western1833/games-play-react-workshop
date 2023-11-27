const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function create(gameData){
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
}

export async function allGames(){
    const response = await fetch(baseUrl);
    const result = await response.json();

    return Object.values(result);
}