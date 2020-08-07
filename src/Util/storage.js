const USER_TOKEN = 'token';

export function getUserToken(){
    return localStorage.getItem(USER_TOKEN);
}

export function setUserToken(token){
    return localStorage.setItem(USER_TOKEN, token);
}