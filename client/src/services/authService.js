import * as request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/users'

export async function login(email, password){
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
}

export async function register(email, password){
    const result = await request.post(`${baseUrl}/register`, {
        email,
        password
    });

    return result;
}

export async function logout(){
    await request.get(`${baseUrl}/logout`);
}