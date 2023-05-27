const TOKEN_KEY = "TOKEN";

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
