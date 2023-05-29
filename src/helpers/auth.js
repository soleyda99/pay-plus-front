const TOKEN_KEY = "TOKEN";
const USER = "USER"

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}
export function getGuard() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getUser(){
  return localStorage.getItem(USER);
}
export function setUser(user){
  localStorage.setItem(USER,user);
}
export function deleteUser(){
  localStorage.removeItem(USER);
}