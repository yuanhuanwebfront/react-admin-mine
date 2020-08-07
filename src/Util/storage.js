const USER_TOKEN = 'token';

export function getUserToken(){
    return localStorage.getItem(USER_TOKEN);
}