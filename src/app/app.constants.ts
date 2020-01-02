export const API_URL = "http://localhost:8080";
export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticatedUser";
//export const USER = "admin";
export const USER = sessionStorage.getItem(AUTHENTICATED_USER);
